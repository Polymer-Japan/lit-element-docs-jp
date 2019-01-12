/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 完成コード (4. ロジック)
 */

import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array }
    };
  }
  constructor() {
    super();
    this.message='Hello world! From my-element';
    this.myBool = true;
    this.myArray = ['an','array','of','test','data'];
  }

  render() {
    return html`
      <p>${this.message}</p>

      <!-- DONE: 繰り返しを追加 -->
      <ul>
        ${this.myArray.map(item => html`<li>${item}</li>`)}
      </ul>

      <!-- DONE: 条件分岐を追加 -->
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}
customElements.define('my-element', MyElement);
