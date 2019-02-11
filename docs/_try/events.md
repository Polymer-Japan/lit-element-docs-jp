---
layout: try
slug: events
title: イベント
---

<!-- original:
In this step, you'll use lit-html's `@event` annotation to add an event listener to an element inside your template. You'll also add an event handler method to your class which will fire whenever the event occurs.

**Starting code**

_my-element.js_

-->

ここではlit-htmlの`@イベント名`という構文で、テンプレート内の要素にイベントリスナーを追加します。また、イベントが発生するたびに呼ばれるイベントハンドラもクラスに追加します。

**初期コード**

_my-element.js_

```js
{% include projects/try/events/before/my-element.js %}
```

{% include project.html folder="try/events/before" openFile="my-element.js" %}

<!-- original:
1.  **Add a button with an event listener to your template.**

    In my-element.js, add the following `<button>` element to your HTML template:

    ```html
    <button @click=${this.clickHandler}>Click</button>
    ```

    The binding syntax `@click=${this.clickHandler}` adds a listener for the `click` event, which calls the `clickHandler` method.

2. **Add the `clickHandler` method to your class.** 

    Add the following method to your `MyElement` class:

    ```js
    clickHandler(event) {
      console.log(event.target);
      this.myBool = !this.myBool;
    }
    ```
    
    The `clickHandler` method toggles the boolean property, `myBool`, which you defined in the previous step.

Here's the completed code for this step:
-->
1. **テンプレートにイベントリスナー付きのボタンを追加します。**

    my-element.jsで、次の `<button>`要素をHTMLテンプレートに追加してください:

    ```html
    <button @click="${(event) => this.clickHandler(event)}">Click</button>
    ```

    バインディングする為の構文 `@click=${this.clickHandler}`は`click`イベントのリスナーを追加します。これは`clickHandler`メソッドを呼び出します。

2. **クラスに`clickHandler`メソッドを追加してください。**

    `MyElement`クラスに以下のメソッドを追加します:

    ```js
    clickHandler(event) {
      console.log(event.target);
      this.myBool = !this.myBool;
    }
    ```

    `clickHandler`メソッドは前のステップで定義した真偽値のプロパティ`myBool`を切り替えます。

このステップの完成したコードはこちらです:

```js
{% include projects/try/events/after/my-element.js %}
```

[次へ: 5. スタイル](style)
