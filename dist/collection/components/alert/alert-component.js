import { h } from "@stencil/core";
export class Alert {
    render() {
        return (h("div", { class: this.rciclass },
            h("slot", null)));
    }
    static get is() { return "alert-comp"; }
    static get properties() { return {
        "rciclass": {
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
            "attribute": "rciclass",
            "reflect": false
        }
    }; }
}
