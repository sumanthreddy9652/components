import {  Component, Host, h } from '@stencil/core';

@Component({
    tag: 'rci-tab',
})

export class tab {
    render() {
      return (
          <Host>
              <slot />
          </Host>       
      );
    }
  }