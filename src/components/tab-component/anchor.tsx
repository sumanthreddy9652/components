import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "rci-anchor"
  // styleUrl: '../../Styles/global.css'
})
export class tabList {
  @Prop() rciName: string;
  @Prop() rciHref: string;
  @Prop() rciClass: string;

  render() {
    return (
      <a href={this.rciHref} class={this.rciClass}>
        {this.rciName}
      </a>
    );
  }
}
