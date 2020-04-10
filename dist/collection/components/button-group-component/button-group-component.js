import { h } from "@stencil/core";
export class Button {
    render() {
        return (h("div", { "aria-label": "Basic example", role: "group", class: "btn-group" },
            h("slot", null)));
    }
    static get is() { return "button-group-component"; }
}
