import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "dropdown-component"
  // styleUrl: "../../Styles/global.css"
})
export class Dropdown {
  @Prop() dropdownClass: string;
  @Prop() dropdownId: string;
  @Prop() dropdownMenuPlacement: string;
  @Prop() dropdownButtonName: string;

  render() {
    return (
      // <div class="row">
      //   <div class="col">
      <div class="dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="false"
          id={this.dropdownId}
          type="button"
          class={
            "dropdown-toggle btn btn-outline-secondary mb-3 " +
            this.dropdownClass
          }
          data-toggle="dropdown"
        >
          {this.dropdownButtonName}
        </button>
        <div
          aria-labelledby={this.dropdownId}
          class="dropdown-menu"
          x-placement={this.dropdownMenuPlacement}
        >
          <slot />
        </div>
      </div>
      //   </div>
      // </div>
    );
  }
}
