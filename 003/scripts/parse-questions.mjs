// Build-time generator: parses KCNA_Question_Bank.md into a typed TS module.
// Run with: npm run generate:questions
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const SOURCE = resolve(ROOT, 'KCNA_Question_Bank.md');
const OUT = resolve(ROOT, 'src/data/questions.ts');

// Curated external-reference files, keyed by the same Q<n> numbers as the bank.
const REFERENCE_FILES = [
  'kcna_batch1_curated_specific_urls.md',
  'kcna_batch2_curated_specific_urls.md',
  'kcna_batch3_curated_specific_urls.md',
];

const DOMAINS = [
  'Kubernetes Fundamentals',
  'Container Orchestration',
  'Cloud Native Application Delivery',
  'Cloud Native Architecture',
];

/**
 * Parse the markdown bank into an array of question objects.
 * @param {string} markdown
 */
function parseBank(markdown) {
  const lines = markdown.split('\n');
  const questions = [];
  let currentDomain = DOMAINS[0];
  let current = null;
  let nextId = 1;

  let skippedMulti = 0;
  const flush = () => {
    if (current && current.options.length >= 2 && current.correctIndex >= 0) {
      if (current.multiAnswer) {
        skippedMulti++;
      } else {
        delete current.multiAnswer;
        questions.push(current);
      }
    }
    current = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // Domain heading (single `#`, exact domain name).
    const headingMatch = line.match(/^#\s+(.*)$/);
    if (headingMatch && DOMAINS.includes(headingMatch[1].trim())) {
      currentDomain = headingMatch[1].trim();
      continue;
    }

    // Question start: "### Q123: text"
    const qMatch = line.match(/^###\s+Q(\d+):\s*(.*)$/i);
    if (qMatch) {
      flush();
      current = {
        id: nextId++,
        sourceNumber: Number(qMatch[1]),
        domain: currentDomain,
        question: qMatch[2].trim(),
        options: [],
        correctIndex: -1,
        explanation: '',
        source: 'KCNA Question Bank',
      };
      continue;
    }

    if (!current) continue;

    // Option line: "A. text" (markdown line breaks add trailing spaces)
    const optMatch = line.match(/^([A-D])\.\s+(.*)$/);
    if (optMatch && current.options.length < 4) {
      current.options.push(optMatch[2].trim());
      continue;
    }

    // Correct answer: "**Correct Answer:** C. text"
    const ansMatch = line.match(/^\*\*Correct Answer:\*\*\s*([A-D])[.)]?/i);
    if (ansMatch) {
      // Multi-answer questions (e.g. "A. Foo and C. Bar") don't fit the
      // single-select UI, so flag them to be dropped.
      const letterRefs = line.replace(/^\*\*Correct Answer:\*\*/i, '').match(/\b[A-D]\./g);
      current.multiAnswer = Boolean(letterRefs && letterRefs.length > 1);
      current.correctIndex = ansMatch[1].toUpperCase().charCodeAt(0) - 65;
      continue;
    }

    // Explanation: "> **Explanation:** text" (may continue on following `>` lines)
    const expMatch = line.match(/^>\s*(?:\*\*Explanation:\*\*)?\s*(.*)$/);
    if (expMatch) {
      const part = expMatch[1].trim();
      current.explanation = current.explanation
        ? `${current.explanation} ${part}`.trim()
        : part;
      continue;
    }

    // Source: "*Source: ...*"
    const srcMatch = line.match(/^\*Source:\s*(.*?)\*?$/i);
    if (srcMatch) {
      current.source = srcMatch[1].replace(/\*+$/, '').trim();
      continue;
    }
  }
  flush();
  return { questions, skippedMulti };
}

/**
 * Build a map of bank Q-number -> external reference URL from the batch files.
 * @param {string[]} files
 * @returns {Map<number, string>}
 */
function parseReferences(files) {
  const refMap = new Map();
  for (const file of files) {
    const path = resolve(ROOT, file);
    let markdown;
    try {
      markdown = readFileSync(path, 'utf8');
    } catch {
      console.warn(`Reference file not found, skipping: ${file}`);
      continue;
    }

    const lines = markdown.split('\n');
    let currentNumber = null;
    for (const raw of lines) {
      const line = raw.trim();

      const qMatch = line.match(/^###\s+Q(\d+):/i);
      if (qMatch) {
        currentNumber = Number(qMatch[1]);
        continue;
      }

      const refMatch = line.match(/^\*\*External Reference:\*\*\s*\[[^\]]*\]\(([^)]+)\)/i);
      if (refMatch && currentNumber != null) {
        refMap.set(currentNumber, refMatch[1].trim());
      }
    }
  }
  return refMap;
}

function main() {
  const markdown = readFileSync(SOURCE, 'utf8');
  const { questions, skippedMulti } = parseBank(markdown);

  const refMap = parseReferences(REFERENCE_FILES);
  for (const q of questions) {
    const ref = refMap.get(q.sourceNumber);
    if (ref) q.reference = ref;
  }

  // Reassign contiguous ids after filtering.
  questions.forEach((q, idx) => {
    q.id = idx + 1;
  });

  // Validation
  const errors = [];
  for (const q of questions) {
    if (q.options.length !== 4) {
      errors.push(`Q${q.sourceNumber} has ${q.options.length} options`);
    }
    if (q.correctIndex < 0 || q.correctIndex > q.options.length - 1) {
      errors.push(`Q${q.sourceNumber} has invalid correctIndex ${q.correctIndex}`);
    }
    if (!q.explanation) {
      errors.push(`Q${q.sourceNumber} has no explanation`);
    }
    if (!q.reference) {
      errors.push(`Q${q.sourceNumber} has no external reference`);
    }
  }

  const byDomain = DOMAINS.map(
    (d) => `${d}: ${questions.filter((q) => q.domain === d).length}`,
  );

  const header = `// AUTO-GENERATED by scripts/parse-questions.mjs — do not edit by hand.
// Regenerate with: npm run generate:questions
// Source: KCNA_Question_Bank.md
import type { Question } from '../types';

export const QUESTION_BANK: Question[] = ${JSON.stringify(
    questions.map(({ sourceNumber, ...rest }) => ({
      ...rest,
      source: `${rest.source} (Q${sourceNumber})`,
    })),
    null,
    2,
  )};
`;

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, header, 'utf8');

  console.log(`Parsed ${questions.length} questions (${skippedMulti} multi-answer skipped).`);
  console.log(byDomain.join('\n'));
  if (errors.length) {
    console.warn(`\nWARNINGS (${errors.length}):`);
    console.warn(errors.join('\n'));
  } else {
    console.log('\nAll questions valid (4 options, valid answer, explanation present).');
  }
}

main();
