---
layout: post
section: docs
topic: create
---

<a id="install">

### [LitElementのインストール](#install)

<!-- original:
To add LitElement to your project, install the `@polymer/lit-element` package with npm:
-->

LitElementをプロジェクトに追加するには、npmで `@polymer/lit-element`パッケージをインストールします:

```
npm install @polymer/lit-element --save
```

<a id="class">

### [新規でコンポーネントをつくる](#class)

<!-- original:
To create a new class based on LitElement: 

* Import the `LitElement` base class and the `html` helper function.
* Create a new class that extends the `LitElement` base class.
* Implement `render` to define a template for your web component.
* Register your component's HTML tag with the browser.

For example:
-->

LitElementを使ったクラスを作成するには:

* `LitElement`のベースクラスと`html`ヘルパー関数をインポートし、
* `LitElement`のベースクラスを継承した新しいクラスを作成、
* テンプレートを描画する`render`関数を実装して
* ブラウザにHTMLタグとして登録します

例として:


_my-element.js_

```js
{% include projects/docs/create/my-element.js %}
```

{% include project.html folder="docs/create" openFile="my-element.js" %}

<a id="typescript">

### [TypeScriptを使ったコンポーネント作成](#typescript)

<!-- original:
You can use the `@customElement` TypeScript decorator to define your class as a custom element:
-->

TypeScriptの`@customElement`デコレータを使って要素を定義できます:

```ts
{% include projects/docs/typescript/my-element.ts %}
```

{% include project.html folder="docs/typescript" openFile="my-element.ts" %}

<a name="import">

### [LitElementコンポーネントをインポートする](#import)

#### 作成したコンポーネントのインポート

<!-- original:
In an HTML document:
-->

HTMLでは:

```html
<head>
  <script type="module" src="/path/to/my-element.js"></script>
</head>
<body>
  <my-element></my-element>
</body>
```

<!-- original:
In another JavaScript module:
-->

他のJavaScriptモジュールからは:

```js
// 相対パスを指定
import './my-element.js';

class MyOtherElement extends LitElement{
  render(){
    return html`
      <my-element></my-element>
    `;
  }
}
customElements.define('my-other-element', MyOtherElement);
```

#### 他の人が作成したコンポーネントのインポート

<!-- original:
**Refer to third-party component documentation first.** To work with any existing component made by a third party, see its documentation. This guide should work for most LitElement-based components if they are published on npm.

Many components are published on npm and can be installed from the command line:
-->

**他の人が作成したコンポーネントを使う場合にはちゃんとその文書を参照しましょう** 他者による既存のコンポーネントはそれ自体のドキュメントを読むべきです。このガイドにおいては、npmで公開されているほとんどのLitElementベースのコンポーネントで通用するでしょう。

多くのコンポーネントnpmで公開されており、下記のコマンドラインでインストールできます:


```bash
cd my-project-folder
npm install package-name --save
```

<!-- original:
In an HTML document, a component published on npm can be imported from the `node_modules` folder:
-->

HTMLからは読み込むには`node_modules`フォルダを指定します:

```html
<head>
  <script type="module" src="node_modules/package-name/existing-element.js"></script>
</head>
<body>
  <existing-element></existing-element>
</body>
```

<!-- original:
To import into another JavaScript module, use the component's package name:
-->

また別のJavaScriptモジュールをインポートするには、コンポーネントのパッケージ名を指定します:

```js
import 'package-name/existing-element.js';

class MyElement extends LitElement{
  render(){
    return html`
      <existing-element></existing-element>
    `;
  }
}
customElements.define('my-element', MyElement);
```
