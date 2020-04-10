import { h } from "@stencil/core";
export class Calendar {
    render() {
        return (h("div", { class: "row" },
            h("div", { class: "col-md-auto" },
                h("div", { class: "row" },
                    h("div", { class: "pt-3 col-md-12 col-4" },
                        h("div", { class: "opacity- shadow-sm colorChip" + this.calendarClass },
                            h("p", null, "00"))),
                    h("div", { class: "pt-3 col-md-12 col-8" },
                        h("p", { class: "text-center" },
                            "Calendar Button Enabled",
                            h("br", null),
                            ".",
                            this.calendarClass)),
                    h("hr", { class: "d-md-none border-gray-200 w-100 p-0" }))),
            h("div", { class: "col-md-auto" },
                h("div", { class: "row" },
                    h("div", { class: "pt-3 col-md-12 col-4" },
                        h("div", { class: "opacity- shadow-sm colorChip" +
                                this.calendarClass +
                                this.calendarActiveClass },
                            h("p", null, "00"))),
                    h("div", { class: "pt-3 col-md-12 col-8" },
                        h("p", { class: "text-center" },
                            "Calendar Button Active/Selected",
                            h("br", null),
                            ".calendar-btn .active")),
                    h("hr", { class: "d-md-none border-gray-200 w-100 p-0" }))),
            h("div", { class: "col-md-auto" },
                h("div", { class: "row" },
                    h("div", { class: "pt-3 col-md-12 col-4" },
                        h("div", { class: "opacity-  shadow-sm colorChip" +
                                this.calendarClass +
                                this.calendarDisableClass },
                            h("p", null, "00"))),
                    h("div", { class: "pt-3 col-md-12 col-8" },
                        h("p", { class: "text-center" },
                            "Calendar Button Disabled",
                            h("br", null),
                            ".calendar-btn .disabled")),
                    h("hr", { class: "d-md-none border-gray-200 w-100 p-0" })))));
    }
    static get is() { return "calendar-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "calendarClass": {
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
            "attribute": "calendar-class",
            "reflect": false
        },
        "calendarActiveClass": {
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
            "attribute": "calendar-active-class",
            "reflect": false
        },
        "calendarDisableClass": {
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
            "attribute": "calendar-disable-class",
            "reflect": false
        }
    }; }
}
