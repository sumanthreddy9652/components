import { h } from "@stencil/core";
export class Alert {
    render() {
        return (h("div", { class: "rcio-ds" },
            h("div", { role: "alert", class: "fade alert show " + this.primaryAltClass },
                "This is a primary alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.secondaryAltClass },
                "This is a secondary alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.successAltClass },
                "This is a success alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.dangerAltClass },
                "This is a danger alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.warningAltClass },
                "This is a warning alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.infoAltClass },
                "This is a info alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.lightAltClass },
                "This is a light alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert show " + this.darkAltClass },
                "This is a dark alert with",
                h("a", { class: "alert-link", href: "#", role: "button" }, this.alertClickableSample),
                this.alertSample),
            h("div", { role: "alert", class: "fade alert alert-dismissible show " + this.dangerAltClass },
                h("button", { type: "button", class: "close", "data-dismiss": "alert" },
                    h("span", { "aria-hidden": "true" }, "\u00D7"),
                    h("span", { class: "sr-only" }, "Close alert")),
                h("div", { class: "alert-heading h4" }, "Oh snap! You got an error!"),
                h("p", null, this.errorMessageSample))));
    }
    static get is() { return "alert-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "alertSample": {
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
            "attribute": "alert-sample",
            "reflect": false
        },
        "alertClickableSample": {
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
            "attribute": "alert-clickable-sample",
            "reflect": false
        },
        "errorMessageSample": {
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
            "attribute": "error-message-sample",
            "reflect": false
        },
        "primaryAltClass": {
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
            "attribute": "primary-alt-class",
            "reflect": false
        },
        "secondaryAltClass": {
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
            "attribute": "secondary-alt-class",
            "reflect": false
        },
        "successAltClass": {
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
            "attribute": "success-alt-class",
            "reflect": false
        },
        "dangerAltClass": {
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
            "attribute": "danger-alt-class",
            "reflect": false
        },
        "warningAltClass": {
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
            "attribute": "warning-alt-class",
            "reflect": false
        },
        "infoAltClass": {
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
            "attribute": "info-alt-class",
            "reflect": false
        },
        "lightAltClass": {
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
            "attribute": "light-alt-class",
            "reflect": false
        },
        "darkAltClass": {
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
            "attribute": "dark-alt-class",
            "reflect": false
        }
    }; }
}
