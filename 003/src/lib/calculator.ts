const SAFE = /^[0-9+\-*/.\s]+$/;

/**
 * Evaluate a basic arithmetic expression produced by the on-screen calculator.
 * Input is restricted to digits and + - * / . so it is safe to evaluate.
 */
export function evaluateExpression(expr: string): string {
  if (!expr || !SAFE.test(expr)) return 'Error';
  try {
    // eslint-disable-next-line no-new-func
    const result = Function(`"use strict"; return (${expr});`)();
    if (typeof result !== 'number' || !Number.isFinite(result)) return 'Error';
    return String(Math.round(result * 1e8) / 1e8);
  } catch {
    return 'Error';
  }
}

export function pressCalculatorKey(current: string, key: string): string {
  if (key === 'C') return '';
  if (key === '=') return evaluateExpression(current);
  if (current === 'Error') return /[0-9.]/.test(key) ? key : '';
  return current + key;
}
