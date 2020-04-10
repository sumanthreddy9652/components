import { Component, h } from "@stencil/core";

@Component({
  tag: "button-group-component"
  // styleUrl: "../../Styles/global.css"
})
export class Button {
  render() {
    return (
      <div aria-label="Basic example" role="group" class="btn-group">
        <slot />
      </div>
    );
  }
}
