// `LitElement`のベースクラスと`html`ヘルパー関数をインポート
import { LitElement, html } from 'lit-element';

// `LitElement`のベースクラスを継承
class MyElement extends LitElement {

  /**
   * テンプレートを描画する`render`関数を実装
   * 
   * LitElementを継承している場合、必ず`render`関数を
   * 実装していなければいけません
   */
  render(){
    /** 
     * `render`はlit-htmlの`TemplateResult`を返します
     *
     * `TemplateResult`を作るのに、`html`ヘルパー関数の
     * JavaScriptタグリテラルを使います
     */
    return html`
      <!-- テンプレートの内容 -->
      <p>A paragraph</p>
    `;
  }
}
// 新しいHTML要素をブラウザに登録
customElements.define('my-element', MyElement);
