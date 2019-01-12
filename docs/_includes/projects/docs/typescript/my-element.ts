/**
 * LitElementのベースクラスとhtmlヘルパー関数及び
 * TypeScriptのデコレータをインポート
 **/
import {
  LitElement, html, customElement, property
} from 'lit-element';

/**
 * customElementデコレータを使ってカスタム要素を定義。
 * <my-element>がHTMLタグとして登録される
 */
@customElement('my-element')
export class MyElement extends LitElement {

  /**
   * プロパティの定義。更新時にトリガされる
   */
  @property()
  foo = 'foo';

  /**
   * テンプレートを描画する`render`関数を実装
   */
  render(){
    /**
     * JavaScript式を使ってテンプレートに
     * プロパティの値を表示
     */
    return html`<p>${this.foo}</p>`;
  }
}
