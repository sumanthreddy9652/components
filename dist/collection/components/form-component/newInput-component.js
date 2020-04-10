import { h } from "@stencil/core";
export class NewInput {
    render() {
        return this.isInvalidClass ? (h("div", { class: "form-group" },
            h("label", { htmlFor: this.inputId }, this.inputContent),
            h("input", { placeholder: this.placeHolder, type: this.inputType, class: "form-control is-invalid", id: this.inputId }),
            h("slot", null))) : this.isDisabled ? (h("div", { class: "form-group" },
            h("label", { htmlFor: this.inputId }, this.inputContent),
            h("input", { placeholder: this.placeHolder, disabled: true, type: this.inputType, class: "form-control ", id: this.inputId }),
            h("slot", null))) : (h("div", { class: "form-group" },
            h("label", { htmlFor: this.inputId }, this.inputContent),
            h("input", { type: this.inputType, class: "form-control ", id: this.inputId, placeholder: this.placeHolder }),
            h("slot", null)));
    }
    static get is() { return "newinput-component"; }
    static get properties() { return {
        "inputContent": {
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
            "attribute": "input-content",
            "reflect": false
        },
        "inputType": {
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
            "attribute": "input-type",
            "reflect": false
        },
        "inputId": {
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
            "attribute": "input-id",
            "reflect": false
        },
        "placeHolder": {
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
            "attribute": "place-holder",
            "reflect": false
        },
        "isDisabled": {
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
            "attribute": "is-disabled",
            "reflect": false
        },
        "isInvalidClass": {
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
            "attribute": "is-invalid-class",
            "reflect": false
        }
    }; }
}
