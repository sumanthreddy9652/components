import { h } from "@stencil/core";
export class Form {
    render() {
        return (h("div", null,
            h("div", { class: "border-bottom pb-3 mb-3 row" },
                h("div", { class: "col-md-6 col-12" },
                    h("form", { class: "pl-3" },
                        h("div", { class: "form-group" },
                            h("label", { htmlFor: "InputEmail" }, "Email address"),
                            h("input", { type: "email", class: "form-control", id: "InputEmail", "aria-describedby": "emailHelp", placeholder: "Enter email" }),
                            h("small", { id: "emailHelp", class: "form-text text-muted" }, "We'll never share your email with anyone else.")),
                        h("div", { class: "form-group" },
                            h("label", { htmlFor: "InputPassword" }, "Password"),
                            h("input", { type: "password", class: "form-control", id: "InputPassword", placeholder: "Password" })),
                        h("div", { class: "form-group" },
                            h("label", { class: "form-label", htmlFor: "formDisabled" }, "Disabled"),
                            h("input", { placeholder: "Disabled Field", disabled: true, type: "password", id: "formDisabled", class: "form-control" })),
                        h("div", { class: "form-group" },
                            h("label", { class: "form-label", htmlFor: "formError" }, "Error"),
                            h("input", { placeholder: "Error Field", type: "password", id: "formError", class: "form-control is-invalid" })),
                        h("div", { class: "form-group" },
                            h("label", { htmlFor: "exampleFormControlSelect" }, "Example select"),
                            h("select", { class: "form-control", id: "exampleFormControlSelect" },
                                h("option", null, "1"),
                                h("option", null, "2"),
                                h("option", null, "3"),
                                h("option", null, "4"),
                                h("option", null, "5"))),
                        h("div", { class: "form-group" },
                            h("div", { class: "form-check" },
                                h("input", { class: "form-check-input", type: "checkbox", name: "gridRadios", id: "gridRadios1", value: "option1" }),
                                h("label", { class: "form-check-label", htmlFor: "gridRadios1" }, "option1")),
                            h("div", { class: "form-check" },
                                h("input", { class: "form-check-input", type: "checkbox", name: "gridRadios", id: "gridRadios2", value: "option2" }),
                                h("label", { class: "form-check-label", htmlFor: "gridRadios2" }, "option2")),
                            h("div", { class: "form-check disabled" },
                                h("input", { class: "form-check-input", type: "checkbox", name: "gridRadios", id: "gridRadios3", value: "option3", disabled: true }),
                                h("label", { class: "form-check-label", htmlFor: "gridRadios3" }, "option3"))),
                        h("div", { class: "form-group" },
                            h("div", { class: "form-check form-check-inline" },
                                h("input", { class: "form-check-input", type: "checkbox", id: "inlineCheckbox1", value: "option1" }),
                                h("label", { class: "form-check-label", htmlFor: "inlineCheckbox1" }, "1")),
                            h("div", { class: "form-check form-check-inline" },
                                h("input", { class: "form-check-input", type: "checkbox", id: "inlineCheckbox2", value: "option2" }),
                                h("label", { class: "form-check-label", htmlFor: "inlineCheckbox2" }, "2")),
                            h("div", { class: "form-check form-check-inline" },
                                h("input", { class: "form-check-input", type: "checkbox", id: "inlineCheckbox3", value: "option3", disabled: true }),
                                h("label", { class: "form-check-label", htmlFor: "inlineCheckbox3" }, "3 (disabled)"))),
                        h("div", { class: "form-group" },
                            h("div", { class: "form-check form-check-inline" },
                                h("input", { class: "form-check-input", type: "radio", name: "gridRadios", id: "gridRadios1", value: "option1" }),
                                h("label", { class: "form-check-label", htmlFor: "gridRadios1" }, "1")),
                            h("div", { class: "form-check form-check-inline" },
                                h("input", { class: "form-check-input", type: "radio", name: "gridRadios", id: "gridRadios2", value: "option2" }),
                                h("label", { class: "form-check-label", htmlFor: "gridRadios2" }, "2")),
                            h("div", { class: "form-check form-check-inline disabled" },
                                h("input", { class: "form-check-input", type: "radio", name: "gridRadios", id: "gridRadios3", value: "option3", disabled: true }),
                                h("label", { class: "form-check-label", htmlFor: "gridRadios3" }, "3(disabled)"))),
                        h("div", { class: "form-group" },
                            h("div", { class: "mb-3" },
                                h("div", { class: "mb-2 custom-control custom-checkbox" },
                                    h("input", { type: "checkbox", id: "custom-checkbox1", class: "custom-control-input" }),
                                    h("label", { title: "", htmlFor: "custom-checkbox1", class: "custom-control-label" }, "Check this custom checkbox")),
                                h("div", { class: "mb-2 custom-control custom-checkbox" },
                                    h("input", { type: "checkbox", id: "custom-checkbox2", class: "custom-control-input" }),
                                    h("label", { title: "", htmlFor: "custom-checkbox2", class: "custom-control-label" }, "Check this custom checkbox")),
                                h("div", { class: "mb-2 custom-control custom-checkbox" },
                                    h("input", { type: "checkbox", id: "custom-checkbox3", class: "custom-control-input", disabled: true }),
                                    h("label", { title: "", htmlFor: "custom-checkbox3", class: "custom-control-label" }, "disabled checkbox"))),
                            h("div", { class: "mb-3" },
                                h("div", { class: "mb-2 custom-control custom-radio" },
                                    h("input", { type: "radio", id: "custom-radio1", class: "custom-control-input" }),
                                    h("label", { title: "", htmlFor: "custom-radio1", class: "custom-control-label" }, "Check this custom radio")),
                                h("div", { class: "mb-2 custom-control custom-radio" },
                                    h("input", { type: "radio", id: "custom-radio2", class: "custom-control-input" }),
                                    h("label", { title: "", htmlFor: "custom-radio2", class: "custom-control-label" }, "Check this custom radio")),
                                h("div", { class: "mb-2 custom-control custom-radio" },
                                    h("input", { type: "radio", id: "custom-radio3", class: "custom-control-input", disabled: true }),
                                    h("label", { title: "", htmlFor: "custom-radio3", class: "custom-control-label" }, "disabled radio")))),
                        h("div", { class: "form-group" },
                            h("label", { htmlFor: "exampleFormControlTextarea" }, "Example textarea"),
                            h("textarea", { class: "form-control text-control", id: "exampleFormControlTextarea" })),
                        h("button", { type: "submit", class: "btn btn-primary" }, "Submit")))),
            h("div", { class: "col-md-6 col-12" },
                h("div", { class: "my-5" },
                    h("label", { htmlFor: "customRange1" }, "Example range"),
                    h("input", { type: "range", class: "custom-range", id: "customRange1" })))));
    }
    static get is() { return "form-component"; }
    static get originalStyleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get styleUrls() { return {
        "$": ["../../Styles/global.css"]
    }; }
    static get properties() { return {
        "rciName": {
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
            "attribute": "rci-name",
            "reflect": false
        },
        "rciClass": {
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
            "attribute": "rci-class",
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
