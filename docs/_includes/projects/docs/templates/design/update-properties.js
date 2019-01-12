import { LitElement, html } from 'lit-element';

/**
 * 推奨パターン
 */
class UpdateProperties extends LitElement {
  static get properties(){
    return {
      message: String
    };
  }
  constructor() {
    super();
    this.message = '読み込み中';
    this.addEventListener('stuff-loaded', (e) => { this.message = e.detail } );
    this.loadStuff();
  }
  render() {
    return html`
      <p>${this.message}</p>
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

customElements.define('update-properties', UpdateProperties);
