import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement { 
  static get properties() { return { 
    /**
     * 属性 `my-prop`を変更すると、プロパティ`myProp`が更新されます
     * プロパティ`myProp`に対する変更は`my-prop`属性に反映されます
    */    
    myProp: { type: String, attribute: 'my-prop', reflect: true },

    /**
     * 属性 `someprop`を変更すると、プロパティー` someProp`が更新されます
     * 属性somePropへの変更は、属性 `someprop`には反映されません。
    */
    someProp: { type: String },
  };}

  constructor() {
    super();
    this.myProp='myProp';
    this.someProp='someProp';
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
      <p>${this.myProp}</p>
      <p>${this.someProp}</p>
      <button @click="${this.changeAttributes}">change attributes</button>
      <button @click="${this.changeProperties}">change properties</button>
    `;
  }

  changeAttributes() {
    let randomString = Math.floor(Math.random()*100).toString();
    this.setAttribute('my-prop', 'my-prop ' + randomString);
    this.setAttribute('someprop', 'someprop ' + randomString);
    this.requestUpdate();
  }

  changeProperties() {
    let randomString = Math.floor(Math.random()*100).toString();
    this.myProp='myProp ' + randomString;
    this.someProp='someProp ' + randomString;
  }
  
  updated() {
    console.log(this);
  }
}
customElements.define('my-element', MyElement);
