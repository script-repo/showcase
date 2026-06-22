import { DOMAINS, type Domain, type Question } from '../types';

const DOMAIN_KEYWORDS: { keyword: string; domain: Domain }[] = [
  { keyword: 'kubernetes fundamentals', domain: 'Kubernetes Fundamentals' },
  { keyword: 'container orchestration', domain: 'Container Orchestration' },
  { keyword: 'application delivery', domain: 'Cloud Native Application Delivery' },
  { keyword: 'architecture', domain: 'Cloud Native Architecture' },
];

interface Draft {
  domain: Domain;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
  multiAnswer: boolean;
}

/**
 * Parse a markdown question bank (same format as KCNA_Question_Bank.md) into
 * Question objects. `startId` is used to keep ids unique against the existing bank.
 */
export function parseMarkdownBank(markdown: string, startId: number): Question[] {
  const lines = markdown.split('\n');
  const drafts: Draft[] = [];
  let currentDomain: Domain = DOMAINS[0];
  let current: Draft | null = null;

  const flush = () => {
    if (
      current &&
      current.options.length >= 2 &&
      current.correctIndex >= 0 &&
      current.correctIndex < current.options.length &&
      !current.multiAnswer
    ) {
      drafts.push(current);
    }
    current = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    const headingMatch = line.match(/^#+\s+(.*)$/);
    if (headingMatch) {
      const text = headingMatch[1].toLowerCase();
      const found = DOMAIN_KEYWORDS.find((d) => text.includes(d.keyword));
      if (found) {
        currentDomain = found.domain;
        continue;
      }
    }

    const qMatch = line.match(/^###\s+Q?(\d+)?:?\s*(.*)$/i);
    if (line.startsWith('### ') && qMatch) {
      flush();
      current = {
        domain: currentDomain,
        question: (qMatch[2] || '').trim(),
        options: [],
        correctIndex: -1,
        explanation: '',
        source: 'Imported',
        multiAnswer: false,
      };
      continue;
    }

    if (!current) continue;

    const optMatch = line.match(/^([A-D])\.\s+(.*)$/);
    if (optMatch && current.options.length < 4) {
      current.options.push(optMatch[2].trim());
      continue;
    }

    const ansMatch = line.match(/^\*\*?Correct Answer:\*?\*?\s*([A-D])[.)]?/i);
    if (ansMatch) {
      const refs = line.replace(/^\*\*?Correct Answer:\*?\*?/i, '').match(/\b[A-D]\./g);
      current.multiAnswer = Boolean(refs && refs.length > 1);
      current.correctIndex = ansMatch[1].toUpperCase().charCodeAt(0) - 65;
      continue;
    }

    const expMatch = line.match(/^>\s*(?:\*\*Explanation:\*\*)?\s*(.*)$/);
    if (expMatch) {
      const part = expMatch[1].trim();
      current.explanation = current.explanation ? `${current.explanation} ${part}`.trim() : part;
      continue;
    }

    const srcMatch = line.match(/^\*Source:\s*(.*?)\*?$/i);
    if (srcMatch) {
      current.source = srcMatch[1].replace(/\*+$/, '').trim();
      continue;
    }
  }
  flush();

  return drafts.map((d, idx) => ({
    id: startId + idx,
    domain: d.domain,
    question: d.question,
    options: d.options,
    correctIndex: d.correctIndex,
    explanation: d.explanation,
    source: d.source,
  }));
}
