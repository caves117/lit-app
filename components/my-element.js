import {LitElement, html, css} from 'lit'
export class MyElement extends LitElement {

  //par todo host
  static styles = css`
    
    :host {
      display: block;
      border: 1px solid gray;
    }
    p {
      background-color: #fcc;
    }
  `

  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = '1.1';
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    <div>TY</div>
    `;
  }
}
customElements.define('my-element', MyElement);