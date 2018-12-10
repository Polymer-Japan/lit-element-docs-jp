---
layout: post
section: try
topic: logic
---

<!-- original:
Handling logic (for example, loops and conditionals) in your LitElement templates is easy. No special annotations, just plain JavaScript expressions. 

Modify your template to add a loop and a conditional.

**Starting code**
-->

LitElementのテンプレートでロジック(例えば、繰り返しや条件分岐)の処理は簡単です。特別な構文はなく、JavaScriptの式を書くだけです。

テンプレートに繰り返しと条件分岐を追加します。

**穴埋めコード**

_my-element.js_

```js
{% include projects/try/logic/before/my-element.js %}
```

{% include project.html folder="try/logic/before" openFile="my-element.js" %}

<!-- original:
1. **Add a loop to your template.**

    We've added an array property, `myArray`, to my-element.js. To loop over `myArray`, add the following code to your template:

    ```html
    <ul>
      ${this.myArray.map(i => html`<li>${i}</li>`)}
    </ul>
    ```

2. **Add a conditional to your template.**

    We've added a boolean property, `myBool`, to my-element.js. To render conditionally on `myBool`, add the following code to your template:

    ```html
    ${this.myBool?
      html`<p>Render some HTML if myBool is true</p>`:
      html`<p>Render some other HTML if myBool is false</p>`}
    ```

If you're stuck, click **Launch Code Editor** below to see the completed code at work.
-->

1. **繰り返しを追加**

    `myArray`という配列が既にプロパティで宣言されているので、その繰り返し処理を行うには下記のコードを追加してください:

    ```html
    <ul>
      ${this.myArray.map(i => html`<li>${i}</li>`)}
    </ul>
    ```

2. **条件分岐を追加**

    `myBool`という真偽値(boolan)が既にプロパティで宣言されているので、そこで条件分岐をするには下記のコードを追加してください:

    ```html
    ${this.myBool?
      html`<p>Render some HTML if myBool is true</p>`:
      html`<p>Render some other HTML if myBool is false</p>`}
    ```

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/logic/after" openFile="my-element.js" %}

{% include prevnext.html prevurl="properties" prevtitle="3. プロパティ" nexturl="events" nexttitle="5. イベント" %}
