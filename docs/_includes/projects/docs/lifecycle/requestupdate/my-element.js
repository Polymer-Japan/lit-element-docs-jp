import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement { 
  constructor() {
    super();
    
    // イベントに応じて更新をリクエストする
    this.addEventListener('load-complete', async (e) => {
      console.log(e.detail.message);
      console.log(await this.requestUpdate());
    });
  }
  render() { 
    return html`
      <button @click="${this.fire}">"load-complete"イベントが発火</button>
    `;
  }
  fire() {
    let newMessage = new CustomEvent('load-complete', { 
      detail: { message: 'こんにちは、load-completeが起きました' }
    });
    this.dispatchEvent(newMessage);
  }
}
customElements.define('my-element', MyElement);
