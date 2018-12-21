---
layout: try
slug: style
title: スタイリング
---

<!-- original:
Style your element with CSS by including a `style` block in its template. These styles are encapsulated; they will only apply to your component. 

**Starting code**

_my-element.js_
-->

CSSでスタイルを追加するにはテンプレートの中に`style`タグを含めます。これらのスタイルはカプセル化されるため、コンポーネントのテンプレート内にのみ適用されます。

**初期コード**

_my-element.js_

```js
{% include projects/try/style/before/my-element.js %}
```

{% include project.html folder="try/style/before" openFile="my-element.js" %}

<!-- original:
1.  **Define your styles.**

    To define your styles, add the following code to your template:

    ```html
    <style>
      p {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    </style>
    ```

2. **Apply your styles.**

    Use `myBool` to apply the styles conditionally. Add the following paragraph to your template:

    ```html
    <p class="${this.myBool?'red':'blue'}">styled paragraph</p>
    ```

If you're stuck, click **Launch Code Editor** below to see the completed code for Step 6.
-->
1.  **styleタグを追加**

    スタイルを定義するには下記のコードを追加してください:

    ```html
    <style>
      p {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    </style>
    ```

2. **styleを適用**

    `myBool`プロパティの真偽値を使ってスタイルを適用するには下記のコードを追加してください:

    ```html
    <p class="${this.myBool?'red':'blue'}">styled paragraph</p>
    ```

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/style/after" openFile="my-element.js" %}

おめでとうございます! あなたはLitElementではじめてのコンポーネントをつくることができました。次は[使ってみる](/guide/start)に進んでローカル開発をセットアップします。
