---
layout: try
slug: create
title: コンポーネントをつくる
---

<!-- original:
In this step, you'll fill in the gaps in the starting code to create an element class with a basic HTML template.

**Starting code**

_my-element.js_
-->
このステップでは、下記の初期コードから基本的なHTMLテンプレートを使ったHTML要素クラスを作ります。

**初期コード**

_my-element.js_

```js
{% include projects/try/create/before/my-element.js %}
```

<!-- original:
Click **Launch Code Editor** to edit the starting code. When you're ready to see your code in action, click **Preview**.
-->

**コードエディタを起動** をクリックして編集してください。編集結果をみるには **Preview** をクリックしてください。

{% include project.html folder="try/create/before" openFile="my-element.js" %}

<!-- original:
1.  **Import the `LitElement` base class and `html` helper function.**

    In my-element.js, replace the existing `import` statement with the following code:

    ```js
    import { LitElement, html } from '@polymer/lit-element'; 
    ```
    
2.  **Create a class for your element that extends the LitElement base class.**

    In my-element.js, replace the existing class definition with the following code:

    ```js
    class MyElement extends LitElement {
      render() {
        return html`
          <p>Hello world! From my-element</p>
        `;
      }
    }    
    ```

    The `render` function defines your component's template. You must implement `render` for every LitElement component.  

3.  **Register the new element with the browser.**

    In my-element.js, replace the existing call to `customElements.define()` with the following code:

    ```js
    customElements.define('my-element', MyElement);
    ```

If you're stuck, click **Launch Code Editor** below to see the completed code for Step 1.
-->

1.  **`LitElement`のベースクラスと`html`ヘルパー関数をインポート**

    `import`文を下記のコードで置き換えてください:

    ```js
    import { LitElement, html } from '@polymer/lit-element';
    ```

2.  **LitElementを継承した独自のHTML要素クラスをつくる**

    `MyElement`のクラス宣言文を下記のコードで置き換えてください:

    ```js
    class MyElement extends LitElement {
      render() {
        return html`
          <p>Hello world! From my-element</p>
        `;
      }
    }
    ```

    `render`関数はコンポーネントのテンプレートとなります。すべてのLitElementコンポーネントにおいて`render`が実装されている必要があります。

3.  **HTML要素クラスをブラウザに登録する**

    `customElements.define()`を下記のコードで置き換えてください:

    ```js
    customElements.define('my-element', MyElement);
    ```

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/create/after" openFile="my-element.js" %}

<!-- original:
[Next: 2. Import your component](import)
-->
[次へ: 2. コンポーネントをインポートする](import)
