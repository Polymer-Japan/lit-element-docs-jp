import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  // TODO: `properties`ゲッターをつくり、プロパティの宣言
  // TODO: コンストラクタを追加し、プロパティの初期化
  render() {
    return html`
      <!-- TODO: テキストコンテンツを宣言したプロパティで置換 -->
      <p>Hello world! From my-element</p>
    `;
  }
}
customElements.define('my-element', MyElement);
