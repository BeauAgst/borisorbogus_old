import quotes from './quotes';
import sources from './sources';

const game = {
    usedQuotes: [],

    init() {
        this.getCard();
        this.correctAnswer();
        this.wrongAnswer();
        this.nextQuote();
    },

    getCard() {
        const quotesCount = quotes.length;
        const index = Math.floor(Math.random() * quotesCount);
        const beenUsed = this.usedQuotes.indexOf(index) !== -1;
        if (beenUsed && this.usedQuotes.length === quotesCount) return this.endGame();
        if (beenUsed) return this.getCard();
        this.usedQuotes.push(index);
        return this.getQuote(index);
    },

    getQuote(index) {
        const { topic, quote } = quotes[index];
        this.setCard(index, `On... ${topic}`, quote);
    },

    clearCard() {
        const container = document.querySelector('.cue-card-container');
        const card = document.querySelector('.cue-card.active');
        container.removeChild(card);
    },

    setCard(index, topic, quoteArray) {
        const quote = this.splitQuote(quoteArray);
        const container = document.querySelector('.cue-card-container');
        const card = document.createElement('div');
        const content = `<div class="inner"><div class="content"><div class="title"><span>${topic}</span></div><div class="quote">${quote}</div></div></div>`;
        card.className = 'cue-card active';
        card.dataset.index = index;
        card.innerHTML = content;
        container.appendChild(card);
    },

    splitQuote(quote) {
        if (quote.length <= 1) return `<span>${quote}</span>`;
        return quote.reduce((string, line) => `${string}<span>${line}</span>`, '');
    },

    correctAnswer() {
        const button = document.querySelector('.correct-button .btn');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            sources.generate();
        });
    },

    wrongAnswer() {
        const button = document.querySelector('.wrong-button .btn');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            sources.generate(false);
        });
    },

    nextQuote() {
        const button = document.querySelector('.next-quote');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            this.clearCard();
            this.getCard();
            sources.toggle();
        });
    },

    endGame() {
        this.setCard('end', 'No more quotes', ['Do something here.']);
    },
};

export { game as default };
