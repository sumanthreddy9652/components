import { h } from "@stencil/core";
export class Table {
    render() {
        let num = 2;
        return (h("div", null,
            h("div", { class: "container" },
                h("div", { class: "row" },
                    h("div", { class: "col" },
                        h("table", { class: "table table-striped table-bordered table-hover" },
                            h("thead", null,
                                h("tr", null,
                                    h("th", null, this.firstHeadName),
                                    h("th", null, this.secondHeadName),
                                    h("th", null, this.thirdHeadName),
                                    h("th", null, this.fourthHeadName))),
                            h("tbody", null,
                                h("tr", null,
                                    h("td", null, this.firstData),
                                    h("td", null, this.secondData),
                                    h("td", null, this.thirdData),
                                    h("td", null, this.fourthData)),
                                h("tr", null,
                                    h("td", null, this.firstData),
                                    h("td", null, this.secondData),
                                    h("td", null, this.thirdData),
                                    h("td", null,
                                        this.fourthData,
                                        "@")),
                                h("tr", null,
                                    h("td", null, this.firstData),
                                    h("td", { colSpan: num }, this.secondData),
                                    h("td", null, this.thirdData))))))),
            h("div", { class: "container" },
                h("div", { class: "row" },
                    h("div", { class: "col" },
                        h("table", { class: "table table-sm table-striped table-bordered table-hover" },
                            h("thead", null,
                                h("tr", null,
                                    h("th", null, this.firstHeadName),
                                    h("th", null, this.secondHeadName),
                                    h("th", null, this.thirdHeadName),
                                    h("th", null, this.fourthHeadName))),
                            h("tbody", null,
                                h("tr", null,
                                    h("td", null, this.firstData),
                                    h("td", null, this.secondData),
                                    h("td", null, this.thirdData),
                                    h("td", null, this.fourthData)),
                                h("tr", null,
                                    h("td", null, this.firstData),
                                    h("td", null, this.secondData),
                                    h("td", null, this.thirdData),
                                    h("td", null,
                                        this.fourthData,
                                        "@")),
                                h("tr", null,
                                    h("td", null, this.firstData),
                                    h("td", { colSpan: num }, this.secondData),
                                    h("td", null, this.thirdData)))))))));
    }
    static get is() { return "table-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "firstHeadName": {
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
            "attribute": "first-head-name",
            "reflect": false
        },
        "secondHeadName": {
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
            "attribute": "second-head-name",
            "reflect": false
        },
        "thirdHeadName": {
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
            "attribute": "third-head-name",
            "reflect": false
        },
        "fourthHeadName": {
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
            "attribute": "fourth-head-name",
            "reflect": false
        },
        "firstData": {
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
            "attribute": "first-data",
            "reflect": false
        },
        "secondData": {
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
            "attribute": "second-data",
            "reflect": false
        },
        "thirdData": {
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
            "attribute": "third-data",
            "reflect": false
        },
        "fourthData": {
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
            "attribute": "fourth-data",
            "reflect": false
        }
    }; }
}
