/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/try
 * 完成コード (3. プロパティ)
 */

import { LitElement, html } from '@polymer/lit-element'; 

class MyElement extends LitElement {
  /**
   * DONE: プロパティの宣言
   */
  static get properties() {
    return { 
      // プロパティの宣言
      message: { type: String }
    };
  }

  /**
   * DONE: プロパティの初期化
   */
  constructor() {
    // 必ず最初に親クラスのコンストラクタを呼び必要があります
    super(); 

    // プロパティの初期化
    this.message='Hello world! From my-element';
  }

  /**
   * DONE: JavaScript式でプロパティをテンプレートに追加
   */
  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}
customElements.define('my-element', MyElement);
