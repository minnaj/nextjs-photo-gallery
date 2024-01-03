export function parseNumber<T>(value: string | null, fallback: T) {
  if (!value) {
    return fallback;
  }
  const valueAsNumber = Number.parseInt(value, 10);
  if (Number.isNaN(valueAsNumber)) {
    return fallback;
  }
  return valueAsNumber;
}
