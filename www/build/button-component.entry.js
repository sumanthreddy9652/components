import { r as registerInstance, h } from './core-645fdfe2.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.renderButton = () => {
            return this.rciDisabled ? (h("button", { disabled: true, class: this.rciClass }, this.rciName)) : (h("button", { class: this.rciClass }, this.rciName, h("slot", null)));
        };
    }
    render() {
        return h("div", null, this.renderButton());
    }
};

export { Button as button_component };
