import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`
      <style>
        :host[hidden] { display: none; }
        :host {
          display: block;
          font-family: Roboto;
          font-size: 20;
          color: blue;
        }
      </style>
      <p>継承されたフォントスタイル</p>
    `;
  }
}
customElements.define('my-element', MyElement);
