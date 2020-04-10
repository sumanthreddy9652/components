import { h } from "@stencil/core";
export class TextArea {
    render() {
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: this.textareaId }, this.textareaContent),
            h("textarea", { class: "form-control text-control", id: this.textareaId })));
    }
    static get is() { return "textarea-component"; }
    static get properties() { return {
        "textareaContent": {
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
            "attribute": "textarea-content",
            "reflect": false
        },
        "textareaId": {
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
            "attribute": "textarea-id",
            "reflect": false
        }
    }; }
}
