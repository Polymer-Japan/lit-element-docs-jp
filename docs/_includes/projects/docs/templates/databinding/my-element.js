import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      prop1: String,
      prop2: String,
      prop3: Boolean,
      prop4: String
    };
  }
  constructor() {
    super();
    this.prop1 = 'text binding';
    this.prop2 = 'mydiv';
    this.prop3 = true;
    this.prop4 = 'pie';
  }
  render() {
    return html`
      <!-- テキスト -->
      <div>${this.prop1}</div>

      <!-- 属性 -->
      <div id="${this.prop2}">属性バインディング</div>

      <!-- 真偽値属性 -->
      <div>
        真偽値属性バインディング
        <input type="checkbox" ?checked="${this.prop3}"/>
      </div>
      
      <!-- プロパティ -->
      <div>
        プロパティ
        <input type="checkbox" .value="${this.prop4}"/>
      </div>
      
      <!-- イベントハンドラ -->
      <div>イベントハンドラ・バインディング
        <button @click="${this.clickHandler}">click</button>
      </div>
    `;
  }
  clickHandler(e) {
    console.log(e.target);
  }
}

customElements.define('my-element', MyElement);
