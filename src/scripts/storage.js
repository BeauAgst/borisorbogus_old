const storage = {

    set(key, data) {
        const object = JSON.stringify(data);
        localStorage.setItem(key, object);
    },

    get(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    },
};

export { storage as default };
