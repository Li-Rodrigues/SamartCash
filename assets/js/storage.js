const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("smartcash:transactions")) || [];
    },
    set(transactions) {
        localStorage.setItem("smartcash:transactions", JSON.stringify(transactions));
    }
};