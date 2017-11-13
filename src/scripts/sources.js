import quotes from './quotes';

const sources = {

    generate(correct = true) {
        const container = document.querySelector('.source-container');
        const { index } = document.querySelector('.quote-card.active').dataset;
        this.clearAll();
        this.title(container, correct);
        this.information(container, index);
        this.sources(index);
        this.toggle(correct);
    },

    clearAll() {
        const title = document.querySelector('.source-container .title span');
        const information = document.querySelector('.sources .more-info span');
        const list = document.querySelector('.sources .references ul');
        title.innerHTML = '';
        information.innerHTML = '';
        list.innerHTML = '';
    },

    toggle() {
        const el = document.querySelector('.source-container');
        const classes = el.classList;
        const isActive = classes.contains('active');
        if (isActive) classes.remove('active');
        else {
            classes.add('active');
        }
    },

    title(el, correct) {
        const title = document.querySelector('.source-container .title span');
        const text = correct ? 'That\'s correct!' : 'Incorrect!';
        if (correct) el.classList.add('correct');
        else el.classList.remove('correct');
        title.innerHTML = text;
    },

    information(el, index) {
        const information = document.querySelector('.sources .more-info span');
        information.innerHTML = quotes[index].more;
    },

    sources(index) {
        const list = document.querySelector('.sources .references ul');
        const { refs } = quotes[index];

        Object.keys(refs).forEach((ref) => {
            const listItem = document.createElement('li');
            const data = `<li><a rel="noopener" target="_blank" href="${quotes[index].refs[ref]}"><span>${ref}</span></a></li>`;
            listItem.innerHTML = data;
            list.appendChild(listItem);
        });
    },
};

export { sources as default };
