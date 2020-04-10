import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'table-component',
  styleUrl: '../../Styles/global.css',
})
export class Table {

    @Prop() firstHeadName:string
    @Prop() secondHeadName:string
    @Prop() thirdHeadName:string
    @Prop() fourthHeadName:string
    @Prop() firstData:string
    @Prop() secondData:string
    @Prop() thirdData:string
    @Prop() fourthData:string


      render() {
        let num=2;
        return (
          <div>
        <div class="container">
          <div class="row">
            <div class="col">
              <table class="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>{this.firstHeadName}</th>
                    <th>{this.secondHeadName}</th>
                    <th>{this.thirdHeadName}</th>
                    <th>{this.fourthHeadName}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.firstData}</td>
                    <td>{this.secondData}</td>
                    <td>{this.thirdData}</td>
                    <td>{this.fourthData}</td>
                  </tr>

                  <tr>
                    <td>{this.firstData}</td>
                    <td>{this.secondData}</td>
                    <td>{this.thirdData}</td>
                    <td>{this.fourthData}@</td>
                  </tr>
                  <tr>
                    <td>{this.firstData}</td>
                    <td colSpan={num}>{this.secondData}</td>
                    <td>{this.thirdData}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <table class="table table-sm table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th>{this.firstHeadName}</th>
                    <th>{this.secondHeadName}</th>
                    <th>{this.thirdHeadName}</th>
                    <th>{this.fourthHeadName}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.firstData}</td>
                    <td>{this.secondData}</td>
                    <td>{this.thirdData}</td>
                    <td>{this.fourthData}</td>
                  </tr>

                  <tr>
                    <td>{this.firstData}</td>
                    <td>{this.secondData}</td>
                    <td>{this.thirdData}</td>
                    <td>{this.fourthData}@</td>
                  </tr>
                  <tr>
                    <td>{this.firstData}</td>
                    <td colSpan={num}>{this.secondData}</td>
                    <td>{this.thirdData}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

    </div>


        )
      }

}
