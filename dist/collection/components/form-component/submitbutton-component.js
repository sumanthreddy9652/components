import { h } from "@stencil/core";
export class SubmitButton {
    render() {
        return (h("button", { type: this.btnType, class: this.btnClass }, this.btnContent));
    }
    static get is() { return "submit-button-component"; }
    static get properties() { return {
        "btnType": {
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
            "attribute": "btn-type",
            "reflect": false
        },
        "btnContent": {
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
            "attribute": "btn-content",
            "reflect": false
        },
        "btnClass": {
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
            "attribute": "btn-class",
            "reflect": false
        }
    }; }
}
