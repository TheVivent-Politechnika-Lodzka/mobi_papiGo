export function getRandomIntInclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloatInclusive(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getRandomItem<T>(items: T[]): T {
  return items[getRandomIntInclusive(0, items.length - 1)];
}

export function getRandomPointInRange(x: number, y: number, range: number) {
  return {
    x: getRandomFloatInclusive(x - range, x + range),
    y: getRandomFloatInclusive(y - range, y + range),
  };
}
