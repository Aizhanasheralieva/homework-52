import Card from "./Card.ts";

class CardDeck {
     cards: Card[];

     constructor() {
         const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
         const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
         this.cards = [];

         for (const suit of suits) {
             for (const rank of ranks) {
                 this.cards.push(new Card(rank, suit));
             }
         }
     }
     getCard(): Card {
         const randomIndex = Math.floor(Math.random() * this.cards.length);
         const card = this.cards.splice(randomIndex, 1)[0];
         return card;
     }

     getCards(howMany: number): Card[] {
         const drawnCards: Card[] = [];
         for (let i= 0; i < howMany; i++) {
             drawnCards.push(this.getCard());
         }
         return drawnCards;
     }
}
export default CardDeck;