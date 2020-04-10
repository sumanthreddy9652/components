import { h } from "@stencil/core";
export class Tab {
    render() {
        return (h("div", { class: "rcio-ds" },
            h("div", { class: "shadow-1 p-0 col-md-6" },
                h("ul", { class: "shadow-1 nav-fill nav nav-tabs", role: "tablist" },
                    h("li", null,
                        h("a", { href: "#uncontrolled-tab-example-tabpane-home", role: "tab", "data-toggle": "tab", "data-rb-event-key": "home", id: "uncontrolled-tab-example-tab-home", "aria-controls": "uncontrolled-tab-example-tabpane-home", "aria-selected": "true", class: "nav-item nav-link" + this.activeClass }, this.firstTab)),
                    h("li", null,
                        h("a", { href: "#uncontrolled-tab-example-tabpane-profile", role: "tab", "data-toggle": "tab", "data-rb-event-key": "profile", id: "uncontrolled-tab-example-tab-profile", "aria-controls": "uncontrolled-tab-example-tabpane-profile", "aria-selected": "false", class: "nav-item nav-link " }, this.secondTab)),
                    h("li", null,
                        h("a", { href: "#uncontrolled-tab-example-tabpane-contact", role: "tab", "data-toggle": "tab", "data-rb-event-key": "contact", id: "uncontrolled-tab-example-tab-contact", "aria-controls": "uncontrolled-tab-example-tabpane-contact", "aria-selected": "false", class: "nav-item nav-link" + this.disableClass, "aria-disabled": "true" }, this.thirdTab))),
                h("div", { class: "tab-content" },
                    h("div", { id: "uncontrolled-tab-example-tabpane-home", "aria-labelledby": "uncontrolled-tab-example-tab-home", role: "tabpanel", "aria-hidden": "false", class: "fade tab-pane active show in" },
                        h("div", { class: "p-2 bg-white" }, this.firstTabContent)),
                    h("div", { id: "uncontrolled-tab-example-tabpane-profile", "aria-labelledby": "uncontrolled-tab-example-tab-profile", role: "tabpanel", "aria-hidden": "true", class: "fade tab-pane " },
                        h("div", { class: "p-2 bg-white" }, this.secondTabContent)),
                    h("div", { id: "uncontrolled-tab-example-tabpane-contact", "aria-labelledby": "uncontrolled-tab-example-tab-contact", role: "tabpanel", "aria-hidden": "true", class: "fade tab-pane" },
                        h("div", { class: "p-2 bg-white" }, this.thirdTabContent))))));
    }
    static get is() { return "tab-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "firstTab": {
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
            "attribute": "first-tab",
            "reflect": false
        },
        "firstTabContent": {
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
            "attribute": "first-tab-content",
            "reflect": false
        },
        "secondTab": {
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
            "attribute": "second-tab",
            "reflect": false
        },
        "secondTabContent": {
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
            "attribute": "second-tab-content",
            "reflect": false
        },
        "thirdTab": {
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
            "attribute": "third-tab",
            "reflect": false
        },
        "thirdTabContent": {
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
            "attribute": "third-tab-content",
            "reflect": false
        },
        "activeClass": {
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
            "attribute": "active-class",
            "reflect": false
        },
        "disableClass": {
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
            "attribute": "disable-class",
            "reflect": false
        }
    }; }
}
