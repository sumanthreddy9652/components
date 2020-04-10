import { h } from "@stencil/core";
export class CardDeck {
    render() {
        return (h("div", { class: "card-deck" },
            h("slot", null)));
    }
    static get is() { return "card-deck"; }
}
