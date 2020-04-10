import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tab-component',
  styleUrl: '../../Styles/global.css',
})
export class Tab {

  @Prop() firstTab: string;
  @Prop() firstTabContent: string;
  @Prop() secondTab: string;
  @Prop() secondTabContent: string;
  @Prop() thirdTab: string;
  @Prop() thirdTabContent: string;
  @Prop() activeClass: string;
  @Prop() disableClass: string;


  render() {
    return (
        <div class="rcio-ds">
            <div class="shadow-1 p-0 col-md-6">
          <ul class="shadow-1 nav-fill nav nav-tabs" role="tablist">
            <li>
              <a href="#uncontrolled-tab-example-tabpane-home" role="tab" data-toggle="tab" data-rb-event-key="home" id="uncontrolled-tab-example-tab-home" aria-controls="uncontrolled-tab-example-tabpane-home" aria-selected="true" class={"nav-item nav-link" + this.activeClass}>
                {this.firstTab}
              </a>
            </li>
            <li>
            <a href="#uncontrolled-tab-example-tabpane-profile" role="tab" data-toggle="tab" data-rb-event-key="profile" id="uncontrolled-tab-example-tab-profile" aria-controls="uncontrolled-tab-example-tabpane-profile"  aria-selected="false" class="nav-item nav-link ">
            {this.secondTab}
          </a>
            </li>
            <li>
            <a href="#uncontrolled-tab-example-tabpane-contact" role="tab" data-toggle="tab" data-rb-event-key="contact" id="uncontrolled-tab-example-tab-contact" aria-controls="uncontrolled-tab-example-tabpane-contact"  aria-selected="false" class={"nav-item nav-link" + this.disableClass} aria-disabled="true">
            {this.thirdTab}
          </a>
            </li>
          </ul>
        <div class="tab-content">
          <div id="uncontrolled-tab-example-tabpane-home" aria-labelledby="uncontrolled-tab-example-tab-home" role="tabpanel" aria-hidden="false" class="fade tab-pane active show in">
            <div class="p-2 bg-white">
              {this.firstTabContent}
            </div>
          </div>
          <div id="uncontrolled-tab-example-tabpane-profile" aria-labelledby="uncontrolled-tab-example-tab-profile" role="tabpanel" aria-hidden="true" class="fade tab-pane ">
            <div class="p-2 bg-white">
              {this.secondTabContent}
            </div>
          </div>
          <div id="uncontrolled-tab-example-tabpane-contact" aria-labelledby="uncontrolled-tab-example-tab-contact" role="tabpanel" aria-hidden="true" class="fade tab-pane">
            <div class="p-2 bg-white">
              {this.thirdTabContent}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
