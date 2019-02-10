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
    import { LitElement, html } from 'lit-element';
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

Here's the completed code for this step:
-->

1.  **`LitElement`のベースクラスと`html`ヘルパー関数をインポート**

    `import`文を下記のコードで置き換えてください:

    ```js
    import { LitElement, html } from 'lit-element';
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

このステップの完成したコードはこちらです:

_my-element.js_

```js
{% include projects/try/create/before/my-element.js %}
```

<!-- original:
Your code sample should be working now. LitElement components are added to a page with simple HTML tags, like this:

```html
<my-element></my-element>
```

See [Use a LitElement component](/use) for more information about local setup.

[Next: 2. Properties](properties)
-->

あなたのコードサンプルは動作しているはずです。 LitElementコンポーネントは、このように単純なHTMLタグを使ってページに追加されます:

```html
<my-element></my-element>
```

ローカルで開発するための設定については、[LitElementコンポーネントを使用する](/useを参照してください。

[次へ: 2. プロパティ](properties)
