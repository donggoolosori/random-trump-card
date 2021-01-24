import cardArray from './CardArray';

export class Card {
  card: string[];

  constructor() {
    this.card = cardArray.sort(() => Math.random() - 0.5);
    console.log(this.card);
  }
}
