---
layout: post
section: docs
topic: templates
subtopic: slots
---

<!-- original:
**On this page:**

* [Shadow DOM vs light DOM](#intro)
* [Render light DOM children with the `slot` element](#slot)
* [Assign a light DOM child to a specific slot](#named)
-->

**ここでは:**

* [Shadow DOM vs light DOM](#intro)
* [`slot`要素を使ってlight DOMの子要素を描画する](#slot)
* [指定したslotにlight DOMを設定する](#named)

<a id="intro">

### [Shadow DOM vs light DOM](#intro)

<!-- original:
Since the introduction of shadow DOM, we use the term "light DOM" to refer to nodes that appear in the main DOM tree.

By default, if a custom element has light DOM children in HTML, they do not render at all:
-->

shadow DOMが導入されてから我々はメインDOMツリーに表示されるノードは"light DOM"という用語で区別しています。

デフォルトでカスタム要素はそのlight DOMの子要素を全く描画しません:

```html
<my-element>
  <p>I won't render</p>
</my-element>
```

<!-- original:
You can make them render using the [`<slot>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). 
-->

それらを描画するには[`<slot>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)を使います。

<a id="slot">

### [`slot`要素を使ってlight DOMの子要素を描画する](#slot)

<!-- original:
To render an element's light DOM children, create a `<slot>` for them in the element's template. For example:
-->

エレメントのlight DOMを描画するには、テンプレートの中に`<slot>`を入れます。

例えば:

```js
render(){
  return html`
    <div>
      <slot></slot>
    </div>
  `;
}
```

<!-- original:
Light DOM children will now render in the `<slot>`:
-->

Light DOMの子要素は下記のように描画されるでしょう:

```html
<my-element>
  <p>Render me</p>
</my-element>
```

<!-- original:
Arbitrarily many light DOM children can populate a single slot:
-->

複数の子要素でも一つのslotで展開されます:

```html
<my-element>
  <p>Render me</p>
  <p>Me too</p>
  <p>Me three</p>
</my-element>
```

{% include project.html folder="docs/templates/slots" openFile="my-element.js" %}

<a id="named">

### [指定したslotにlight DOMを設定する](#named)

<!-- original:
To assign a light DOM child to a specific slot, ensure that the child's `slot` attribute matches the slot's `name` attribute:
-->

light DOMの子要素を特定のスロットに割り当てるには、その子要素の`slot`属性の値とslotの`name`属性が一致するようにしてください:

```js
render(){
  return html`
    <div>
      <slot name="one"></slot>
    </div>
  `;
}
```

_index.html_

<!-- original:
```html
<my-element>
  <p slot="one">Include me in slot "one".</p>
</my-element>
```

* **Named slots only accept light DOM children with a matching `slot` attribute.**

  For example, `<slot name="one"></slot>` only accepts children with the attribute `slot="one"`.

* **Light DOM children with a `slot` attribute will only be placed in a slot with a matching `name` attribute.**

  For example, `<p slot="one">...</p>` will only be placed in `<slot name="one"></slot>`.

**Examples**
-->

```html
<my-element>
  <p slot="one">slotのoneとして表示</p>
</my-element>
```

* **名前付きslotは、一致する `slot`属性を持つlight DOMの子要素のみで使えます**

  例えば、`<slot name="one"></slot>`は`slot="one"`を持つ子要素のみ受け入れます。

* **`slot`属性を持つlight DOMの子要素は、一致する`name`属性を持つslotの場所にだけ表示されます**

  例えば、light DOMの子要素として定義した`<p slot="one">...</p>`は親要素の`<slot name="one"></slot>`に表示されます。

**サンプル**

_my-element.js_

```js
{% include project.html folder="projects/docs/templates/namedslots/my-element.js" %}
```

_index.html_

```html
{% include project.html folder="projects/docs/templates/namedslots/index.html" %}
```

{% include project.html folder="docs/templates/namedslots" openFile="my-element.js" %}

<!-- original:
**Use `name`, not `id`, to select slots.**

Note that a `slot`'s `id` attribute has no effect!
-->

**slotを選択するには`id`ではなく`name`を使ってください**

`slot`に`id`属性を設定してもなんの効果もありません!

_my-element.js_

```js
render(){
  return html`
    <div>
      <slot id="one"></slot>
    </div>
  `;
}
```

_index.html_

<!-- original:
```html
<my-element>
  <p slot="one">nope.</p>
  <p>ohai..</p>
</my-element>
```
-->

```html
<my-element>
  <p slot="one">hoge</p>
  <p>fuga..</p>
</my-element>
```

{% include project.html folder="docs/templates/slotid" openFile="my-element.js" %}

</aside>
