import type { SoundType } from './hooks/useSound';
import type { Domain } from './types';

export type SoundPlayer = (type: SoundType) => void;
export type AnswerMap = Record<number, number>;
export type FlagMap = Record<number, boolean>;
export type FeedbackMap = Record<number, { checked: boolean; correct: boolean }>;

export interface DomainStat {
  name: Domain;
  total: number;
  correct: number;
  rate: number;
}

export interface GeneratedQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ExplainModalData {
  question: string;
  correctOption: string;
  response: string;
}
