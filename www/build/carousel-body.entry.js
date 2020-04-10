import { r as registerInstance, h } from './core-645fdfe2.js';

const CarouselBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "carousel-item " + this.activeClass }, h("img", { src: this.carouselImageUrl, class: "d-block w-100", alt: this.carouselImageAlt }), h("div", { class: "carousel-caption d-none d-md-block" }, h("h5", null, this.carouselHeading), h("p", null, this.carouselDescription))));
    }
};

export { CarouselBody as carousel_body };
