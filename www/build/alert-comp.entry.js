import { r as registerInstance, h } from './core-645fdfe2.js';

const Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: this.rciclass }, h("slot", null)));
    }
};

export { Alert as alert_comp };
