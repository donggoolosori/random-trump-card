import cardArray from './CardArray';

export class Card {
  card: string[];

  constructor() {
    this.card = cardArray;
    console.log(this.card);
  }
}
