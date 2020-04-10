import { Component, h } from "@stencil/core";

@Component({
  tag: "card-deck"
  // styleUrl: "../../Styles/global.css"
})
export class CardDeck {
  render() {
    return (
      <div class="card-deck">
        <slot />
      </div>
    );
  }
}
