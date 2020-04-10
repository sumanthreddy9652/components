import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'list-component',
  styleUrl: '../../Styles/global.css',
})
export class List {
    @Prop() listName: string;

    render() {
      return (
                <div class="list-group">
                  <slot/>
                </div>
      );
    }

}
