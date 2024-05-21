
class PokerHand {
     cards = [];


    constructor(cards: string[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        if (this.isOnePair()) {
            return 'One pair';
        }
        if (this.isTwoPairs()) {
            return 'Two pairs';
        }
        if(this.isThreeOfAKind()) {
            return 'Three of a kind';
        }
        if (this.isFlush()) {
            return 'Flush';
        } else {
            return 'High card(Any of the above mentioned!';
        }
    }

    private isOnePair(): boolean{
        const rankCounts:Record<string, number> = this.getRankCounts();
        return Object.values(rankCounts).includes(2);
    }

    private isTwoPairs(): boolean {
        const rankCounts: Record<string, number> = this.getRankCounts();
        const pairs = Object.values(rankCounts).filter(count => count ===2);
        return pairs.length === 2;
    }
    private isThreeOfAKind(): boolean {
        const rankCounts: Record<string, number> = this.getRankCounts();
        return Object.values(rankCounts).includes(3);
    }
    private isFlush() {
        const suit = this.cards[0][1];
        return this.cards.every(card => card[1] === suit);
    }

    private getRankCounts(): Record<string, number> {
        const rankCounts: Record<string, number> = {};
        this.cards.forEach(card => {
            const rank = card[0];
            rankCounts[rank] = (rankCounts[rank] || 0) + 1;
        });
        return rankCounts;
    }
}
export default PokerHand;