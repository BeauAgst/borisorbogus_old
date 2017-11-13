const trackMouse = {
    el: '',
    pupil: '',
    pupilRadius: 0,
    center: 0,
    mouseX: 0,
    mouseY: 0,

    init(el) {
        if (this.isTouch()) return;
        this.el = document.querySelector(el);
        this.pupil = this.el.querySelector('.pupil');
        this.pupil.style.transform = 'none';
        this.pupilRadius = this.pupil.offsetWidth / 2;
        this.setDefaults();
        this.followMouse();
        this.onResize();
    },

    isTouch() {
        return ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) == true;
    },

    setDefaults() {
        this.center = {
            x: this.el.offsetWidth / 2 - this.pupilRadius,
            y: this.el.offsetHeight / 2 - this.pupilRadius,
        };
        const eyePosition = this.el.getBoundingClientRect();
        this.top = eyePosition.top;
        this.left = eyePosition.left;
    },

    onResize() {
        window.addEventListener('resize', () => {
            this.setDefaults();
        });
    },

    followMouse() {
        window.addEventListener('mousemove', (e) => {
            const d = {
                x: e.pageX - this.pupilRadius - this.left - this.center.x,
                y: e.pageY - this.pupilRadius - this.top - this.center.y,
            };
            const distance = Math.sqrt((d.x * d.x) + (d.y * d.y));
            this.checkThreshold(d, distance, e);
            this.movePupil();
        });
    },

    checkThreshold(d, distance, e) {
        if (distance < this.center.x) {
            this.mouseX = e.pageX - this.eft - this.pupilRadius;
            this.mouseY = e.pageY - this.top - this.pupilRadius;
        } else {
            this.mouseX = ((d.x / distance) * this.center.x) + this.center.x;
            this.mouseY = ((d.y / distance) * this.center.y) + this.center.y;
        }
    },

    movePupil() {
        setInterval(() => {
            let xp = 0;
            let yp = 0;
            xp += (this.mouseX - xp) / 1;
            yp += (this.mouseY - yp) / 1;
            this.pupil.style.top = `${yp}px`;
            this.pupil.style.left = `${xp}px`;
        }, 1);
    },
};

export { trackMouse as default };
