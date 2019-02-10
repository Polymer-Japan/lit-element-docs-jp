import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return { 
      message: { type: String } 
      // TODO: 真偽値プロパティを追加
      // TODO: 配列プロパティを追加
    };
  }
  constructor() {
    super();
    this.message = 'Hello world! From my-element';
    // TODO: 真偽値プロパティの初期化
    // TODO: 配列プロパティの初期化
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
  
