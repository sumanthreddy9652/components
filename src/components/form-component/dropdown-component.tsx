import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "dropdown-component-form"
  //   styleUrl: "../../Styles/global.css"
})
export class DropdownForm {
  @Prop() dropdownContent: string;
  @Prop() dropdownId: string;
  render() {
    return (
      <div class="form-group">
        <label htmlFor={this.dropdownId}>{this.dropdownContent}</label>
        <select class="form-control" id={this.dropdownId}>
          <slot />
        </select>
      </div>
    );
  }
}
