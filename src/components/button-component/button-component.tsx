import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "button-component"
  // styleUrl: "../../Styles/global.css"
})
export class Button {
  @Prop() rciName: string;
  @Prop() rciClass: string;
  @Prop() rciDisabled: boolean;

  renderButton = () => {
    return this.rciDisabled ? (
      <button disabled class={this.rciClass}>
        {this.rciName}
      </button>
    ) : (
      <button class={this.rciClass}>
        {this.rciName}
        <slot />
      </button>
    );
  };

  render() {
    return <div>{this.renderButton()}</div>;
  }
}
