import { r as registerInstance, h } from './core-645fdfe2.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { "aria-label": "Basic example", role: "group", class: "btn-group" }, h("slot", null)));
    }
};

export { Button as button_group_component };
