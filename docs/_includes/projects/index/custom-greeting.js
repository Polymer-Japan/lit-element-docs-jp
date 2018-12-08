import { LitElement, html } from '@polymer/lit-element'; 

// カスタムコンポーネントをつくる
class CustomGreeting extends LitElement {
  // プロパティを宣言
  static get properties() {
    return {
      name: { type: String }
    };
  }
  // プロパティを初期化
  constructor() {
    super();
    this.name = 'World';
  }
  // テンプレートを定義
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
// ブラウザにカスタム要素を登録
customElements.define('custom-greeting', CustomGreeting);
