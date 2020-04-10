import { Host, h } from "@stencil/core";
export class tab {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "rci-tab"; }
}
