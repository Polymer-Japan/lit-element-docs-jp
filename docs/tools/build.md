---
layout: post
section: tools
topic: build
pageid: build
---

<!-- original:
**On this page:** 

* [JavaScript import statements and package names](#import)
* [Build with Polymer CLI](#build)
-->

**ここでは:** 

* [JavaScriptのインポート文とパッケージ名](#import)
* [Polymer CLIでビルドする](#build)

<a id="import">

### [JavaScriptのインポート文とパッケージ名](#import)

<!-- original:
At the time of writing, web browsers can't load JavaScript modules by their package names. Since the LitElement library uses package names to import dependencies, you must use a build step to transform package names to URLs so that web browsers can find the files.

For example, the following import statement must be transformed to use a URL:
-->

執筆時点では、WebブラウザはJavaScriptモジュールをパッケージ名で読み込むことはできません。 LitElementライブラリはパッケージ名を使用して依存関係をインポートするので、ビルドステップを使用してパッケージ名をURLに変換して、Webブラウザがファイルを見つけることができるようにする必要があります。

たとえば、次のimport文をURLを使用するように変換する必要があります:

```js
import { LitElement, html } from '@polymer/lit-element';
```

<!-- original:
The transformed import statement might look something like this:
-->

変換されたimport文は次のようになります:

```js
import { LitElement, html } from '../node_modules/@polymer/lit-element/lit-element.js';
```

<!-- original:
If you're working with Polymer CLI, you can configure `polymer serve` and `polymer build` to take care of this transform for you. 
-->

Polymer CLIを使用している場合、この変換を世話するために `polymer serve`と` polymer build`を設定することができます。

#### パッケージ名をURLに変換するようにPolymer CLIを設定する

<!-- original:
Create a JSON configuration file called polymer.json in your top-level project folder. Set the following properties in polymer.json:
-->

最上位のプロジェクトフォルダにpolymer.jsonというJSON設定ファイルを作成します。 polymer.jsonで次のプロパティを設定する:

|**Property**|**Value**|
|`npm`|`true`|
|`moduleResolution`|`"node"`|

<!-- original:
For example:
-->

サンプル:

_polymer.json_

```json
{
  "npm": true,
  "moduleResolution": "node",
  "entrypoint": "src/index.html",
  "shell": "src/my-project.js"
}
```

<a id="polymerbuild">

### [Polymer CLIでビルドする](#polymerbuild)

<!-- original:
1.  Configure Polymer CLI to build your project. 

    Add a `builds` property to polymer.json. For example:

    ```json
    "builds": [{
      "name": "mybuild",
      "bundle": true,
      "js": {
        "minify": true
      }
    }]
    ```

    _polymer.json_: Before

    ```json
    {
      "npm": true,
      "moduleResolution": "node",
      "entrypoint": "src/index.html",
      "shell": "src/my-project.js",
    }
    ```

    _polymer.json_: After

    ```json
    {
      "npm": true,
      "moduleResolution": "node",
      "entrypoint": "src/index.html",
      "shell": "src/my-project.js",
      "extraDependencies": [
        "node_modules/@webcomponents/webcomponentsjs/**"
      ],
      "builds": [{
        "name": "mybuild",
        "bundle": true,
        "js": {
          "minify": true
        }
      }]
    }
    ```

2.  From your top-level project folder, install npm components if you haven't already done so. Then, run `polymer build`:

    ```bash
    cd my-project
    npm install
    polymer build
    ```

    Polymer CLI builds your project. It adds a `build` folder to your top-level project folder, with sub-folders for each build you've configured. For example:

    _Project folder structure_: Before

    ```bash
    my-project/
      node_modules/
        @polymer/
          ...
        @webcomponents/
          ...
      src/
        index.html
        my-project.js
      package.json
      polymer.json
    ```

    _Project folder structure_: After

    ```bash
    my-project/
      node_modules/
        @polymer/
          ...
        @webcomponents/
          ...
      src/
        index.html
        my-project.js
      build/
        mybuild/
          node_modules/
            @polymer/
              ...
            @webcomponents/
              ...
          src/
            index.html
            my-project.js
        polymer.json
      package.json
      polymer.json
    ```

3.  Serve the built project locally.

    From your top-level project folder, run `polymer serve build/buildname` and open the `applications` URL. For example: 

    ```
    ~/my-project > polymer serve build/mybuild
    info: [cli.command.serve] Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/mybuild/
    ```

    To view the served project in the example above, open http://127.0.0.1:8081.
-->

1.  プロジェクトを構築するためにPolymer CLIを設定します。

    polymer.jsonに `builds`プロパティを追加してください。例えば:

    ```json
    "builds": [{
      "name": "mybuild",
      "bundle": true,
      "js": {
        "minify": true
      }
    }]
    ```

    _polymer.json_: 編集前

    ```json
    {
      "npm": true,
      "moduleResolution": "node",
      "entrypoint": "src/index.html",
      "shell": "src/my-project.js",
    }
    ```

    _polymer.json_: 編集後

    ```json
    {
      "npm": true,
      "moduleResolution": "node",
      "entrypoint": "src/index.html",
      "shell": "src/my-project.js",
      "extraDependencies": [
        "node_modules/@webcomponents/webcomponentsjs/**"
      ],
      "builds": [{
        "name": "mybuild",
        "bundle": true,
        "js": {
          "minify": true
        }
      }]
    }
    ```

2.  トップレベルのプロジェクトフォルダから、npmコンポーネントをまだインストールしていない場合はインストールします。次に`polymer build`を実行します:

    ```bash
    cd my-project
    npm install
    polymer build
    ```

    Polymer CLIによりプロジェクトが構築されます。これは、最上位のプロジェクトフォルダに `build`フォルダを追加し、あなたが設定したビルドごとにサブフォルダを追加します。例えば:

    _Project folder structure_: 実行前

    ```bash
    my-project/
      node_modules/
        @polymer/
          ...
        @webcomponents/
          ...
      src/
        index.html
        my-project.js
      package.json
      polymer.json
    ```

    _Project folder structure_: 実行後

    ```bash
    my-project/
      node_modules/
        @polymer/
          ...
        @webcomponents/
          ...
      src/
        index.html
        my-project.js
      build/
        mybuild/
          node_modules/
            @polymer/
              ...
            @webcomponents/
              ...
          src/
            index.html
            my-project.js
        polymer.json
      package.json
      polymer.json
    ```

3.  ビルドされたプロジェクトをローカルに提供する。

    最上位のプロジェクトフォルダから `polymer serve build / buildname`を実行し、` applications` URLを開きます。例えば: 

    ```
    ~/my-project > polymer serve build/mybuild
    info: [cli.command.serve] Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/mybuild/
    ```

    上記の例で提供されたプロジェクトを表示するには、http://127.0.0.1:8081 を開きます。
