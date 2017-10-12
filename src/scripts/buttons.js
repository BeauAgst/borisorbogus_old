import game from './game';

const buttons = {

    init() {
        this.startGame();
    },

    startGame() {
        const startButton = document.querySelector('.begin-game');
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            const introContainer = document.querySelector('.introduction');
            const gameContainer = document.querySelector('.game-container');
            introContainer.classList.add('removed');
            setTimeout(() => {
                document.body.removeChild(introContainer);
            }, 700);
            game.init();
            gameContainer.classList.add('active');
        });
    },
};

export { buttons as default };
