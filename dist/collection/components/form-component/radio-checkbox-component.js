import { h } from "@stencil/core";
export class RadioCheckbox {
    render() {
        return this.isHorizontal && this.isDisabled ? (h("div", { class: this.customControl && this.inputType === "checkbox"
                ? "form-group custom-control custom-checkbox"
                : this.customControl && this.inputType === "radio"
                    ? "form-group custom-control custom-radio"
                    : "form-group form-check-inline" },
            h("input", { type: this.inputType, class: this.customControl ? "custom-control-input" : "form-check-input", id: this.inputId, name: this.inputName, value: this.inputValue, disabled: true }),
            h("label", { class: this.customControl ? "custom-control-label" : "form-check-label" }, this.inputContent))) : this.isHorizontal && !this.isDisabled ? (h("div", { class: this.customControl && this.inputType === "checkbox"
                ? "form-group custom-control custom-checkbox"
                : this.customControl && this.inputType === "radio"
                    ? "form-group custom-control custom-radio"
                    : "form-group form-check-inline" },
            h("input", { type: this.inputType, class: this.customControl ? "custom-control-input" : "form-check-input", id: this.inputId, name: this.inputName, value: this.inputValue }),
            h("label", { class: this.customControl ? "custom-control-label" : "form-check-label", htmlFor: this.inputId }, this.inputContent))) : !this.isHorizontal && this.isDisabled ? (h("div", { class: this.customControl && this.inputType === "checkbox"
                ? "form-group custom-control custom-checkbox"
                : this.customControl && this.inputType === "radio"
                    ? "form-group custom-control custom-radio"
                    : "form-group form-check" },
            h("input", { type: this.inputType, class: this.customControl ? "custom-control-input" : "form-check-input", id: this.inputId, name: this.inputName, value: this.inputValue, disabled: true }),
            h("label", { class: this.customControl ? "custom-control-label" : "form-check-label" }, this.inputContent))) : (h("div", { class: this.customControl && this.inputType === "checkbox"
                ? "form-group custom-control custom-checkbox"
                : this.customControl && this.inputType === "radio"
                    ? "form-group custom-control custom-radio"
                    : "form-group form-check" },
            h("input", { type: this.inputType, class: this.customControl ? "custom-control-input" : "form-check-input", id: this.inputId, name: this.inputName, value: this.inputValue }),
            h("label", { class: this.customControl ? "custom-control-label" : "form-check-label", htmlFor: this.inputId }, this.inputContent)));
    }
    static get is() { return "radio-checkbox-component"; }
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
        "inputName": {
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
            "attribute": "input-name",
            "reflect": false
        },
        "inputValue": {
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
            "attribute": "input-value",
            "reflect": false
        },
        "customControl": {
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
            "attribute": "custom-control",
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
        "isHorizontal": {
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
            "attribute": "is-horizontal",
            "reflect": false
        }
    }; }
}
