import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';

class MapDirective extends LitElement {
  static properties = {
    items: {state: true},
  };

  constructor() {
    super();
    this.items = new Set(['Apple', 'Apple', 'Banana', 'Grape', 'Orange', 'Lime', 'Apple']);
  }

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
customElements.define('map-directive', MapDirective);