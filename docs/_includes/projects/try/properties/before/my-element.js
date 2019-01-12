/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 初期コード (3. プロパティ)
 */

import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  /**
   * TODO: プロパティの宣言
   */
  static get properties() {
    return { };
  }

  /**
   * TODO: プロパティの初期化
   */
  constructor() {
    // 必ず最初に親クラスのコンストラクタを呼び必要があります
    super(); 
  }

  /**
   * TODO: JavaScript式でプロパティをテンプレートに追加
   */
  render() {
    return html`
      <p></p>
    `;
  }
}
customElements.define('my-element', MyElement);
