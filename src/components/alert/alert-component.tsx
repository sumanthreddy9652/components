import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "alert-comp"
  // styleUrl: "../../Styles/global.css"
})
export class Alert {
  @Prop() rciclass: string;

  render() {
    return (
      <div class={this.rciclass}>
        <slot />
      </div>
    );
  }
}
