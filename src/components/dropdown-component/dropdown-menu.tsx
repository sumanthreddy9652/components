import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "dropdown-menu"
  // styleUrl: "../../Styles/global.css"
})
export class DropdownMenu {
  @Prop() menuOption: string;
  @Prop() hrefOption: string;

  render() {
    return (
      <a href={this.hrefOption} class="dropdown-item">
        {this.menuOption}
      </a>
    );
  }
}
