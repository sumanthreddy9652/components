import { Component, h } from "@stencil/core";

@Component({
  tag: "tab-list"
  // styleUrl: "../../Styles/global.css"
})
export class tabList {
  render() {
    return (
      <nav class="nav-fill nav nav-tabs" role="tablist">
        <slot />
      </nav>
    );
  }
}
