import { h } from "@stencil/core";
export class tabList {
    render() {
        return (h("nav", { class: "nav-fill nav nav-tabs", role: "tablist" },
            h("slot", null)));
    }
    static get is() { return "tab-list"; }
}
