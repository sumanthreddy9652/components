import { h } from "@stencil/core";
export class DropdownMenu {
    render() {
        return (h("a", { href: this.hrefOption, class: "dropdown-item" }, this.menuOption));
    }
    static get is() { return "dropdown-menu"; }
    static get properties() { return {
        "menuOption": {
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
            "attribute": "menu-option",
            "reflect": false
        },
        "hrefOption": {
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
            "attribute": "href-option",
            "reflect": false
        }
    }; }
}
