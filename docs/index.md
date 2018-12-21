---
layout: default
---

<header class="hero" markdown="0">
{% include topnav.html %}
<div class="wrapper">
<div class="hero-title">{{ site.name }}</div>
<p class="hero-caption">{{ site.description }}</p>
<a class="hero-link link-with-arrow" href="{{ site.baseurl }}/guide/">はじめる</a>
</div>
</header>

<section>
<div class="wrapper">
<h1 class="title">
LitElementについて
</h1>

<div class="responsive-row">

<div style="flex:1;">
<!-- original:
<h2>
About
</h2>
<p>
LitElement is a simple base class for creating fast, lightweight web components that work in any web page with any framework.
</p>
-->
<h2>
高速で軽量なWebコンポーネント
</h2>
<p>
LitElementは、どんなフレームワークのどんなWebページでも動作し、軽量で高速なWebコンポーネントを開発するためのシンプルなベースクラスです。
</p>
</div>

<div style="flex:1;">
<!-- original:
<h2>
Using lit-html
</h2>
<p>
For rendering, LitElement uses [lit-html](https://lit-html.polymer-project.org/)—a fast HTML templating library. To build an app out of LitElement components, check out [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org/).
</p>
-->
<h2>
lit-htmlを使う
</h2>
<p>
For rendering, LitElement uses [lit-html](https://lit-html.polymer-project.org/)—a fast HTML templating library. To build an app out of LitElement components, check out [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org/).
</p>
</div>

<div style="flex:1;">
<!-- original:
<h2>
Who are we?
</h2>
<p>
LitElement is brought to you by developers on the Google Chrome team with the input of web developers at organizations big and small around the world.
</p>
-->
<h2>
開発しているのは
</h2>
<p>
LitElementは世界中の大小さまざまな組織のウェブデベロッパーからの情報をもとに、Google Chromeチームの開発者によってあなたに届けられます。
</p>
</div>

</div>
</div>
</section>

<section>
<div class="wrapper">

<!-- original:
<h1 class="title">
Get started
</h1>

<h2>
Define a component in JavaScript:
</h2>
-->
<h1 class="title">
はじめる
</h1>

<h2>
Webコンポーネントの定義:
</h2>

<h3 style="margin: 12px 0 0 0;">
custom-greeting.js
</h3>

```js
{% include projects/index/custom-greeting.js %}
```

<!-- original:
<h2 style="margin-top: 40px;">Include the component in your web page:</h2>
-->
<h2 style="margin-top: 40px;">Webコンポーネントをインポート:</h2>

<h3 style="margin: 12px 0 0 0;">
index.html
</h3>

```html
<custom-greeting></custom-greeting>
```

{% include project.html folder="index" openFile="custom-greeting.js" %}

</div>
</section>

<section>
<div class="wrapper">

<!-- original:
<h1 class="title">Why use LitElement?</h1>
-->
<h1 class="title">LitElement を使う理由は?</h1>

<div class="responsive-row">
<div style="flex: 1">

<!-- original:
<h2 class="caption">Made to share</h2>

Web components built with LitElement are made to share with the world and with others across your organization, no matter what libraries or frameworks they use.
-->

<h2 class="caption">共有しやすく - Made to share</h2>

LitElementで構築されたWebコンポーネントは、ライブラリやフレームワークに依存しないので、組織内や世界中で共有されるように作ることができます。

</div>
<div style="flex: 1">

<!-- original:
<h2 class="caption">Interoperable</h2>
-->
<h2 class="caption">高い相互運用性 - Interoperable</h2>

<!-- original:
LitElement follows the [web components standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so your components will work with any framework.

LitElement uses custom elements for easy inclusion in web pages, and shadow DOM for encapsulation. There’s no new abstraction on top of the web platform.
-->

LitElementは[Webコンポーネント標準](https://developer.mozilla.org/ja/docs/Web/Web_Components)に準拠しているため、コンポーネントはどのフレームワークでも動きます。

LitElementは、Webページへ簡単に埋め込める含めるカスタム要素を使って、カプセル化のためにDOMをShadow DOMとします。現状のWebプラットフォームでこれより斬新な抽象化はありません。

</div>
<div style="flex: 1">

<!-- original:
<h2 class="caption">Fast and light</h2>
-->
<h2 class="caption">速くて軽い - Fast and light</h2>

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

<!-- original:
<h1 class="title">Browser Compatibility</h1>
<h2 class="description">LitElement works in all major browsers (Chrome, Firefox, IE, Edge, Safari, and Opera). </h2>
-->
<h1 class="title">ブラウザ互換</h1>
<h2 class="description">LitElementは全ての主要なブラウザで動作します(Chrome, Firefox, IE, Edge, Safari, Opera)</h2>
<div id="browser-thumbnails" style="margin-bottom: 20px;">
<img width="56" width="56" src="{{ site.baseurl }}/images/browsers/chrome_128x128.png" alt="chrome logo">
<img width="56" width="56" src="{{ site.baseurl }}/images/browsers/firefox_128x128.png" alt="firefox logo">
<img width="56" width="56" src="{{ site.baseurl }}/images/browsers/internet-explorer_128x128.png" alt="internet explorer logo">
<img width="56" width="56" src="{{ site.baseurl }}/images/browsers/edge_128x128.png" alt="edge logo">
<img width="56" width="56" src="{{ site.baseurl }}/images/browsers/safari_128x128.png" alt="safari logo">
<img width="56" width="56" src="{{ site.baseurl }}/images/browsers/opera_128x128.png" alt="opera logo">
</div>

</div>
</section>

<section style="margin-bottom: 60px;">
<div class="wrapper">

<!-- original:
<h1 class="title">Next Steps</h1>
-->
<h1 class="title">次のステップ</h1>

<div class="responsive-row">

<!-- original:
<div style="flex:1">
<h2 class="caption">One.</h2>
<p>[Try LitElement]({{ site.baseurl }}/try) in our live tutorial. You don’t need to install anything.</p>
</div>

<div style="flex:1">
<h2 class="caption">Two.</h2>
<p>When you’re ready to dive in, [set up LitElement locally]({{ site.baseurl }}/guide/start) and start building components!</p>
</div>
-->
<div style="flex:1">
<h2 class="caption">1.</h2>
<p>[試してみる]({{ site.baseurl }}/guide/try)はオンラインで試せるチュートリアルです。インストールする必要があるものはなにもありません。</p>
</div>

<div style="flex:1">
<h2 class="caption">2.</h2>
<p>もっと深く知りたければ、 [ローカルにセットアップ]({{ site.baseurl }}/tools) してコンポーネントを構築してください!</p>
</div>

<div style="flex:1">
</div>

</div>
</div>
</section>
