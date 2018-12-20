import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement { 
  static get properties() { return { prop1: { type: Object } }; }
  constructor() {
    super();
    this.prop1 = { subProp: 0 }
  }
  render() { 
    return html`
      <p>prop1.subProp: ${this.prop1.subProp}</p>
      <button @click="${this.change}">change</button>
    `;
  }
  change() {
    let newVal = Math.random();
    /**
     * オブジェクトのサブプロパティと配列項目に対する変更は、観察できません。
     * そのかわりに:
     */ 
    
    // Option 1: オブジェクト全体を書き直し、更新をトリガする
    // this.prop1 = Object.assign({}, this.prop1, { subProp: newVal });

    // Option 2: サブプロパティを変更してから、requestUpdateを呼び出します。
    this.prop1.subProp = newVal;
    this.requestUpdate();
  }
}
customElements.define('my-element', MyElement);
