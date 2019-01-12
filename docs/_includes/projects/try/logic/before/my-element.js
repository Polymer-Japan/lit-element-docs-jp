/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 初期コード (4. ロジック)
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

      <!-- TODO: 繰り返しを追加 -->

      <!-- TODO: 条件分岐を追加 -->
    `;
  }
}
customElements.define('my-element', MyElement);
