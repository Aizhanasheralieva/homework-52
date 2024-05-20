import React from "react";

type Props = {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
};

const suitSymbolsTitles = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};

const MyCard: React.FC<Props> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbolsTitles[suit]}</span>
        </span>
    );
};

export default MyCard;