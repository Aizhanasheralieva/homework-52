import './App.css';
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";

interface Props {
    rank: string;
    suit: string;
}

let cardDeck = new CardDeck();

const singleCard = cardDeck.getCard();
console.log(`Извлеченная карта: ${singleCard.rank} ${singleCard.suit}`);

const multipleCards = cardDeck.getCards(5);
console.log('Извлеченные карты:');
multipleCards.forEach(card => {
    console.log(`${card.rank} ${card.suit}`);
});
const App = () => {
    const [cards, setCards] = useState([]);

    const dealCards = (): void => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);
    };

    return (
        <div className="App">
            <button className="dealCardsBtn" onClick={dealCards}>Раздать карты</button>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <span key={index} className={`card rank-${card.rank.toLowerCase()} ${card.suit}`}>
              <span className="rank">{card.rank}</span>
              <span className="suit">{card.suit === 'diams' ? '♦' : card.suit === 'hearts' ? '♥' : card.suit === 'clubs' ? '♣' : '♠'}</span>
            </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
