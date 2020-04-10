import { r as registerInstance, h } from './core-645fdfe2.js';

const CardDeck = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "card-deck" }, h("slot", null)));
    }
};

export { CardDeck as card_deck };
