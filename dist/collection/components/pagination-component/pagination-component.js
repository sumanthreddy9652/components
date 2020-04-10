import { h } from "@stencil/core";
export class Pagination {
    render() {
        return (h("div", { class: "row" },
            h("div", { class: "col" },
                h("ul", { class: "pagination" },
                    h("li", { class: "d-none d-md-block page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" },
                            h("span", { "aria-hidden": "true" }, "\u00AB"),
                            h("span", { class: "sr-only" }, this.firstPage))),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" },
                            h("span", { "aria-hidden": "true" }, "\u2039"),
                            h("span", { class: "sr-only" }, this.previousPage))),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" }, "1")),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" },
                            h("span", { "aria-hidden": "true" }, "\u2026"),
                            h("span", { class: "sr-only" }, this.morePage))),
                    h("li", { class: "d-none d-md-block page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" }, "10")),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" }, "11")),
                    h("li", { class: "page-item active" },
                        h("span", { class: "page-link" },
                            "12",
                            h("span", { class: "sr-only" }, "(current)"))),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" }, "13")),
                    h("li", { class: "d-none d-md-block page-item disabled" },
                        h("span", { class: "page-link" }, "14")),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" },
                            h("span", { "aria-hidden": "true" }, "\u2026"),
                            h("span", { class: "sr-only" },
                                " ",
                                this.morePage))),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" }, "20")),
                    h("li", { class: "page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" },
                            h("span", { "aria-hidden": "true" }, "\u203A"),
                            h("span", { class: "sr-only" }, this.nextPage))),
                    h("li", { class: "d-none d-md-block page-item" },
                        h("a", { class: "page-link", role: "button", href: "#" },
                            h("span", { "aria-hidden": "true" }, "\u00BB"),
                            h("span", { class: "sr-only" }, this.lastPage)))))));
    }
    static get is() { return "pagination-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "firstPage": {
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
            "attribute": "first-page",
            "reflect": false
        },
        "previousPage": {
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
            "attribute": "previous-page",
            "reflect": false
        },
        "morePage": {
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
            "attribute": "more-page",
            "reflect": false
        },
        "nextPage": {
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
            "attribute": "next-page",
            "reflect": false
        },
        "lastPage": {
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
            "attribute": "last-page",
            "reflect": false
        }
    }; }
}
