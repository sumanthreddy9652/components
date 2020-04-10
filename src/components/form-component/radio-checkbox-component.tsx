import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "radio-checkbox-component"
  // styleUrl: "../../Styles/global.css"
})
export class RadioCheckbox {
  @Prop() inputContent: string;
  @Prop() inputType: string;
  @Prop() inputId: string;
  @Prop() inputName: string;
  @Prop() inputValue: string;
  @Prop() customControl: boolean;
  @Prop() isDisabled: boolean;
  @Prop() isHorizontal: boolean;

  render() {
    return this.isHorizontal && this.isDisabled ? (
      <div
        class={
          this.customControl && this.inputType === "checkbox"
            ? "form-group custom-control custom-checkbox"
            : this.customControl && this.inputType === "radio"
            ? "form-group custom-control custom-radio"
            : "form-group form-check-inline"
        }
      >
        <input
          type={this.inputType}
          class={
            this.customControl ? "custom-control-input" : "form-check-input"
          }
          id={this.inputId}
          name={this.inputName}
          value={this.inputValue}
          disabled
        />
        <label
          class={
            this.customControl ? "custom-control-label" : "form-check-label"
          }
        >
          {this.inputContent}
        </label>
      </div>
    ) : this.isHorizontal && !this.isDisabled ? (
      <div
        class={
          this.customControl && this.inputType === "checkbox"
            ? "form-group custom-control custom-checkbox"
            : this.customControl && this.inputType === "radio"
            ? "form-group custom-control custom-radio"
            : "form-group form-check-inline"
        }
      >
        <input
          type={this.inputType}
          class={
            this.customControl ? "custom-control-input" : "form-check-input"
          }
          id={this.inputId}
          name={this.inputName}
          value={this.inputValue}
        />
        <label
          class={
            this.customControl ? "custom-control-label" : "form-check-label"
          }
          htmlFor={this.inputId}
        >
          {this.inputContent}
        </label>
      </div>
    ) : !this.isHorizontal && this.isDisabled ? (
      <div
        class={
          this.customControl && this.inputType === "checkbox"
            ? "form-group custom-control custom-checkbox"
            : this.customControl && this.inputType === "radio"
            ? "form-group custom-control custom-radio"
            : "form-group form-check"
        }
      >
        <input
          type={this.inputType}
          class={
            this.customControl ? "custom-control-input" : "form-check-input"
          }
          id={this.inputId}
          name={this.inputName}
          value={this.inputValue}
          disabled
        />
        <label
          class={
            this.customControl ? "custom-control-label" : "form-check-label"
          }
        >
          {this.inputContent}
        </label>
      </div>
    ) : (
      <div
        class={
          this.customControl && this.inputType === "checkbox"
            ? "form-group custom-control custom-checkbox"
            : this.customControl && this.inputType === "radio"
            ? "form-group custom-control custom-radio"
            : "form-group form-check"
        }
      >
        <input
          type={this.inputType}
          class={
            this.customControl ? "custom-control-input" : "form-check-input"
          }
          id={this.inputId}
          name={this.inputName}
          value={this.inputValue}
        />
        <label
          class={
            this.customControl ? "custom-control-label" : "form-check-label"
          }
          htmlFor={this.inputId}
        >
          {this.inputContent}
        </label>
      </div>
    );
  }
}
