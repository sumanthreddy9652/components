import { h } from "@stencil/core";
export class Card {
    render() {
        return (h("div", { class: "card img-fluid" },
            h("a", { href: this.redirectUrl, class: "stretched-link" },
                h("img", { class: "card-img-top", src: this.imageUrl, alt: "Card image" }),
                h("div", { class: "card-img-overlay" },
                    h("p", { class: "card-subtitle" }, this.cardTitle)))));
    }
    static get is() { return "card-component"; }
    static get properties() { return {
        "redirectUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "redirect-url",
            "reflect": false
        },
        "imageUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "image-url",
            "reflect": false
        },
        "cardTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "card-title",
            "reflect": false
        }
    }; }
}
