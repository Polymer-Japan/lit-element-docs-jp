---
layout: post
title: CSSスタイリング
slug: styles
---

<!-- original:
**This guide applies only if you use the default (shadow DOM) render root.** If you modify your element's render root to render into the main DOM tree instead of a shadow root, these instructions won't apply.

**If you're using the Shady CSS polyfill, be aware that it has some limitations.** See the [Shady CSS README](https://github.com/webcomponents/shadycss/blob/master/README.md#limitations) for more information.
-->

**このガイドは、デフォルトの(shadow DOM)レンダールートを使用する場合にのみ適用されます。** 要素のレンダールートを変更して、シャドウルートではなくメインのDOMツリーにレンダリングする場合、これらの手順は適用されません。

**Shady CSSポリフィルを使用している場合、いくつかの制限があることに注意してください。** 詳細については、[Shady CSS README](https://github.com/webcomponents/shadycss/blob/master/README.md#limitations)を参照してください。

{::options toc_levels="1..3" /}
* ToC
{:toc}

<!-- original:
## Use the :host CSS pseudo-class 

In a style block, use the `:host` CSS pseudo-class to select the host element:
-->

## :host CSS 疑似クラスを使う

スタイルブロックでは、`：host` CSS疑似クラスを使ってホスト要素を指定してください:


_my-element.js_

```js
render() {
  return html`
    <style>
      :host[hidden] { display: none; }
      :host { display: block; 
        border: 1px solid black;
      }
    </style>
    <p>Hello world</p>
  `;
}
```

{% include project.html folder="docs/style/hostselector" openFile="my-element.js" %}

<!-- original:
See the MDN documentation on [:host](https://developer.mozilla.org/en-US/docs/Web/CSS/:host()) and [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) for more information.

### Set :host display styles

Two best practices for working with custom elements are:

* Set a `:host` display style such as `block` or `inline-block` so that your component's `width` and `height` can be set.

* Set a `:host` display style that respects the `hidden` attribute.

-->

[:host](https://developer.mozilla.org/en-US/docs/Web/CSS/:host())および[pseudo-classes](https：//developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)のMDNドキュメントを参照してください。

### :hostのスタイルを表示する

カスタム要素を操作するための2つのベストプラクティスは:

* コンポーネントの `width`と` height`が設定できるように、 `:host`表示スタイルを`block`や `inline-block`のように設定してください。

* `hidden`属性を尊重した`：host`表示スタイルを設定します。

```html
<style>
  :host[hidden] { display: none; }
  :host { display: block; }
</style>
```

{% include project.html folder="docs/style/bestpracs" openFile="my-element.js" %}

詳細については、[カスタム要素のベストプラクティス](https://developers.google.com/web/fundamentals/web-components/best-practices)を参照してください。

<!-- original:
### Style shadow DOM children via properties inherited via :host 

Child elements in your template will inherit CSS properties you assign to your host via the `:host` CSS pseudo-class:

_my-element.js_

```js
render() {
  return html`
    <style>
      :host { 
        display: block; 
        font-family: Roboto;
        font-size: 20;
        color: blue;
      }
    </style>
    <p>Inherits font styles</p>
  `;
}
```
-->

### shadow DOMの子要素を:hostから継承したプロパティでスタイルする

テンプレートの子要素 `:host`はCSS疑似クラスを介してホストに割り当てたCSSプロパティを継承します:

_my-element.js_

```js
render() {
  return html`
    <style>
      :host { 
        display: block; 
        font-family: Roboto;
        font-size: 20;
        color: blue;
      }
    </style>
    <p>継承されたフォントスタイル</p>
  `;
}
```

{% include project.html folder="docs/style/inherited" openFile="my-element.js" %}

<!-- original:
If your host element itself inherits properties from another element, the host's shadow DOM children will inherit those properties in turn:

```html
  <style>
    div { font-family: Roboto; }
  </style>
  ...
  <div><my-element>Will use Roboto font</my-element></div>
```
-->

ホスト要素自体が別の要素のプロパティを継承する場合、そのホストのシャドーDOMの子は、それらのプロパティを順番に継承します:

```html
  <style>
    div { font-family: Roboto; }
  </style>
  ...
  <div><my-element>Robotoフォントが使われる</my-element></div>
```

{% include project.html folder="docs/style/inherited2" openFile="my-element.js" %}

<!-- original:
## Style the host from the main document

You can also style the host from outside its own template.

### Use the custom element tag as a selector

You can set styles for the host from the main document by using its custom element tag as a selector. For example:

_index.html_ 

```html
<style>
  my-element { 
    font-family: Roboto;
    font-size: 20;
    color: blue;
  }
</style>
...
<my-element></my-element>
```

**The :host CSS pseudo-class has higher specificity than the element's type selector.** Styles set for your host with the `:host` pseudo-class from inside its own template will override styles set in the main document. For example:

_index.html_ 

```html
<style>
  my-element { 
    color: blue;
  }
</style>
...
<my-element></my-element>
```

_my-element.js_

```html
<style>
  /* Overrides styles set for my-element in index.html */
  :host {
    color: red;
  }
</style>
```

### Use custom properties

Custom properties inherit down the DOM tree. You can use this to let your users apply styles and themes to your elements.

For example, the following element sets its background color to a CSS variable that uses the value of the custom property `--myBackground` if it is available, and uses `yellow` otherwise:

_my-element.js_

```html
<style>
  :host {
    display: block;
    background-color: var(--myBackground, yellow);
  }
</style>
```

The user can now set the custom property `--myBackground` in their main document in order to style the background of `my-element`. 

_index.html_

```html
<style>
  my-element {
    --myBackground: rgb(67, 156, 144);
  }
</style>
```

If the user has an existing app theme, they can easily apply their theme properties to `my-element`:

```html
<style>
  html {
    --themeColor1: rgb(67, 156, 144);
  }
  my-element {
    --myBackground: var(--themeColor1);
  }
</style>
```
-->

## メインドキュメントからホストをスタイルする

独自のテンプレートの外からホストをスタイルすることもできます。

### カスタム要素タグをセレクタとして使用する

カスタム要素タグをセレクタとして使用して、ホストのスタイルをメインドキュメントから設定できます。例えば:

_index.html_ 

```html
<style>
  my-element { 
    font-family: Roboto;
    font-size: 20;
    color: blue;
  }
</style>
...
<my-element></my-element>
```

**:host CSS疑似クラスは要素の型セレクタよりも特殊です** 独自のテンプレートの中から `:host`疑似クラスを持つホスト用に設定されたスタイルは、メインドキュメントに設定されているスタイルを上書きします。例えば:

_index.html_ 

```html
<style>
  my-element { 
    color: blue;
  }
</style>
...
<my-element></my-element>
```

_my-element.js_

```html
<style>
  /* index.htmlのmy-elementに設定されているスタイルをオーバーライドします。 */
  :host {
    color: red;
  }
</style>
```

### カスタムプロパティを使用する

カスタムプロパティはDOMツリー全体で継承されます。これを使用すると、ユーザーが要素にスタイルやテーマを適用できるようになります。

たとえば、次の要素は、背景色をカスタム変数 `--myBackground`の値を使用するCSS変数に設定し、使用可能な場合は`yellow`を使用します:

_my-element.js_

```html
<style>
  :host {
    display: block;
    background-color: var(--myBackground, yellow);
  }
</style>
```

`my-element`の背景をスタイルするために、メイン文書でカスタムプロパティ`--myBackground`を設定できるようになりました。

_index.html_

```html
<style>
  my-element {
    --myBackground: rgb(67, 156, 144);
  }
</style>
```

ユーザーが既存のアプリテーマを持っている場合、テーマプロパティを `my-element`に簡単に適用できます:

```html
<style>
  html {
    --themeColor1: rgb(67, 156, 144);
  }
  my-element {
    --myBackground: var(--themeColor1);
  }
</style>
```

```js
{% include projects/docs/style/customproperties/my-element.js %}
```

{% include project.html folder="docs/style/customproperties" openFile="my-element.js" %}

<!-- original:
See [CSS Custom Properties on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for more information.

## Select slotted elements with the ::slotted() CSS pseudo-element

Use the `::slotted()` CSS pseudo-element to select light DOM elements that have been included in shadow DOM via the `<slot>` element.

* `::slotted(*)` matches all slotted elements.

* `::slotted(p)` matches slotted paragraphs.

* `p ::slotted(*)` matches slotted elements in a paragraph element.
-->

詳細については、[CSS Custom Properties on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)を参照してください。

## :: slotted() CSS擬似要素でスロット要素を指定する

`:: slotted()` CSS擬似要素を使って、 `<slot>`要素を介したshadow DOMに含まれているlight DOM要素を指定します。

* `::slotted(*)` すべてのスロット要素に一致します。

* `::slotted(p)` スロット付きの段落に一致します。

* `p ::slotted(*)` 段落要素のスロット要素に一致します。

```js
{% include projects/docs/style/slotted/my-element.js %}
```

{% include project.html folder="docs/style/slotted" openFile="my-element.js" %}

<!-- original:
## Use JavaScript expressions in LitElement style blocks

You can include style information in a JavaScript expression inside a LitElement template:

```js
render() { 
  return html`
    <style>${this.myStyles}</style>
    <p>hi world</p>
  `; 
}

get myStyles() { 
  return html`p { color: red }`; 
} 
```
-->

## LitElementスタイルブロックでJavaScript式を使用する

LitElementテンプレート内のJavaScript式にスタイルを含めることができます:

```js
render() { 
  return html`
    <style>${this.myStyles}</style>
    <p>hi world</p>
  `; 
}

get myStyles() { 
  return html`p { color: red }`; 
} 
```

{% include project.html folder="docs/style/expressions" openFile="my-element.js" %}

<!-- original:
## Example: A small theme
-->

## サンプル: 簡単なテーマ設定

_index.html_

```html
<style>
  html {
    --themeColor1: rgb(67, 156, 144);
    --themeFont: Roboto;
  }
  my-element {
    --myColor: var(--themeColor1);
    --myFont: var(--themeFont);
  }
</style>
...
<my-element></my-element>
```

_my-element.js_

```js
render() {
  return html`
    <style>
      :host[hidden] { display: none; }
      :host { display: block; 
        color: var(--myColor, aliceblue);
        font-family: var(--myFont, Verdana);
      }
      ${navStyles}
    </style>

    <ul class="navigation">
      ${this.menuItems.map(item => html`<li class="item">${item}</li>`)}
    </ul>
  `;
}
```

_my-styles.js_

```js
export const navStyles = html`
  ul {
    list-style-type: none; 
    margin: 0;
    padding: 0;
  }
  .navigation {
    display: flex;
    flex-direction: row;
  }
  .item {
    padding: 8px;
  }
`;
```

{% include project.html folder="docs/style/smalltheme" openFile="my-element.js" %}
