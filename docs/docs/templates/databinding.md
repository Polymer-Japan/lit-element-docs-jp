---
layout: post
section: docs
topic: templates
subtopic: databinding
---

<!-- original:
**On this page:**

* [Bind to text content](#text)
* [Bind to an attribute](#attribute)
* [Bind to a Boolean attribute](#boolean)
* [Bind to a property](#property)
* [Bind to an event handler](#eventhandler)

You can insert JavaScript expressions as placeholders for HTML text content, attributes, Boolean attributes, properties, and event handlers.

* Text content: `<p>${...}</p>`
* Attribute: `<p id="${...}"></p>`
* Boolean attribute: `?checked="${...}"`
* Property: `.value="${...}"`
* Event handler: `@event="${...}"`

JavaScript expressions can include your element's properties. LitElement observes and reacts to property changes, so your templates update automatically.

Data bindings are always one-way (parent to child). To share data from a child element to its parent, use events.
-->

**ここでは:**

* [テキストコンテンツへのバインド](#text)
* [属性へのバインド](#attribute)
* [真偽値属性へのバインド](#boolean)
* [プロパティへのバインド](#property)
* [イベントハンドラへのバインド](#eventhandler)

HTMLテキストコンテンツ、属性、真偽属性、プロパティ、およびイベントハンドラのバインドにJavaScript式を使えます。

* テキストコンテンツ: `<p>${...}</p>`
* 属性: `<p id="${...}"></p>`
* 真偽値属性: `?checked="${...}"`
* プロパティ: `.value="${...}"`
* イベントハンドラ: `@event="${...}"`

JavaScript式を要素のプロパティとして使うことができます。LitElementはプロパティの変更を監視するので、テンプレートは自動的に更新されます。

データバインディングは常に一方向（親から子へ）です。子要素から親要素にデータを送るには、イベントを使います。

<a id="text">

### [テキストコンテンツへのバインド](#text)

<!-- original:
Bind `prop1` to text content:
-->

`prop1`をテキストコンテンツとしてバインドするには:

```js
html`<div>${this.prop1}</div>`
```

<a id="attribute">

### [属性へのバインド](#attribute)

<!-- original:
Bind `prop2` to an attribute:
-->

`prop2`を属性としてバインドするには:

```js
html`<div id="${this.prop2}"></div>`
```

<!-- original:
Attribute values are always strings, so an attribute binding should return a value that can be converted into a string.
-->

属性値は常に文字列なので、属性バインディングは文字列に変換できる値を返さなければなりません。

<a id="boolean">

### [真偽値属性へのバインド](#boolean)

<!-- original:
Bind `prop3` to a boolean attribute: 
-->

`prop2`を真偽値属性としてバインドするには:

```js
html`<input type="checkbox" ?checked="${this.prop3}">i like pie</input>`
```

<!-- original:
Boolean attributes are added if the expression evaluates to a truthy value, and removed if it evaluates to a falsy value.
-->

真偽値属性は、式が真(truthy)と評価される時に追加され、偽(falsy)と評価される時に削除されます。

<a id="property">

### [プロパティへのバインド](#property)

<!-- original:
Bind `prop4` to a property:
-->

`prop4`をプロパティとしてバインドするには:

```js
html`<input type="checkbox" .value="${this.prop4}"/>`
```

### [イベントハンドラへのバインド](#eventhandler)

<!-- original:
Bind `clickHandler` to a `click` event:
-->

`clickHandler`関数を`click`イベントにバインドするには:

```js
html`<button @click="${this.clickHandler}">pie?</button>`
```

<!-- original:
The default event context for `@event` expressions is `this`, so there is no need to bind the handler function.
-->

`@event`ののデフォルトのイベントコンテキストは`this`なので、関数をバインドする必要(訳注: constructorで this.clickHandler.bind(this)する)はありません。

### サンプル

_my-element.js_

```js
{% include projects/docs/templates/databinding/my-element.js %}
```

{% include project.html folder="docs/templates/databinding" openFile="my-element.js" %}
