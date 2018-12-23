> ## 🛠 Status: In Development
> LitElementは現在開発中です。 1.0リリース向けて最終調整中で、実際に使ってみてもらい、フィードバックをもらえる嬉しいですが、最終的に変更されるものがあります。

# LitElement API Documentation

## Install @polymer/lit-element

```
npm install --save @polymer/lit-element
```

## Modules

### [lit-element](/api/modules/_lit_element_.html)

Extends [UpdatingElement](#lib-updating-element) to include lit-html templating. Users define a `render` method to provide an element template, which is called when required by `update`.

Import `LitElement` and `html` from this module to create a component:

```js
import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {
  render() {
      return html`<p>your template here</p>`;
  }
}

customElements.define('my-element', MyElement);
```

### [lib/updating-element](/api/modules/_lib_updating_element_.html)

```js
import { UpdatingElement } from '@polymer/lit-element/lib/updating-element.js';
```

Custom Element base class that supports declaring observable properties, reflecting attributes to properties, and the core update lifecycle methods.
