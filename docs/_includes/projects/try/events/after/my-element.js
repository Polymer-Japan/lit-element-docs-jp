/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 完成コード (5. イベント)
 */

import { LitElement, html } from '@polymer/lit-element'; 

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
    this.myArray = ['an','array','of','test','data'];
    this.myBool = true;
  }

  render() {
    return html`
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map(item => html`<li>${item}</li>`)}
      </ul>
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}

      <!-- DONE: イベントリスナを登録 -->
      <button @click="${this.clickHandler}">Click</button>
    `;
  }

  /**
   * DONE: イベントハンドラを実装
   */
  clickHandler(event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}
customElements.define('my-element', MyElement);
