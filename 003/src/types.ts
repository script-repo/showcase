export type Domain =
  | 'Kubernetes Fundamentals'
  | 'Container Orchestration'
  | 'Cloud Native Application Delivery'
  | 'Cloud Native Architecture';

export interface Question {
  id: number;
  domain: Domain;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
  reference?: string;
}

export const DOMAINS: Domain[] = [
  'Kubernetes Fundamentals',
  'Container Orchestration',
  'Cloud Native Application Delivery',
  'Cloud Native Architecture',
];
