import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'alert-component',
  styleUrl: '../../Styles/global.css',

})
export class Alert {


    @Prop() alertSample: string;
    @Prop() alertClickableSample: string;
    @Prop() errorMessageSample: string;
    @Prop()  primaryAltClass: string;
    @Prop()  secondaryAltClass: string;
    @Prop()  successAltClass: string;
    @Prop()  dangerAltClass: string;
    @Prop()  warningAltClass: string;
    @Prop()  infoAltClass: string;
    @Prop()  lightAltClass: string;
    @Prop()  darkAltClass: string;

  render() {
      return (
        <div class="rcio-ds">
            <div role="alert" class={"fade alert show "+this.primaryAltClass}>This is a primary alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
            {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.secondaryAltClass}>This is a secondary alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.successAltClass}>This is a success alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.dangerAltClass}>This is a danger alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.warningAltClass}>This is a warning alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.infoAltClass}>This is a info alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.lightAltClass}>This is a light alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert show "+this.darkAltClass}>This is a dark alert with
              <a class="alert-link" href="#" role="button">{this.alertClickableSample}</a>
              {this.alertSample}
            </div>
            <div role="alert" class={"fade alert alert-dismissible show "+this.dangerAltClass}>
              <button type="button" class="close" data-dismiss="alert">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close alert</span>
              </button>
              <div class="alert-heading h4">Oh snap! You got an error!</div>
              <p>{this.errorMessageSample}</p>
            </div>
        </div>
      );
    }
}
