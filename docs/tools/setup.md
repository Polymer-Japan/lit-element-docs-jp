---
layout: post
section: tools
topic: setup
pageid: setup
---

<!-- original:
**On this page:**

* [Install pre-requisites](#install)
* [Create a new LitElement project](#new)
* [Serve your project locally](#serve)
* [Build your project for production](#build)
-->

**ここでは:**

* [前提条件をインストールする](#install)
* [新しいLitElementプロジェクトを作る](#new)
* [ローカルでサーバを起動する](#serve)
* [プロダクション用のプロジェクトを構築する](#build)

<a id="install">

### [提条件をインストールする](#install)

<!-- original:
To work locally with lit-element, you'll first need to install Git, npm and Node.js, and the Polymer CLI. 

1.  [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2.  [Install npm and Node.js](https://nodejs.org/en/).

3.  Update npm:
    
    ```bash
    npm install -g npm@latest
    ```

4.  Install Polymer CLI: 

    ```bash
    npm install -g polymer-cli@latest
    ```
-->

lit-elementでローカルで作業するには、まずGit、npmとNode.js、Polymer CLIをインストールする必要があります。

1.  [Gitのインストール](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2.  [npmとNode.jsのインストール](https://nodejs.org/en/).

3.  最新のnpmへ更新:
    
    ```bash
    npm install -g npm@latest
    ```

4.  Polymer CLIのインストール: 

    ```bash
    npm install -g polymer-cli@latest
    ```

<a id="new">

### [新しいLitElementプロジェクトを作る](#new)

```bash 
mkdir myproject
cd myproject
npm init -y
npm install --save @polymer/lit-element
npm install --save @webcomponents/webcomponentsjs
```

<a id="serve">

### [ローカルサーバ](#serve)

<!-- original:
Create a polymer.json config file, and serve your project:
-->

polymer.json設定ファイルを作成し、プロジェクトに提供する:

```bash
cd myproject
npm install
echo '{
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
}' >polymer.json
polymer serve
```

<!-- original:
See the [Developer tools documentation](develop) for more information.
-->

詳細については、[開発ツールのドキュメント](develop)を参照してください。

<a id="build">

## [ビルド](#build)

<!-- original:
Build your project, and serve the build locally:

```bash
cd myproject
polymer build
polymer serve build/mybuild
```

For more information on building LitElement projects see [Build for production](build).
-->

プロジェクトをビルドし、ローカルでビルドします。:

```bash
cd myproject
polymer build
polymer serve build/mybuild
```

LitElementプロジェクトを構築する方法の詳細については、[プロダクション向けビルド](build)。
