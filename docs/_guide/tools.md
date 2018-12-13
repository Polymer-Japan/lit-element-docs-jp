---
layout: post
title: ツール
slug: tools
---

{::options toc_levels="1..3" /}
* ToC
{:toc}

## ローカル環境で使う

### 必要なライブラリをインストールする

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

Read on to create a new LitElement project from scratch, or if you prefer, you can [download a sample LitElement project](https://github.com/PolymerLabs/start-lit-element).
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

LitElementを使ったプロジェクト一からを作成する場合は、以下の手順に沿ってください。必要に応じて[サンプルのLitElementプロジェクトをダウンロード](https://github.com/PolymerLabs/start-lit-element)することもできます。

### 新しいLitElementプロジェクトを作る

```bash 
mkdir myproject
cd myproject
npm init -y
npm install --save @polymer/lit-element
npm install --save @webcomponents/webcomponentsjs
```

### ローカルサーバ

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

### 本番環境向けのビルド

<!-- original:
Build your project, and serve the build locally:

```bash
cd myproject
polymer build
polymer serve build/mybuild
```
-->

プロジェクトをビルドし、ローカルでビルドします。:

```bash
cd myproject
polymer build
polymer serve build/mybuild
```
