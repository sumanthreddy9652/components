import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "newinput-component"
  // styleUrl: "../../Styles/global.css"
})
export class NewInput {
  @Prop() inputContent: string;
  @Prop() inputType: string;
  @Prop() inputId: string;
  @Prop() placeHolder: string;
  @Prop() isDisabled: boolean;
  @Prop() isInvalidClass: string;

  render() {
    return this.isInvalidClass ? (
      <div class="form-group">
        <label htmlFor={this.inputId}>{this.inputContent}</label>
        <input
          placeholder={this.placeHolder}
          type={this.inputType}
          class="form-control is-invalid"
          id={this.inputId}
        />
        <slot />
      </div>
    ) : this.isDisabled ? (
      <div class="form-group">
        <label htmlFor={this.inputId}>{this.inputContent}</label>
        <input
          placeholder={this.placeHolder}
          disabled
          type={this.inputType}
          class="form-control "
          id={this.inputId}
        />
        <slot />
      </div>
    ) : (
      <div class="form-group">
        <label htmlFor={this.inputId}>{this.inputContent}</label>
        <input
          type={this.inputType}
          class="form-control "
          id={this.inputId}
          placeholder={this.placeHolder}
        />
        <slot />
      </div>
    );
  }
}
