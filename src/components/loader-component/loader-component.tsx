import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "loader-spinner-component"
  //styleUrl: "../../Styles/global.css"
})
export class Loader {
  @Prop() rciClass: string;
  @Prop() rciType: string;

  renderLoader = () => {
    switch(this.rciType){
      case 'border':
        return <div class={"spinner-border text-" + this.rciClass} ></div>
      case 'grow':
        return <div class={"spinner-grow text-" + this.rciClass} ></div>
      case 'spread':
        return (
          <Host>
              <span class="spinner-grow spinner-grow-sm"></span>
              <span class="delay-half spinner-grow spinner-grow-sm"></span>
              <span class="delay-1 spinner-grow spinner-grow-sm"></span>
          </Host>
        )
    }
     
  }


  render() {
    return this.renderLoader();
    
  }
}
