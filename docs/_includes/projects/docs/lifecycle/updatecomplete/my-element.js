import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {  
  static get properties() {
    return {
      prop1: Number
    };
  }

  constructor() {
    super();
    this.prop1 = 0;
  }

  render() {
    return html`      
      <p>prop1: ${this.prop1}</p>
      <button @click="${this.changeProp}">prop1</button>
    `;
  }

  /**
   * すべての更新が完了する前に追加の状態を待つ
   */
  get updateComplete() {
    console.log('状態が変るのを待っています...');
    return this.getMoreState().then(() => {
      console.log('状態が変更されました');
      return this._updatePromise;
    });
  }

  async getMoreState() {
    return;
  }

  async changeProp() {
    this.prop1 = Math.random();
    console.log('updateCompleteがresolveされました: ', await this.updateComplete);
  }
}

customElements.define('my-element', MyElement);
