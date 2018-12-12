---
layout: post
slug: try
title: 試してみる
---

{::options toc_levels="1..2" /}
* ToC
{:toc}

<!-- original:
Try LitElement in live-editable code without installing anything. Build your first component, use it in a web page, and add style with CSS. 

This tutorial has live code samples that you can edit, like this:
-->

オンラインエディタで何もインストールすることなくLitElementを試してみてください！このチュートリアルでは、はじめてのWebコンポーネントを作り、ページに組込み、CSSでスタイルを追加します。

チュートリアルでは次のような、その場で編集できるライブエディタが含まれています。

{% include project.html folder="try/create/after" openFile="my-element.js" %}

<!-- original:
Click **Preview** at any time to see your code in action. 

**If you're doing the tutorial in your local development environment, you'll need to make some changes to the code on this page.** The code samples on this page are written for the live StackBlitz editor. To work locally, see [Set up LitElement](tools). You can also [download a sample LitElement project](https://github.com/PolymerLabs/start-lit-element) to get started.
-->

**Preview**をクリックすると、いつでもコードの実行結果が表示されます。

**ローカル開発環境でチュートリアルを行っている場合は、このページのコードをいくつか変更する必要があります** このページのコードサンプルは、StackBlitzエディタ用に書かれています。 ローカルで作業するには、[ツール](tools)を参照してください。また、[サンプルプロジェクトのダウンロード](https://github.com/PolymerLabs/start-lit-element)からもはじめることができます。

<!-- original:
## 1. Create a component

In this step, you'll fill in the gaps in the starting code to create an element class with a basic HTML template.

**Starting code**
-->
## 1. コンポーネントをつくる

このステップでは、下記の穴埋めコードから基本的なHTMLテンプレートを使ったHTML要素クラスを作ります。

**穴埋めコード**

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
## 2. Import your component

Import your new component as a JavaScript module and use it in a web page.

**Starting code**
-->

## 2. コンポーネントをインポートする

作成したコンポーネントをJavaScriptモジュールとしてWebページに組み込みます。

**穴埋めコード**

_index.html_

```html
{% include projects/try/import/before/index.html %}
```

{% include project.html folder="try/import/before" openFile="index.html" %}

<!-- original:
1. **Import your component module.** 

    LitElement components are imported as JavaScript modules. **You don't need to change anything in this step if you're following the tutorial in StackBlitz**. In StackBlitz, index.ts runs automatically.

    _index.ts_

    ```js
    {% include projects/try/import/after/index.ts %}
    ```

2. **Add your new component to the page.** 

    In index.html, replace the existing `body` block with the following code:

    ```html
      <body>
        <my-element></my-element>
      </body>
    ```

If you're stuck, click **Launch Code Editor** below to see the completed code for Step 2. 
-->

1. **コンポーネントをインポート** 

    LitElementはJavaScriptモジュールとして読み込みます(Import)。 **StackBlitz上で動かす場合はここで何かする必要は何もありません**. StackBlitzではindex.tsが自動で読み込まれます。

    _index.ts_

    ```js
    {% include projects/try/import/after/index.ts %}
    ```

2. **HTML要素コンポーネントを追加** 

    index.htmlでは下記のコードで`body`タグが書き換えられます:

    ```html
      <body>
        <my-element></my-element>
      </body>
    ```

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/import/after" openFile="index.html" %}

<!-- original:
## 3. Add a property to your template

Declare a property for your component, and use the value in the component's template. LitElement components update automatically when their properties change.

**Starting code**
-->

## 3. プロパティを追加する

コンポーネントのプロパティを宣言し、コンポーネントのテンプレートに使います。LitElementは、プロパティが変更されると自動的に更新されます。

**穴埋めコード**

_my-element.js_

```js
{% include projects/try/properties/before/my-element.js %}
```

{% include project.html folder="try/properties/before" openFile="my-element.js" %}

<!-- original:
1. **Declare a property.**

    In my-element.js, replace the existing `properties` getter with the following code: 
    
    ```js
    static get properties() {
      return {
        // Property declaration
        message: { type: String }
      };
    }
    ```

2. **Initialize the property.**

    You should initialize property values in a component's constructor. 
    
    In my-element.js, replace the existing constructor with the following code:
    
    ```js
    constructor() {
      // Always call superconstructor first
      super();

      // Initialize property
      this.message='Hello world! From my-element';
    }
    ```

3. **Add the property to your template with a JavaScript expression.**

    In my-element.js, replace the existing `render` function with the following code:

    ```js
    render() {
      return html`
        <p>${this.message}</p>
      `;
    }
    ``` 

If you're stuck, click **Launch Code Editor** below to see the completed code for Step 3.

-->

1. **プロパティの宣言**

    `properties`のゲッター設定を下記のコードで置き換えてください:
    
    ```js
    static get properties() {
      return {
        // プロパティの宣言
        message: { type: String }
      };
    }
    ```

2. **プロパティの初期化**

    コンポーネントのコンストラクタではプロパティを初期化する必要があります。
    
    コンストラクタを下記のコードで置き換えてください:
    
    ```js
    constructor() {
      // 必ず最初に親クラスのコンストラクタを呼び必要があります
      super();

      // プロパティの初期化
      this.message='Hello world! From my-element';
    }
    ```

3. **JavaScript式でプロパティをテンプレートに追加**

    `render`関数を下記のコードで置き換えてください:

    ```js
    render() {
      return html`
        <p>${this.message}</p>
      `;
    }
    ``` 

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/properties/after" openFile="my-element.js" %}

<!-- original:
## 4. Add loops and conditionals to your template

Modify your template to add a loop and a conditional.

**Starting code**
-->

## 4. 繰り返しや条件分岐を追加する

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

If you're stuck, click **Launch Code Editor** below to see the completed code for Step 4.

{% include project.html folder="try/logic/after" openFile="my-element.js" %}
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

<!-- original:
## 5. Add an event handler to your template

Use lit-html's `@event` annotation to add an event listener to an element inside a template. 

**Starting code**
-->

## 5. イベントハンドラを追加する

lit-htmlでは`@イベント名`という構文で、テンプレート内の要素にイベントリスナーを追加します。

**穴埋めコード**

_my-element.js_

```js
{% include projects/try/events/before/my-element.js %}
```

{% include project.html folder="try/events/before" openFile="my-element.js" %}

<!-- original:
1. **Add an event listener.**

    In my-element.js, in your template, replace the existing HTML `button` element with the following code:

    ```html
    <button @click="${(event) => this.clickHandler(event)}">Click</button>
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

{% include project.html folder="try/events/after" openFile="my-element.js" %}
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

<!-- original:
## 6. Style your template

Style your element with CSS by including a `style` block in its template. These styles are encapsulated; they will only apply to your component. 

**Starting code**
-->

## 6. スタイリングする

CSSでスタイルを追加するにはテンプレートの中に`style`タグを含めます。これらのスタイルはカプセル化されるため、コンポーネントのテンプレート内にのみ適用されます。

**穴埋めコード**

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

{% include project.html folder="try/style/after" openFile="my-element.js" %}
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

<!-- original:
### Next steps

Congratulations - you've made your first element with LitElement. Next, see the Tools documentation and [Set up LitElement locally](tools). 
-->

### 次のステップ

おめでとうございます! あなたはLitElementではじめてのコンポーネントをつくることができました。次は[ローカルでLitElementを使う](tools)に進んでください。
