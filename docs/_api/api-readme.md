<!-- original:
> ## 🛠 Status: In Development
> LitElement is currently in development. It's on the fast track to a 1.0 release, so we encourage you to use it and give us your feedback, but there are things that haven't been finalized yet and you can expect some changes.

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
-->
> ## 🛠 開発中
> LitElementは現在開発中です。 1.0リリース向けて最終調整中であり、実際に使用したフィードバックを歓迎しますが、最終的にAPIが変更される場合があります。

# LitElement API ドキュメント

## @polymer/lit-element をインストール

```
npm install --save @polymer/lit-element
```

## モジュール

### [lit-element](/api/modules/_lit_element_.html)

lit-htmlのテンプレート機能を使用した [UpdatingElement](#lib-updating-element)を拡張したものです。要素にテンプレートを提供するために`render`メソッドを定義します。これは`update`によって呼び出されます。

このモジュールから`LitElement`と`html`をインポートしてください:

```js
import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {
  render() {
      return html`<p>ここにテンプレートを書きます</p>`;
  }
}

customElements.define('my-element', MyElement);
```

### [lib/updating-element](/api/modules/_lib_updating_element_.html)

```js
import { UpdatingElement } from '@polymer/lit-element/lib/updating-element.js';
```

Custom Element base class that supports declaring observable properties, reflecting attributes to properties, and the core update lifecycle methods.

プロパティの監視、プロパティから属性への反映、および基本的な更新ライフサイクルを提供するカスタム要素のベースクラス。
