import { LitElement, html } from '@polymer/lit-element'; 

class MyElement extends LitElement {
  render() {
    return html`
      <span>さらに継承される</span>
    `;
  }
}
customElements.define('my-element', MyElement);
