/**
 * LitElementを試してみよう https://lit-element.polymer-jp.org/guide/try
 * 完成コード (1. つくる)
 */

/**
 * DONE: LitElementのベースクラスとhtmlヘルパー関数をインポート
 */
import { LitElement, html } from '@polymer/lit-element'; 

/**
 * DONE: LitElementを継承した独自のHTML要素クラスをつくる
 */
class MyElement extends LitElement {
  render() {
    return html`
      <p>Hello world! From my-element</p>
    `;
  }
}

/**
 * DONE: HTML要素クラスをブラウザに登録する
 */
customElements.define('my-element', MyElement);
