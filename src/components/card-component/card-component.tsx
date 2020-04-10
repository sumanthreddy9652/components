import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "card-component"
  //   styleUrl: "../../Styles/global.css"
})
export class Card {
  @Prop() redirectUrl: string;
  @Prop() imageUrl: string;
  @Prop() cardTitle: string;

  render() {
    return (
      <div class="card img-fluid">
        <a href={this.redirectUrl} class="stretched-link">
          <img class="card-img-top" src={this.imageUrl} alt="Card image" />
          <div class="card-img-overlay">
            <p class="card-subtitle">{this.cardTitle}</p>
          </div>
        </a>
      </div>
    );
  }
}
