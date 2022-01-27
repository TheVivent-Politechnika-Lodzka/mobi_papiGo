import { v4 as uuid } from 'uuid';

export class DbData {
  id: string = '';
  registrationDate: Date = new Date();
  items: Item[] = [];
  animals: Animal[] = [];
}

export class Item {
  id: string = uuid();
  name: string = '';
  stars: number = 0;
  buff: Buff = new Buff();
}

export class Animal {
  id: string = uuid();
  name: string = '';
  type: AnimalType = null;
  stars: number = 0;
  stats: Stats = new Stats();
  item: Item | null = null;
}

export class Buff {
  energy?: number = 0;
  strength?: number = 0;
  agility?: number = 0;
  range?: number = 0;
}

export class Stats extends Buff {
  energy: number = 0;
  strength: number = 0;
  agility: number = 0;
  range: number = 0;
}

export type AnimalType = null | 'cat' | 'dog';
