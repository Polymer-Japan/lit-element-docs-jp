/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 完成コード (6. スタイル)
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
      <!-- DONE: styleタグを追加 -->
      <style>
        p {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
        }
        .red {
          color: red;
        }
        .blue {
          color: blue;
        }
      </style>

      <!-- DONE: styleを適用 -->
      <p class="${this.myBool?'red':'blue'}">styled paragraph</p>
      
      <p>${this.message}</p>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
      <button @click="${(event) => this.clickHandler(event)}">Click</button>
    `;
  }

  clickHandler(event) {
    console.log(event.target);
    this.myBool = !this.myBool;
  }
}
customElements.define('my-element', MyElement);
