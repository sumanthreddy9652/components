import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "pagination-component",
  styleUrl: "../../Styles/global.css"
})
export class Pagination {
  @Prop() firstPage: string;
  @Prop() previousPage: string;
  @Prop() morePage: string;
  @Prop() nextPage: string;
  @Prop() lastPage: string;

  render() {
    return (
      <div class="row">
        <div class="col">
          <ul class="pagination">
            <li class="d-none d-md-block page-item">
              <a class="page-link" role="button" href="#">
                <span aria-hidden="true">«</span>
                <span class="sr-only">{this.firstPage}</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                <span aria-hidden="true">‹</span>
                <span class="sr-only">{this.previousPage}</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                <span aria-hidden="true">…</span>
                <span class="sr-only">{this.morePage}</span>
              </a>
            </li>
            <li class="d-none d-md-block page-item">
              <a class="page-link" role="button" href="#">
                10
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                11
              </a>
            </li>
            <li class="page-item active">
              <span class="page-link">
                12<span class="sr-only">(current)</span>
              </span>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                13
              </a>
            </li>
            <li class="d-none d-md-block page-item disabled">
              <span class="page-link">14</span>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                <span aria-hidden="true">…</span>
                <span class="sr-only"> {this.morePage}</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                20
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" role="button" href="#">
                <span aria-hidden="true">›</span>
                <span class="sr-only">{this.nextPage}</span>
              </a>
            </li>
            <li class="d-none d-md-block page-item">
              <a class="page-link" role="button" href="#">
                <span aria-hidden="true">»</span>
                <span class="sr-only">{this.lastPage}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
