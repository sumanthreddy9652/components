import { h } from "@stencil/core";
export class DropdownForm {
    render() {
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: this.dropdownId }, this.dropdownContent),
            h("select", { class: "form-control", id: this.dropdownId },
                h("slot", null))));
    }
    static get is() { return "dropdown-component-form"; }
    static get properties() { return {
        "dropdownContent": {
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
            "attribute": "dropdown-content",
            "reflect": false
        },
        "dropdownId": {
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
            "attribute": "dropdown-id",
            "reflect": false
        }
    }; }
}
