import { h } from "@stencil/core";
export class CarouselBody {
    render() {
        return (h("div", { class: "carousel-item " + this.activeClass },
            h("img", { src: this.carouselImageUrl, class: "d-block w-100", alt: this.carouselImageAlt }),
            h("div", { class: "carousel-caption d-none d-md-block" },
                h("h5", null, this.carouselHeading),
                h("p", null, this.carouselDescription))));
    }
    static get is() { return "carousel-body"; }
    static get properties() { return {
        "carouselImageUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "carousel-image-url",
            "reflect": false
        },
        "carouselImageAlt": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "carousel-image-alt",
            "reflect": false
        },
        "carouselHeading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "carousel-heading",
            "reflect": false
        },
        "carouselDescription": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "carousel-description",
            "reflect": false
        },
        "activeClass": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active-class",
            "reflect": false
        },
        "rciDisabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rci-disabled",
            "reflect": false
        }
    }; }
}
