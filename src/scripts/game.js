const game = {
    quotes: [
        {
            topic: 'Libya',
            quote: 'They have a got brilliant vision to turn Sirte ... into the next Dubai. The only thing they’ve got to do is clear the dead bodies.',
        },
        {
            topic: 'Turkish president, Recep Tayyip Erdogan',
            quote: 'There was a young fellow from Ankara, Who was a terrific wankerer. Till he sowed his wild oats, With the help of a goat, But he didn\'t even stop to thankera.',
        },
        {
            topic: 'Black people',
            quote: 'It is said that the Queen has come to love the Commonwealth, partly because it supplies her with regular cheering crowds of flag-waving piccaninnies.',
        },
        {
            topic: 'Hillary Clinton',
            quote: 'She\'s got dyed blonde hair and pouty lips, and a steely blue stare, like a sadistic nurse in a mental hospital.',
        },
        {
            topic: 'Gay marriage',
            quote: 'If gay marriage was OK – and I was uncertain on the issue – then I saw no reason in principle why a union should not be consecrated between three men, as well as two men, or indeed three men and a dog',
        },
    ],
    usedQuotes: [],

    init() {
        this.getCard();
    },

    getCard() {
        const quotesCount = this.quotes.length;
        const index = Math.floor(Math.random() * quotesCount);
        const beenUsed = this.usedQuotes.indexOf(index) !== -1;
        if (beenUsed && this.usedQuotes.length === quotesCount) return this.endGame();
        if (beenUsed) return this.getCard();
        this.usedQuotes.push(index);
        return this.getQuote(index);
    },

    getQuote(index) {
        const topic = `On... ${this.quotes[index].topic}`;
        const quote = `‘${this.quotes[index].quote}’`;
        this.setCard(index, topic, quote);
    },

    setCard(index, topic, quote) {
        const container = document.querySelector('.cue-card-container');
        const card = document.createElement('div');
        const content = `<div class="inner"><div class="content"><div class="title"><span>${topic}</span></div><div class="quote"><span>${quote}</span></div></div></div>`;
        card.className = 'cue-card active';
        card.dataset.index = index;
        card.innerHTML = content;
        container.appendChild(card);
    },

    endGame() {
        this.setCard('end', 'No more quotes', 'Do something here.');
    },
};

export { game as default };
