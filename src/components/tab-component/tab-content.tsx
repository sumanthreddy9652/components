import {  Component, h } from '@stencil/core';

@Component({
    tag: 'rci-tab-content',
})

export class tab {
    render() {
      return (
          <div class="tab-content" >
              <slot />
          </div>       
      );
    }
}