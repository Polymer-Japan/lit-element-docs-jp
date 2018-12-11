---
layout: post
section: docs
topic: templates
subtopic: design
---

<!-- original:
LitElement renders and re-renders asynchronously, updating in response to batched property changes (see [Element update lifecycle](#lifecycle) for more information).

During an update, only the parts of the DOM that change are re-rendered. To get the performance benefits of this model, you should **design your element's template as a pure function of its properties**.

To do this, make sure the `render` function:

* Does not change the element's state.
* Does not have any side effects.
* Only depends on the element's properties.
* Returns the same result when given the same property values.

Also, avoid making DOM updates outside of `render`. Instead, express the element's template as a function of its state, and capture its state in properties. 

The following code uses inefficient DOM manipulation:
-->

LitElementはプロパティ変更を一括処理して非同期で描画、再描画します(詳しくは[エレメントのアップデートライフサイクル](#lifecycle)を参照)。

その更新では、変更されたDOMの特定部分のみが再描画されます。このモデルによるパフォーマンスの恩恵を得るには、**テンプレートはそのプロパティに対して純粋な関数**となるように設計する必要があります。

そのために`render`関数は:

* 要素の状態を変更しない
* 副作用(side effect)を発生させない
* 依存するのは要素のプロパティのみ
* 同じプロパティが与えられたときは同じ結果を返すように

また、 `render`の外でDOMを更新しないようにしてください。代わりに、テンプレートを状態関数として作り、その状態(ステート)はプロパティから取得してください。

下記のコードは、非効率的なDOM操作となります:

_dom-manip.js_

<!-- original:
```text
// Anti-pattern. Avoid!

constructor() {
  super();
  this.addEventListener('stuff-loaded', (e) => {
    this.shadowRoot.getElementById('message').innerHTML=e.detail;
  });
  this.loadStuff();
}
render() {
  return html`
    <p id="message">Loading</p>
  `;
}
```

We can improve the template by capturing the load message as a property, and setting the property in response to the event:
-->

```js
// アンチパターン。こう書いてはいけません!

constructor() {
  super();
  this.addEventListener('stuff-loaded', (e) => {
    this.shadowRoot.getElementById('message').innerHTML=e.detail;
  });
  this.loadStuff();
}
render() {
  return html`
    <p id="message">読み込み中</p>
  `;
}
```

推奨パターンは「読み込み中」のメッセージをプロパティにして、イベント処理時にそのプロパティを更新します:

_update-properties.js_

```js
constructor() {
  super();
  this.message = '読み込み中';
  this.addEventListener('stuff-loaded', (e) => { this.message = e.detail } );
  this.loadStuff();
}
render() {
  return html`
    <p>${this.message}</p>
  `;
}
```

{% include project.html folder="docs/templates/design" openFile="update-properties.js" %}
