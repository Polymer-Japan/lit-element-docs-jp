import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {  
  static get properties() {
    return {
      textAreaId: { type: String },
      startingText: { type: String }
    };
  }
  constructor() {
    super();
    this.textAreaId = 'サンプルテキスト';
    this.startingText = '最初の読み込みでフォーカスされます';
  }
  render() {
    return html`
      <textarea id="${this.textAreaId}">${this.startingText}</textarea>
    `;
  }
  firstUpdated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => { 
      console.log(`${propName}が更新されました。 古い値: ${oldValue}`);
    });
    const textArea = this.shadowRoot.getElementById(this.textAreaId);
    textArea.focus();
  }
}
customElements.define('my-element', MyElement);
