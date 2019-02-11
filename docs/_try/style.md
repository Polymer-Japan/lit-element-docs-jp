---
layout: try
slug: style
title: スタイリング
---

<!-- original:
Style your component with CSS by defining a static `styles` getter in your class.

**Starting code**

_my-element.js_
-->

クラスで静的な`styles`ゲッターを定義し、CSSでコンポーネントをスタイリングしてください。

**初期コード**

_my-element.js_

```js
{% include projects/try/style/before/my-element.js %}
```

{% include project.html folder="try/style/before" openFile="my-element.js" %}

<!-- original:
1.  **Import the `css` helper function.**

    In my-element.js, replace the `import` statement with the following code:

    ```js
    import { LitElement, html, css } from 'lit-element';
    ```

2.  **Define your styles.**

    To define your styles, add a static `styles` getter to your class:

    ```js
    static get styles() {
      return css`
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
      `;
    }
    ```

3. **Apply your styles.**

    Use `myBool` to apply the styles conditionally. Add the following paragraph to your template:

    ```html
    <p class="${this.myBool ? 'red' : 'blue' }">styled paragraph</p>
    ```

Here's the completed code for this step:
-->
1.  **`css`ヘルパー関数をインポート**

    my-element.jsで、`import`文を次のコードで置き換えます:

    ```js
    import { LitElement, html, css } from 'lit-element';
    ```

2.  **styleを宣言**

    スタイルを定義するには、クラスに静的な `styles`ゲッターを追加します:

    ```html
    static get styles() {
      return css`
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
      `;
    }
    ```

3. **styleを適用**

    `myBool`プロパティの真偽値を使ってスタイルを適用するには下記のコードを追加してください:

    ```html
    <p class="${this.myBool ? 'red' : 'blue' }">styled paragraph</p>
    ```

このステップの完成したコードはこちらです:

_my-element.js_

```js
{% include projects/try/style/after/my-element.js %}
```

おめでとうございます! あなたはじめてのLitElementコンポーネントをつくることができました。次は[使ってみる](/guide/start)に進んでローカル開発をセットアップしてください。
