const animations = {

    fadeOut(el, parent) {
        let opacity = 1;
        const timer = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(timer);
                el.style.display = 'none';
                parent.removeChild(el);
            }
            el.style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 50);
    },
};

export { animations as default };