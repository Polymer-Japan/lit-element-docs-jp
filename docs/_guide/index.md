---
layout: guide
title: はじめに
---

{::options toc_levels="1..3" /}
* ToC
{:toc}

<!-- original:
## What is LitElement?

LitElement is a simple base class for creating fast, lightweight web components that work in any web page with any framework.

LitElement uses [lit-html](https://lit-html.polymer-project.org/) to render into shadow DOM, and adds API to manage properties and attributes. Properties are observed by default, and elements update asynchronously when their properties change.

To build an app out of LitElement components, check out [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org/).

## Quick start

Install:

```bash
npm install --save lit-element
```

Import:

```js
import { LitElement, html } from 'lit-element';
```

[Download a sample LitElement project](https://github.com/PolymerLabs/start-lit-element).

## Next steps

* [Getting Started](/guide/start): Set up LitElement and create a component.
* [Templates](/guide/templates): Write templates with lit-html syntax.
* [Properties](/guide/properties): Manage properties and attributes.
* [Lifecycle](/guide/lifecycle): Work with the LitElement lifecycle API.

-->
## LitElementとは？

LitElementはどんなフレームワークのどんなWebページでも動作し、軽量で高速なWebコンポーネントを開発するためのシンプルなベースクラスです。

描画(レンダリング)に[lit-html](https://lit-html.polymer-jp.org/)(高速HTMLテンプレートライブラリ)を使い、プロパティとHTML属性を管理するAPIを追加します。プロパティの変更は監視され、要素が変更されると非同期で描画が更新されます。

アプリを構築するのであれば、ぜひ[PWA Starter Kit](https://pwa-starter-kit.polymer-jp.org/)をチェックしてください。

## クイックスタート

インストール:

```bash
npm install --save @polymer/lit-element
```

インポート:

```js
import { LitElement, html } from '@polymer/lit-element';
```

[LitElementのサンプルプロジェクト](https://github.com/PolymerLabs/start-lit-element)

## 次のステップへ

* [使ってみる](/guide/start): LitElementでコンポーネントを作成します。
* [テンプレート](/guide/templates): lit-htmlの構文でテンプレートを作成します。
* [プロパティ](/guide/properties): プロパティと属性を管理します。
* [ライフサイクル](/guide/lifecycle): ライフサイクルAPIを理解します。

