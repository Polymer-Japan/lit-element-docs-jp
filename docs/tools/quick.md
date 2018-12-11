---
layout: post
section: tools
topic: quick
pageid: quick
---

<!-- original:
LitElement's pre-requisites are [Node.js](https://nodejs.org/en/download/), [npm](https://docs.npmjs.com/), and [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli).

Install Polymer CLI:

```
npm install -g polymer-cli
```

Create a new LitElement project:

```bash 
mkdir myproject
cd myproject
npm init -y
npm install --save @polymer/lit-element
npm install --save @webcomponents/webcomponentsjs
```

Create a polymer.json config file, and serve your project:

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

Build your project, and serve the build locally:

```bash
cd myproject
polymer build
polymer serve build/mybuild
```
-->

LitElementの前提条件は[Node.js](https://nodejs.org/en/download/)、[npm](https://docs.npmjs.com/)、[Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)。

Polymer CLIをインストールする:

```
npm install -g polymer-cli
```

新しいLitElementプロジェクトを作成する:

```bash 
mkdir myproject
cd myproject
npm init -y
npm install --save @polymer/lit-element
npm install --save @webcomponents/webcomponentsjs
```

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

プロジェクトをビルドし、ローカルでビルドします。:

```bash
cd myproject
polymer build
polymer serve build/mybuild
```
