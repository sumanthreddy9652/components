import { h } from "@stencil/core";
export class List {
    render() {
        return (h("div", { class: "list-group" },
            h("slot", null)));
    }
    static get is() { return "list-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "listName": {
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
            "attribute": "list-name",
            "reflect": false
        }
    }; }
}
