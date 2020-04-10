import { h, Host } from "@stencil/core";
export class Loader {
    constructor() {
        this.renderLoader = () => {
            switch (this.rciType) {
                case 'border':
                    return h("div", { class: "spinner-border text-" + this.rciClass });
                case 'grow':
                    return h("div", { class: "spinner-grow text-" + this.rciClass });
                case 'spread':
                    return (h(Host, null,
                        h("span", { class: "spinner-grow spinner-grow-sm" }),
                        h("span", { class: "delay-half spinner-grow spinner-grow-sm" }),
                        h("span", { class: "delay-1 spinner-grow spinner-grow-sm" })));
            }
        };
    }
    render() {
        return this.renderLoader();
    }
    static get is() { return "loader-spinner-component"; }
    static get properties() { return {
        "rciClass": {
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
            "attribute": "rci-class",
            "reflect": false
        },
        "rciType": {
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
            "attribute": "rci-type",
            "reflect": false
        }
    }; }
}
