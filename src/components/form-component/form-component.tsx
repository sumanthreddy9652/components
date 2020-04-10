import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "form-component",
  styleUrl: "../../Styles/global.css"
})
export class Form {
  @Prop() rciName: string;
  @Prop() rciClass: string;
  @Prop() rciDisabled: boolean;

  render() {
    return (
      <div>
        <div class="border-bottom pb-3 mb-3 row">
          <div class="col-md-6 col-12">
            <form class="pl-3">
              <div class="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="InputPassword"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label class="form-label" htmlFor="formDisabled">
                  Disabled
                </label>
                <input
                  placeholder="Disabled Field"
                  disabled
                  type="password"
                  id="formDisabled"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label class="form-label" htmlFor="formError">
                  Error
                </label>
                <input
                  placeholder="Error Field"
                  type="password"
                  id="formError"
                  class="form-control is-invalid"
                />
              </div>
              <div class="form-group">
                <label htmlFor="exampleFormControlSelect">Example select</label>
                <select class="form-control" id="exampleFormControlSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" htmlFor="gridRadios1">
                    option1
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" htmlFor="gridRadios2">
                    option2
                  </label>
                </div>
                <div class="form-check disabled">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                    disabled
                  />
                  <label class="form-check-label" htmlFor="gridRadios3">
                    option3
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">
                    1
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" htmlFor="inlineCheckbox2">
                    2
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    disabled
                  />
                  <label class="form-check-label" htmlFor="inlineCheckbox3">
                    3 (disabled)
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" htmlFor="gridRadios1">
                    1
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" htmlFor="gridRadios2">
                    2
                  </label>
                </div>
                <div class="form-check form-check-inline disabled">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                    disabled
                  />
                  <label class="form-check-label" htmlFor="gridRadios3">
                    3(disabled)
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="mb-3">
                  <div class="mb-2 custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="custom-checkbox1"
                      class="custom-control-input"
                    />
                    <label
                      title=""
                      htmlFor="custom-checkbox1"
                      class="custom-control-label"
                    >
                      Check this custom checkbox
                    </label>
                  </div>
                  <div class="mb-2 custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="custom-checkbox2"
                      class="custom-control-input"
                    />
                    <label
                      title=""
                      htmlFor="custom-checkbox2"
                      class="custom-control-label"
                    >
                      Check this custom checkbox
                    </label>
                  </div>
                  <div class="mb-2 custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="custom-checkbox3"
                      class="custom-control-input"
                      disabled
                    />
                    <label
                      title=""
                      htmlFor="custom-checkbox3"
                      class="custom-control-label"
                    >
                      disabled checkbox
                    </label>
                  </div>
                </div>

                <div class="mb-3">
                  <div class="mb-2 custom-control custom-radio">
                    <input
                      type="radio"
                      id="custom-radio1"
                      class="custom-control-input"
                    />
                    <label
                      title=""
                      htmlFor="custom-radio1"
                      class="custom-control-label"
                    >
                      Check this custom radio
                    </label>
                  </div>
                  <div class="mb-2 custom-control custom-radio">
                    <input
                      type="radio"
                      id="custom-radio2"
                      class="custom-control-input"
                    />
                    <label
                      title=""
                      htmlFor="custom-radio2"
                      class="custom-control-label"
                    >
                      Check this custom radio
                    </label>
                  </div>
                  <div class="mb-2 custom-control custom-radio">
                    <input
                      type="radio"
                      id="custom-radio3"
                      class="custom-control-input"
                      disabled
                    />
                    <label
                      title=""
                      htmlFor="custom-radio3"
                      class="custom-control-label"
                    >
                      disabled radio
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="exampleFormControlTextarea">
                  Example textarea
                </label>
                <textarea
                  class="form-control text-control"
                  id="exampleFormControlTextarea"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <div class="my-5">
            <label htmlFor="customRange1">Example range</label>
            <input type="range" class="custom-range" id="customRange1" />
          </div>
        </div>
      </div>
    );
  }
}
