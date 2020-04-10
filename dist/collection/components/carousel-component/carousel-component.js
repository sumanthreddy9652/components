import { h } from "@stencil/core";
export class Carousel {
    render() {
        return (h("div", { id: "carouselExampleCaptions", class: "carousel slide", "data-ride": "carousel" },
            h("ol", { class: "carousel-indicators" },
                h("li", { "data-target": "#carouselExampleCaptions", "data-slide-to": "0", class: "active" }),
                h("li", { "data-target": "#carouselExampleCaptions", "data-slide-to": "1" }),
                h("li", { "data-target": "#carouselExampleCaptions", "data-slide-to": "2" })),
            h("div", { class: "carousel-inner" },
                h("slot", null)),
            h("a", { class: "carousel-control-prev", href: "#carouselExampleCaptions", role: "button", "data-slide": "prev" },
                h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }),
                h("span", { class: "sr-only" }, "Previous")),
            h("a", { class: "carousel-control-next", href: "#carouselExampleCaptions", role: "button", "data-slide": "next" },
                h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }),
                h("span", { class: "sr-only" }, "Next"))));
    }
    static get is() { return "carousel-component"; }
}
