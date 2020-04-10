import { h } from "@stencil/core";
export class Dropdown {
    render() {
        return (
        // <div class="row">
        //   <div class="col">
        h("div", { class: "dropdown" },
            h("button", { "aria-haspopup": "true", "aria-expanded": "false", id: this.dropdownId, type: "button", class: "dropdown-toggle btn btn-outline-secondary mb-3 " +
                    this.dropdownClass, "data-toggle": "dropdown" }, this.dropdownButtonName),
            h("div", { "aria-labelledby": this.dropdownId, class: "dropdown-menu", "x-placement": this.dropdownMenuPlacement },
                h("slot", null)))
        //   </div>
        // </div>
        );
    }
    static get is() { return "dropdown-component"; }
    static get properties() { return {
        "dropdownClass": {
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
            "attribute": "dropdown-class",
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
        },
        "dropdownMenuPlacement": {
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
            "attribute": "dropdown-menu-placement",
            "reflect": false
        },
        "dropdownButtonName": {
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
            "attribute": "dropdown-button-name",
            "reflect": false
        }
    }; }
}
