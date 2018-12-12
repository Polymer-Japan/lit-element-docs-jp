---
layout: default
---

<header class="hero" markdown="0">
{% include topnav.html %}
<div class="wrapper">
<div class="hero-title">{{ site.name }}</div>
<p class="hero-caption">{{ site.description }}</p>
<a class="hero-link link-with-arrow" href="{{ site.baseurl }}/guide/try">はじめる</a>
</div>
</header>

<section class="grey-bg">
<div class="wrapper">

<div class="alert alert-info">
<p>日本語翻訳(作業中)</p>
</div>

<div class="responsive-row center">
<div style="max-width: 600px">

## 高速で軽量なWebコンポーネント

<!-- original:
LitElement is a simple base class for creating fast, lightweight web components that work in any web page with any framework.

For rendering, LitElement uses [lit-html](https://lit-html.polymer-project.org/)–a fast HTML templating library. To build an app out of LitElement components, check out [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org/).
-->

LitElementは、どんなフレームワークのどんなWebページでも動作し、軽量で高速なWebコンポーネントを開発するためのシンプルなベースクラスです。

描画(レンダリング)には[lit-html](https://lit-html.polymer-jp.org/)(高速HTMLテンプレートライブラリ)を使います。LitElementを使ってアプリを構築するのであれば、ぜひ[PWA Starter Kit](https://pwa-starter-kit-dot-polymer-japan.appspot.com/)をチェックしてください。

</div>
</div>
</div>
</section>

<section>
<div class="wrapper">

<!-- original:
Define a component in JavaScript:
-->

Webコンポーネントの定義:

_custom-greeting.js_

```js
{% include projects/index/custom-greeting.js %}
```

<!-- original:
Include the component in your web page:
-->

Webコンポーネントの表示:

_index.html_

```html
<custom-greeting></custom-greeting>
```

{% include project.html folder="index" openFile="custom-greeting.js" %}

</div>
</section>

<section class="grey-bg">
<div class="wrapper">

## LitElement を使う理由は?

<div class="responsive-row">
<div style="flex: 1">

### 共有しやすい - Made to share

<!-- original:
Web components built with LitElement are made to share with the world and with others across your organization, no matter what libraries or frameworks they use. 
-->

LitElementで構築されたWebコンポーネントは、ライブラリやフレームワークに依存しないので、組織内や世界中で共有されるように作ることができます。

</div>
<div style="flex: 1">

### 高い相互運用性 - Interoperable

<!-- original:
LitElement follows the [web components standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so your components will work with any framework.

LitElement uses custom elements for easy inclusion in web pages, and shadow DOM for encapsulation. There’s no new abstraction on top of the web platform.
-->

LitElementは[Webコンポーネント標準](https://developer.mozilla.org/ja/docs/Web/Web_Components)に準拠しているため、コンポーネントはどのフレームワークでも動きます。

LitElementは、Webページへ簡単に埋め込める含めるカスタム要素を使って、カプセル化のためにDOMをShadow DOMとします。現状のWebプラットフォームでこれより斬新な抽象化はありません。

</div>
<div style="flex: 1">

### 速くて軽い - Fast and light

<!-- original:
Whether your end users are in emerging markets or Silicon Valley, they’ll appreciate that LitElement is extremely fast.

LitElement uses [lit-html](https://github.com/Polymer/lit-html) to define and render HTML templates. DOM updates are lightning-fast, because lit-html only re-renders the data that changes.
-->

あなたにとってのエンドユーザーがベンチャー市場であろうとシリコンバレーであろうと、LitElementが非常に高速なことが喜ばれるでしょう。

LitElementは[lit-html](https://github.com/Polymer/lit-html)を使ってHTMLテンプレートを定義して描画します。lit-htmlは変更されたデータのみを再描画するため、DOMの更新は非常に高速です。

</div>
</div>
</div>
</section>

<section>
<div class="wrapper">
<div class="responsive-row center">
<div style="max-width: 600px">

<!-- original:
LitElement is brought to you by developers on the Google Chrome team with the input of web developers at organizations big and small around the world. 
-->

LitElementは世界中の大小さまざまな組織のWebデベロッパーの情報をもとに、Google Chromeチームが開発しています。

</div>
</div>
</div>
</section>

<section>
<div class="wrapper" style="text-align: center">

## ブラウザ互換

<!-- original:
Polymer products work in all major browsers (Chrome, Firefox, IE, Edge, Safari, and Opera).
-->

LitElementは全ての主要なブラウザで動作します(Chrome, Firefox, IE, Edge, Safari, Opera)

<div>
<img width="70" height="70" src="/images/browsers/chrome_128x128.png" alt="chrome logo">
<img width="70" height="70" src="/images/browsers/firefox_128x128.png" alt="firefox logo">
<img width="70" height="70" src="/images/browsers/internet-explorer_128x128.png" alt="internet explorer logo">
<img width="70" height="70" src="/images/browsers/edge_128x128.png" alt="edge logo">
<img width="70" height="70" src="/images/browsers/safari_128x128.png" alt="safari logo">
<img width="70" height="70" src="/images/browsers/opera_128x128.png" alt="opera logo">
</div>

</div>
</section>

<section class="grey-bg">
<div class="wrapper">

## 次のステップ

<!-- original:
- [Try LitElement]({{ site.baseurl }}/try) in our live tutorial. You don’t need to install anything.
- When you’re ready to dive in, [set up LitElement locally]({{ site.baseurl }}/tools) and start building components!
-->

- [試してみる]({{ site.baseurl }}/guide/try)はオンラインで試せるチュートリアルです。インストールする必要があるものはなにもありません。
- もっと深く知りたければ、 [ローカルにセットアップ]({{ site.baseurl }}/tools) してコンポーネントを構築してください!

</div>
</section>
