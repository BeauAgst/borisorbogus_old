import game from './game';

const buttons = {

    init() {
        this.startGame();
        this.correctAnswer();
    },

    startGame() {
        const startButton = document.querySelector('.start-game');
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            const introContainer = document.querySelector('.intro-container');
            const gameContainer = document.querySelector('.game-container');
            document.body.removeChild(introContainer);
            gameContainer.classList.add('active');
        });
    },

    correctAnswer() {
        const correctButton = document.querySelector('.correct-button');
        correctButton.addEventListener('click', (e) => {
            e.preventDefault();
            const card = document.querySelector('.cue-card.active');
            const container = document.querySelector('.cue-card-container');
            container.removeChild(card);
            game.getCard();
        });
    },
};

export { buttons as default };
