import { h } from "@stencil/core";
export class Button {
    constructor() {
        this.renderButton = () => {
            return this.rciDisabled ? (h("button", { disabled: true, class: this.rciClass }, this.rciName)) : (h("button", { class: this.rciClass },
                this.rciName,
                h("slot", null)));
        };
    }
    render() {
        return h("div", null, this.renderButton());
    }
    static get is() { return "button-component"; }
    static get properties() { return {
        "rciName": {
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
            "attribute": "rci-name",
            "reflect": false
        },
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
        "rciDisabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rci-disabled",
            "reflect": false
        }
    }; }
}
