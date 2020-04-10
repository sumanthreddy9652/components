import { r as registerInstance, h } from './core-645fdfe2.js';

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "card img-fluid" }, h("a", { href: this.redirectUrl, class: "stretched-link" }, h("img", { class: "card-img-top", src: this.imageUrl, alt: "Card image" }), h("div", { class: "card-img-overlay" }, h("p", { class: "card-subtitle" }, this.cardTitle)))));
    }
};

export { Card as card_component };
