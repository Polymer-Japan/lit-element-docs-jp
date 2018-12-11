import { LitElement, html } from '@polymer/lit-element';

// アンチパターン。こう書いてはいけません!

class DomManip extends LitElement {
  constructor() {
    super();
    this.addEventListener('stuff-loaded', (e) => {
      this.shadowRoot.getElementById('message').innerHTML = e.detail;
    });
    this.loadStuff();
  }
  render() {
    return html`
      <p id="message">読み込み中</p>
    `;
  }
  loadStuff() {
    setInterval(() => {
      let loaded = new CustomEvent('stuff-loaded', { 
        detail: '読み込み完了'
      });
      this.dispatchEvent(loaded);
    }, 3000);
  }
}
customElements.define('dom-manip', DomManip);
