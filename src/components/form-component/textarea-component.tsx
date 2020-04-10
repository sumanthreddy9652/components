import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "textarea-component"
})
export class TextArea {
  @Prop() textareaContent: string;
  @Prop() textareaId: string;
  render() {
    return (
      <div class="form-group">
        <label htmlFor={this.textareaId}>{this.textareaContent}</label>
        <textarea class="form-control text-control" id={this.textareaId} />
      </div>
    );
  }
}
