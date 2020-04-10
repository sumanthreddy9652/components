import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "calendar-component",
  styleUrl: "../../Styles/global.css"
})
export class Calendar {
  @Prop() calendarClass: string;
  @Prop() calendarActiveClass: string;
  @Prop() calendarDisableClass: string;

  render() {
    return (
      <div class="row">
        <div class="col-md-auto">
          <div class="row">
            <div class="pt-3 col-md-12 col-4">
              <div class={"opacity- shadow-sm colorChip" + this.calendarClass}>
                <p>00</p>
              </div>
            </div>
            <div class="pt-3 col-md-12 col-8">
              <p class="text-center">
                Calendar Button Enabled
                <br />.{this.calendarClass}
              </p>
            </div>
            <hr class="d-md-none border-gray-200 w-100 p-0" />
          </div>
        </div>
        <div class="col-md-auto">
          <div class="row">
            <div class="pt-3 col-md-12 col-4">
              <div
                class={
                  "opacity- shadow-sm colorChip" +
                  this.calendarClass +
                  this.calendarActiveClass
                }
              >
                <p>00</p>
              </div>
            </div>
            <div class="pt-3 col-md-12 col-8">
              <p class="text-center">
                Calendar Button Active/Selected
                <br />
                .calendar-btn .active
              </p>
            </div>
            <hr class="d-md-none border-gray-200 w-100 p-0" />
          </div>
        </div>
        <div class="col-md-auto">
          <div class="row">
            <div class="pt-3 col-md-12 col-4">
              <div
                class={
                  "opacity-  shadow-sm colorChip" +
                  this.calendarClass +
                  this.calendarDisableClass
                }
              >
                <p>00</p>
              </div>
            </div>
            <div class="pt-3 col-md-12 col-8">
              <p class="text-center">
                Calendar Button Disabled
                <br />
                .calendar-btn .disabled
              </p>
            </div>
            <hr class="d-md-none border-gray-200 w-100 p-0" />
          </div>
        </div>
      </div>
    );
  }
}
