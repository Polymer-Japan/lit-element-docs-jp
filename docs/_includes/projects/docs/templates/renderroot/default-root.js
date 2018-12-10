import { LitElement, html } from '@polymer/lit-element';

/**
 * このエレメントはデフォルトのshadowRoot
 * に描画される
 */
class DefaultRoot extends LitElement {
  render(){
    return html`
      <p><b>デフォルトのレンダールート</b> shadow DOMに描画されたテンプレート</p>
    `;
  }
}
customElements.define('default-root', DefaultRoot);
