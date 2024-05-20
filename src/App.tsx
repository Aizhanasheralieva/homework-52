import './App.css';
import CardDeck from "./lib/CardDeck.ts";




let cardDeck = new CardDeck();

const singleCard = cardDeck.getCard();
console.log(`Извлеченная карта: ${singleCard.rank} ${singleCard.suit}`);

const multipleCards = cardDeck.getCards(5);
console.log('Извлеченные карты:');
multipleCards.forEach(card => {
    console.log(`${card.rank} ${card.suit}`);
});
const App = () => {


    return (
        <div>

        </div>
    );
};

export default App;
