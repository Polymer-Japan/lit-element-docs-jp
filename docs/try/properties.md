---
layout: post
section: try
topic: properties
---

<!-- original:
Declare a property for your component, and use the value in the component's template. LitElement components update automatically when their properties change.

**Starting code**
-->

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

If you're stuck, click **Launch Code Editor** below to see the completed code at work.
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

{% include prevnext.html prevurl="import" prevtitle="2. インポート" nexturl="logic" nexttitle="4. ロジック" %}
