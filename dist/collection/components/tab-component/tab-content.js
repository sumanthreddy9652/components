import { h } from "@stencil/core";
export class tab {
    render() {
        return (h("div", { class: "tab-content" },
            h("slot", null)));
    }
    static get is() { return "rci-tab-content"; }
}
