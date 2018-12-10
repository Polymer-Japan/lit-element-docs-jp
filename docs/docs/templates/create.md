---
layout: post
section: docs
topic: templates
subtopic: create
---

<!-- original:
**On this page:**

* [Define a template](#define)
* [Specify the render root](#renderroot)
-->

**このページでは:**

* [テンプレートの定義](#define)
* [レンダールート](#renderroot)

<a id="define">

### [テンプレートの定義](#define)

<!-- original:
To define a template for a LitElement component, write a `render` function for your element class:
-->

テンプレートを定義するにはクラス内で`render`関数を実装してください:

```js
class MyElement extends LitElement {
  render() {
    return html`<p>template content</p>`;
  }
}
```

<!-- original:
* Write your template in HTML inside a JavaScript template literal by enclosing the raw HTML in back-ticks (<code>``</code>). 

* Tag your template literal with the `html` helper function, so that `render` returns a lit-html `TemplateResult`.

Example
-->

* テンプレートは、JavaScriptのテンプレートリテラル内でバックチック(<code>``</code>)で囲んだHTMLで書いてください。

* テンプレートリテラルに`html`ヘルパー関数でタグをつけ、` render`がlit-htmlの `TemplateResult`を返すようにします。

例えば

```js
{% include projects/docs/templates/define/my-element.js %}
```

{% include project.html folder="docs/templates/define" openFile="my-element.js" %}

<!-- original:
You can use JavaScript expressions to [add properties, loops, and conditionals](expressions), [compose templates from other templates](compose), and [bind data to child elements](databinding).

Many text editors can highlight HTML syntax inside JavaScript template literals. See the section on [HTML syntax highlighting](/tools/develop#highlighting) in the Tools documentation.
-->

[プロパティを追加したり、繰り返しや条件分岐](expressions)、[他のテンプレートからさらにテンプレートを作ったり](compose) [子要素にデータを渡す](databinding)のにJavaScript式が使えます。

多くのテキストエディタは、JavaScriptテンプレートリテラル内のHTMLをハイライト表示できます。ツールのドキュメントの[ハイライト表示](/tools/develop#highlighting)を参照してください。

<a id="renderroot">

### [レンダールート](#renderroot)

<!-- original:
The node into which your component's template will render is called its **render root**.

By default, LitElement creates an open `shadowRoot` and renders inside it, producing the following DOM structure:
-->

テンプレートが描画されるノード(node)を**レンダールート**と呼びます。

デフォルトでLitElementはレンダールートに`shadowRoot`を作成し、その下にDOMを構成します。

```text
<my-element>
  #shadow-root
    <p>child 1</p>
    <p>child 2</p>
```

<!-- original:
To customize a component's render root, implement `createRenderRoot` and return the node you want the template to render into. 

For example, to render the template into the main DOM tree as your element's light DOM:
-->

コンポーネントのレンダールートを変更するには`createRenderRoot`を実装し、描画させたいノードを指定してください。

たとえば、テンプレートをメインDOMツリー以下にlight DOMとして描画するには次のようにします:

```text
<my-element>
  <p>child 1</p>
  <p>child 2</p>
```

`createRenderRoot`を実装し、`this`を返します:

```js
class LightDom extends LitElement {
  render() {
    return html`
      <p>このテンプレートはlight DOMに描画されます</p>
    `;
  }
  createRenderRoot() {
  /**
   * light DOMに描画。shadow DOMではないので、
   * CSSのカプセル化は行われない。
   */
    return this;
  }
}
```

{% include project.html folder="docs/templates/renderroot" openFile="light-dom.js" %}
