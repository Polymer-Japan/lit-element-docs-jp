---
layout: post
section: try
topic: import
---

<!-- original:
Import your new component as a JavaScript module and use it in a web page.

**Starting code**
-->

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

    If you're working locally, see [Import a LitElement component](/docs/create/#import).

2. **Add your new component to the page.** 

    In index.html, replace the existing `body` block with the following code:

    ```html
      <body>
        <my-element></my-element>
      </body>
    ```

If you're stuck, click **Launch Code Editor** below to see the completed code at work. 
-->

1. **コンポーネントをインポート** 

    LitElementはJavaScriptモジュールとして読み込みます(Import)。 **StackBlitz上で動かす場合はここで何かする必要は何もありません**. StackBlitzではindex.tsが自動で読み込まれます。

    _index.ts_

    ```js
    {% include projects/try/import/after/index.ts %}
    ```

    もしローカルで動かすのであれば、[LitElementをインポートする](/docs/create/#import)を参照してください。

2. **HTML要素コンポーネントを追加** 

    index.htmlでは下記のコードで`body`タグが書き換えられます:

    ```html
      <body>
        <my-element></my-element>
      </body>
    ```

もしうまくいかなかったら、下記の**コードエディタを起動**をクリックして、完成したコードを確認してください。

{% include project.html folder="try/import/after" openFile="index.html" %}

{% include prevnext.html prevurl="create" prevtitle="1. つくる" nexturl="properties" nexttitle="3. プロパティ" %}
