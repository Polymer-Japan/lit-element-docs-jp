---
layout: try
slug: events
title: イベント
---

<!-- original:
In this step, you'll use lit-html's `@event` annotation to add an event listener to an element inside your template. 

**Starting code**

_my-element.js_

-->

ここではlit-htmlの`@イベント名`という構文で、テンプレート内の要素にイベントリスナーを追加します。

**初期コード**

_my-element.js_

```js
{% include projects/try/events/before/my-element.js %}
```

{% include project.html folder="try/events/before" openFile="my-element.js" %}

<!-- original:
1. **Add an event listener.**

    In my-element.js, in your template, replace the existing HTML `button` element with the following code:

    ```html
    <button @click="${this.clickHandler}">Click</button>
    ```

    The annotation above adds a listener for the `click` event.

2. **Implement an event handler.** 

    To handle the `click` event, define the following method on your `MyElement` class:

    ```js
    clickHandler(event) {
      console.log(event.target);
      this.myBool = !this.myBool;
    }
    ```

If you're stuck, click **Launch Code Editor** below to see the completed code for Step 5.
-->
1. **イベントリスナを登録**

    HTMLの`button'タグを下記のコードで置き換えてください:

    ```html
    <button @click="${(event) => this.clickHandler(event)}">Click</button>
    ```

    この構文で`click`イベントにリスナーが追加されます。

2. **イベントハンドラを実装** 

    `click`イベントに対応するメソッドを`MyElement`クラスに追加するには下記のコードを追加してください:

    ```js
    clickHandler(event) {
      console.log(event.target);
      this.myBool = !this.myBool;
    }
    ```

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/events/after" openFile="my-element.js" %}

[次へ: 6. スタイル](style)
