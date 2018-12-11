import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement { 
  static get properties() { return { 
    foo: String 
  };}
  
  /**
   * `foo`のカスタムプロパティ設定。
   * 
   * カスタムプロパティセッターを実装するときに `requestUpdate`を呼び出します
   * プロパティの変更によって更新がトリガーされるようにする
   * 必要な場合に。
   * 
   * プロパティの古い値を `requestUpdate`に渡します。
   * 任意のプロパティオプションを正しく適用することができます。
  */
  set foo(newVal) { 
    let oldVal = this.foo;
    console.log('値の設定 ', oldVal, 'から', newVal);
    this.setAttribute('foo', newVal);
    this.requestUpdate('foo', oldVal).then(
      result => console.log('updateComplete:', result)
    );
  }

  /**
   * `foo`のカスタムプロパティゲッター。
   */ 
  get foo() {
    return this.getAttribute('foo'); 
  }

  render() { 
    return html`
      ${this.foo}
      <button @click="${this.getNewVal}">新しい値を取得</button>
    `;
  }
  
  getNewVal() {
    let newVal = Math.floor(Math.random()*10);
    this.foo = newVal;
  }
}
customElements.define('my-element', MyElement);
