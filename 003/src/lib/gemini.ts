const MODEL = 'gemini-2.0-flash';

interface GenerateOptions {
  apiKey: string;
  prompt: string;
  systemPrompt: string;
  responseSchema?: Record<string, unknown>;
}

interface GeminiResponse {
  candidates?: { content?: { parts?: { text?: string }[] } }[];
}

/**
 * Call the Google Gemini generateContent endpoint with retry/backoff.
 * The API key is supplied by the user (stored locally) — nothing is bundled.
 */
export async function generateContent({
  apiKey,
  prompt,
  systemPrompt,
  responseSchema,
}: GenerateOptions): Promise<string> {
  if (!apiKey) throw new Error('Missing Gemini API key.');

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${encodeURIComponent(
    apiKey,
  )}`;

  const body: Record<string, unknown> = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };
  if (responseSchema) {
    body.generationConfig = {
      responseMimeType: 'application/json',
      responseSchema,
    };
  }

  let delay = 1000;
  let lastError: unknown;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = (await response.json()) as GeminiResponse;
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return text;
      throw new Error('Empty response from Gemini.');
    } catch (err) {
      lastError = err;
      if (attempt === 3) break;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Gemini request failed.');
}
