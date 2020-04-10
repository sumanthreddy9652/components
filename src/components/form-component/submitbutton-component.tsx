import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "submit-button-component"
  //   styleUrl: "../../Styles/global.css"
})
export class SubmitButton {
  @Prop() btnType: string;
  @Prop() btnContent: string;
  @Prop() btnClass: string;
  render() {
    return (
      <button type={this.btnType} class={this.btnClass}>
        {this.btnContent}
      </button>
    );
  }
}
