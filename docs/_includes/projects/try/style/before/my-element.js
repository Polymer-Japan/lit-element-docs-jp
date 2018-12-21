/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 初期コード (6. スタイル)
 */

import { LitElement, html } from '@polymer/lit-element'; 

class MyElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean }
    };
  }
  
  constructor() {
    super();
    this.message='Hello world! From my-element';
    this.myArray = ['an','array','of','test','data'];
    this.myBool = true;
  }

  render() {
    return html`
      <!-- TODO: styleタグを追加 -->

      <!-- TODO: styleを適用 -->

      <p>${this.message}</p>
      <ul>
        ${this.myArray.map(item => html`<li>${item}</li>`)}
      </ul>
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
      <button @click="${this.clickHandler}">Click</button>
    `;
  }

  clickHandler(event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}
customElements.define('my-element', MyElement);
