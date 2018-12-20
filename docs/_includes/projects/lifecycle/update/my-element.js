import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {  
  static get properties() {
    return {
      prop1: { type: Number },
      prop2: { type: Number }
    };
  }
  constructor() {
    super();
    this.prop1 = 0;
    this.prop2 = 0;
  }

  render() {
    return html`
      <p>prop1: ${this.prop1}</p>
      <p>prop2: ${this.prop2}</p>
      <button @click="${() => this.prop1=this.change()}">prop1を変更</button>
      <button @click="${() => this.prop2=this.change()}">prop2を変更</button>
    `;
  }
  
  /**
   * prop1が変更された場合にのみ要素を更新します。
   */
  shouldUpdate(changedProperties) {
    changedProperties.forEach((oldValue, propName) => { 
      console.log(`${propName} が変更されました。古い値: ${oldValue}`);
    });
    return changedProperties.has('prop1');
  }
  
  change() {
    return Math.floor(Math.random()*10);
  }
}
customElements.define('my-element', MyElement);
