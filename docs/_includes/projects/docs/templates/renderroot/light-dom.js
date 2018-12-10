import { LitElement, html } from '@polymer/lit-element';

/**
 * この要素はテンプレートをlight DOMとして描画します
 */
class LightDom extends LitElement {
  render(){
    return html`
      <p><b>上書きされたレンダールート</b> light DOMに描画されたテンプレート</p>
    `;
  }
  /**
   * コンポーネントのレンダールートを変更するには
   * `createRenderRoot`を実装し、描画させたいノードを指定する
   * 
   * この要素はlight DOMに描画される
   */
  createRenderRoot(){
    return this;
  }
}
customElements.define('light-dom', LightDom);
