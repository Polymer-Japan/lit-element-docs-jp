import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {

  // テンプレートとして`render`関数を実装する
  render(){
    /** 
     * lit-html `TemplateResult`を返す
     * 
     * `TemplateResult`を作るには、テンプレートリテラルに
     * `html`ヘルパー関数でタグをつける
     */
    return html`
      <div>
        <p>A paragraph</p>
      </div>
    `;
  }
}
customElements.define('my-element', MyElement);
