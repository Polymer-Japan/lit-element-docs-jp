import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`
      <style>${this.myStyles}</style>
      <p>こんにちわ</p>
    `; 
  }
}

customElements.define('my-element', MyElement);
