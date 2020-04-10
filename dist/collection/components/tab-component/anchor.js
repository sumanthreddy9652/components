import { h } from "@stencil/core";
export class tabList {
    render() {
        return (h("a", { href: this.rciHref, class: this.rciClass }, this.rciName));
    }
    static get is() { return "rci-anchor"; }
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
        "rciHref": {
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
            "attribute": "rci-href",
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
        }
    }; }
}
