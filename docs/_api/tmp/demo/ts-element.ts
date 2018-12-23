      <style>
        :host {
          display: block;
        }
      </style>TSElement says: ${message} ${extra}
    `;
  }
}
customElements.define('ts-element', TSElement);