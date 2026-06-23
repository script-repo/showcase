import type { Question } from '../types';

/** Return a new array with the elements shuffled (unbiased Fisher-Yates). */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface ShuffledQuestion extends Question {
  /** Maps a displayed option position to its original (canonical) option index. */
  optionOrder: number[];
}

/** Build a presentation question with its options shuffled and correctIndex remapped. */
export function shuffleQuestionOptions(q: Question): ShuffledQuestion {
  const order = shuffle(Array.from({ length: q.options.length }, (_, i) => i));
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    correctIndex: order.indexOf(q.correctIndex),
    optionOrder: order,
  };
}
