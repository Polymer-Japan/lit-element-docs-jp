---
layout: try
slug: logic
title: ロジック
---

<!-- original:
In this step, you'll add a loop and a conditional to your LitElement template. 

To repeat a part of your HTML template, you can use a JavaScript expression to iterate over an array property:

```js
${this.myArray.map(item => html`<li>${item}</li>`)}
```

Similarly, to conditionally render some part of your template, you can use a JavaScript expression to examine a boolean property:

```js
${this.myBool ? html`<p>something</p>` : html`<p>something else</p>`}
```

**Starting code**

_my-element.js_
-->

ここではテンプレートに繰り返しと条件分岐を追加します。

テンプレートの一部を繰り返すには、JavaScriptの評価式を使用して配列プロパティを反復処理します:

```js
${this.myArray.map(item => html`<li>${item}</li>`)}
```

同様に、テンプレートの一部を条件付きでレンダリングするには、JavaScriptの評価式を使用して真偽値プロパティを使います:

```js
${this.myBool ? html`<p>something</p>` : html`<p>something else</p>`}
```

**初期コード**

_my-element.js_

```js
{% include projects/try/logic/before/my-element.js %}
```

{% include project.html folder="try/logic/before" openFile="my-element.js" %}

<!-- original:
1.  **Add a boolean property and an array property to your properties getter.**

    Replace the static properties getter with the following code:

    ```js
    static get properties() {
      return {
        message: { type: String },
        myBool: { type: Boolean },
        myArray: { type: Array }
      };
    }
    ```

2.  **Initialize the boolean and array properties.**

    Replace the constructor with the following code:

    ```js
    constructor() {
      super();
      this.message = 'Hello world! From my-element';
      this.myBool = true;
      this.myArray = ['an','array','of','test','data'];
    }
    ```

3.  **Add a loop to your template.**
    
    To loop over the new `myArray` property, add the following code to your template:

    ```js
    <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
    ```

4.  **Add a conditional to your template.**

    To render conditionally based on the value of `myBool`, add the following code to your template:

    ```js
    ${this.myBool ?
      html`<p>Render some HTML if myBool is true</p>` :
      html`<p>Render some other HTML if myBool is false</p>`}
    ```

Here's the completed code for this step:
-->
1. **真偽値と配列のプロパティをpropertiesゲッターへ追加します**

    静的プロパティの取得メソッドを次のコードに置き換えます:

    ```html
    constructor() {
      super();
      this.message = 'Hello world! From my-element';
      this.myBool = true;
      this.myArray = ['an','array','of','test','data'];
    }
    ```

2. **真偽値と配列のプロパティを初期化します**

    コンストラクタを次のコードに置き換えます:

    ```html
    ${this.myBool?
      html`<p>Render some HTML if myBool is true</p>`:
      html`<p>Render some other HTML if myBool is false</p>`}
    ```

3.  **テンプレートに繰り返し処理を追加してください**
    
    新しい`myArray`プロパティをループするには、テンプレートに以下のコードを追加してください:

    ```js
    <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
    ```

4.  **テンプレートに条件を追加してください。**

    `myBool`の値に基づいて条件付きでレンダリングするには、テンプレートに次のコードを追加してください:

    ```js
    ${this.myBool ?
      html`<p>Render some HTML if myBool is true</p>` :
      html`<p>Render some other HTML if myBool is false</p>`}
    ```

このステップの完成したコードはこちらです:

_my-element.js_

```js
{% include projects/try/logic/after/my-element.js %}
```

<!-- original:
[Next: 4. Events](events)
-->
[次へ: 4. イベント](events)
