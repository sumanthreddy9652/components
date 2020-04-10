import { h } from "@stencil/core";
export class tableComponent {
    constructor() {
        this.rciTableData = [
            { '#': '1', 'firstName': 'aaa', 'LastName': 'xxx' },
            { '#': '2', 'firstName': 'bbb', 'LastName': 'yyy' }
        ];
        this.createHeaders = () => {
            var obj = this.rciTableData.length > 0 ? this.rciTableData[0] : null;
            return Object.getOwnPropertyNames(obj).map((header, Idx) => {
                return h("th", { key: Idx }, header);
            });
        };
        this.createRows = () => {
            let columns = this.rciTableData.map((row, rowIdx) => {
                return h("tr", { key: rowIdx }, Object.getOwnPropertyNames(row).map((header, Idx) => {
                    return h("td", { key: Idx }, row[header]);
                }));
            });
            return columns;
        };
    }
    render() {
        return (h("table", { class: 'table ' + this.rciClass },
            h("thead", null,
                h("tr", null, this.createHeaders())),
            h("tbody", null, this.createRows())));
    }
    static get is() { return "rci-table"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
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
        },
        "rciTableData": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object[]",
                "resolved": "object[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[\r\n        { '#': '1', 'firstName': 'aaa', 'LastName': 'xxx'},\r\n        { '#': '2', 'firstName': 'bbb', 'LastName': 'yyy' }\r\n    ]"
        }
    }; }
}
