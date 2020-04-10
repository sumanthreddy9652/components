import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "carousel-body"
})
export class CarouselBody {
  @Prop() carouselImageUrl: string;
  @Prop() carouselImageAlt: string;
  @Prop() carouselHeading: string;
  @Prop() carouselDescription: string;
  @Prop() activeClass: string;
  @Prop() rciDisabled: boolean;

  render() {
    return (
      <div class={"carousel-item " + this.activeClass}>
        <img
          src={this.carouselImageUrl}
          class="d-block w-100"
          alt={this.carouselImageAlt}
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{this.carouselHeading}</h5>
          <p>{this.carouselDescription}</p>
        </div>
      </div>
    );
  }
}
