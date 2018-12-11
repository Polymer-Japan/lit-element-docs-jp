---
layout: post
section: docs
topic: templates
subtopic: syntax
---

<!-- original:
**Render**

```js
render() { return html`<p>template</p>`; }
```

**Properties, loops, conditionals**  

```js
// Property
html`<p>${this.myProp}</p>`;

// Loop 
html`${this.myArray.map(i => html`<li>${i}</li>`;)}`;

// Conditional
html`${this.myBool?html`<p>foo</p>`:html`<p>bar</p>`}`;
```

**Data bindings**

```js
// Attribute
html`<p id="${...}">`;

// Boolean attribute
html`<input type="checkbox" ?checked="${...}">`;

// Property
html`<input .value="${...}">`;

// Event handler 
html`<button @click="${this.doStuff}"></button>`;
```

**Composition**

```js
// From multiple templates on same class

render() {
  return html`
    ${this.headerTemplate}
    <article>article</article>
  `;
}
static get headerTemplate() {
  return html`<header>header</header>`;
}
```

```js
// By importing elements
import './my-header.js';

class MyPage extends LitElement{
  render() {
    return html`
      <my-header></my-header>
      <article>article</article>
    `;
  }
}
```

**Slots**

```js
render() { return html`<slot name="thing"></slot>`; }
```

```html
<my-element>
  <p slot="thing">stuff</p>
</my-element>
```
-->

**描画**

```js
render() { return html`<p>テンプレート</p>`; }
```

**プロパティ、繰り返し、条件分岐**  

```js
// プロパティ
html`<p>${this.myProp}</p>`;

// 繰り返し
html`${this.myArray.map(i => html`<li>${i}</li>`;)}`;

// 条件分岐
html`${this.myBool?html`<p>ほげ</p>`:html`<p>ふが</p>`}`;
```

**データバインディング**

```js
// 属性
html`<p id="${...}">`;

// 真偽値属性
html`<input type="checkbox" ?checked="${...}">`;

// プロパティ
html`<input .value="${...}">`;

// イベントハンドラ
html`<button @click="${this.doStuff}"></button>`;
```

**テンプレート生成**

```js
// 同じクラスで複数のテンプレートを使う

render() {
  return html`
    ${this.headerTemplate}
    <article>文書</article>
  `;
}
static get headerTemplate() {
  return html`<header>ヘッダ</header>`;
}
```

```js
// 要素のインポート
import './my-header.js';

class MyPage extends LitElement{
  render() {
    return html`
      <my-header></my-header>
      <article>文書</article>
    `;
  }
}
```

**スロット**

```js
render() { return html`<slot name="thing"></slot>`; }
```

```html
<my-element>
  <p slot="thing">ぴよ</p>
</my-element>
```
