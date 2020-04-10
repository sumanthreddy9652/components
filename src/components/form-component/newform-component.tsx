import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "newform-component"
  // styleUrl: "../../Styles/global.css"
})
export class NewForm {
  @Prop() inputContent: string;
  @Prop() inputType: string;
  @Prop() inputId: string;
  @Prop() placeHolder: string;
  @Prop() isDisabled: boolean;

  render() {
    return (
      <div class="row">
        <div class="col-md-6 col-12">
          <form class="pl-3">
            <slot />
          </form>
        </div>
      </div>
    );
  }
}
