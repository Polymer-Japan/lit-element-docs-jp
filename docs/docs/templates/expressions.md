---
layout: post
section: docs
topic: templates
subtopic: expressions
---

<!-- original:
**On this page:**

* [Add properties to a template](#properties)
* [Use loops in a template](#loops)
* [Use conditionals in a template](#conditionals)
* [Examples](#examples)
-->

**ここでは:**

* [プロパティをテンプレートに追加する](#properties)
* [繰り返し処理を使う](#loops)
* [条件分岐を使う](#conditionals)
* [サンプル](#examples)

<a id="properties">

### [プロパティをテンプレートに追加する](#properties)

<!-- original:
To add a property value to a template, insert it with `${this.propName}`:
-->

プロパティをテンプレートに追加するには、`$ {this.propName}`を使います:

```js
static get properties() {
  return { myProp: String };
}
...
render() { 
  return html`<p>${this.myProp}</p>`; 
}
```

<!-- original:
See also: 

* [Bind data to child element properties and attributes](databinding)
* [Work with properties](../properties)
-->

参照: 

* [子要素にプロパティや属性を渡す](databinding)
* [プロパティを知る](../properties)

<a id="loops">

### [繰り返し処理を使う](#loops)

<!-- original:
Iterate over an array:
-->

配列を処理する:

```js
html`<ul>
  ${this.myArray.map(i => html`<li>${i}</li>`)}
</ul>`;
```

<!-- original:
See also: 

* [Compose templates from other templates](compose)
* [Bind data to child element properties and attributes](databinding)
-->

参照: 

* [他からテンプレートを作る](compose)
* [子要素にプロパティや属性を渡す](databinding)

<a id="conditionals">

### [条件分岐を使う](#conditionals)

<!-- original:
Render based on a Boolean condition:
-->

真偽値(Boolean)の条件分岐結果を描画する:


```js
html`
  ${this.myBool?
    html`<p>Render some HTML if myBool is true</p>`:
    html`<p>Render some other HTML if myBool is false</p>`}
`;
```

### [サンプル](#examples)

```js
{% include projects/docs/templates/expressions/my-element.js %}
```

{% include project.html folder="docs/templates/expressions" openFile="my-element.js" %}
