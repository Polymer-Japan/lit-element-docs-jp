import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {  
  static get properties(){ return {
    myProp: {
      type: Number,

      /**
       * myPropの新しい値と古い値を比較します。
       * 
       * newValがoldValより大きい場合にのみmyPropを変更したとみなしてください。
       */
      hasChanged(newVal, oldVal) {
        if (newVal > oldVal) {
          console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
          return true;
        }
        else {
          console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
          return false;
        }
      }
    }};
  }
  
  constructor(){
    super();
    this.myProp = 1;
  }

  render(){
    return html`
      <p>${this.myProp}</p>
      <button @click="${this.getNewVal}">get new value</button>
    `;
  }
  
  updated(){
    console.log('updated');
  }

  getNewVal(){
    let newVal = Math.floor(Math.random()*10);
    this.myProp = newVal;
  }

}
customElements.define('my-element', MyElement);
