---
layout: default
---

<header class="hero" markdown="0">
{% include topnav.html %}
<div class="wrapper">
<div class="hero-title">{{ site.name }}</div>
<p class="hero-caption">{{ site.description }}</p>
<a class="hero-link link-with-arrow" href="{{ site.baseurl }}/guide">はじめる</a>
</div>
</header>

<section id="section-snippet">
<div class="wrapper">
<!-- original:
<h1 class="title">
Easily Create Fast, Lightweight Web Components
</h1>
-->
<h1 class="title">
簡単につくれる高速で軽量なWebコンポーネント
</h1>

<div class="responsive-row">

<div class="fixed-width-caption">
<!-- original:
<h3 class="description">LitElement makes it easy to define Web Components – ideal for sharing elements across your organization or building a UI design system.</h3>
<h3 class="description">Use your components anywhere you use HTML: in your main document, a CMS, Markdown, or a framework like React or Vue.</h3>
-->
<h3 class="description">LitElementを使用すると、Webコンポーネントを簡単に定義できます。組織全体でエレメントを共有したり、UIデザインシステムを構築したりするのに理想的です。</h3>
<h3 class="description">ドキュメントやCMS、MarkdownまたはReactやVueなどのフレームワークなど、HTMLを使っているどこにでもコンポーネントを使っていきましょう。</h3>
</div>


<div>
```js
{% include projects/index-typescript/simple-greeting.ts %}
```
```html
<simple-greeting name="Everyone"></simple-greeting>
```
</div>
</div>

<div class="inline-action-buttons">
{% include project.html label="コードエディタを起動 (TypeScript)" folder="index-typescript" openFile="simple-greeting.ts" %}
{% include project.html label="コードエディタを起動 (JavaScript)" folder="index" openFile="simple-greeting.js" %}
</div>

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
<h2 class="caption">Delightfully declarative</h2>

LitElement's simple, familiar development model makes it easier than ever to build Web Components.

Express your UI declaratively, as a function of state. No need to learn a custom templating language – you can use the full power of JavaScript in your templates. Elements update automatically when their properties change.
-->
<h2 class="caption">楽しく宣言的に</h2>

LitElementのシンプルで馴染みやすい開発モデルにより、Webコンポーネントをこれまで以上に簡単に構築できます。

ステート(状態)を表す関数として宣言的にUIを表現してください。特別なテンプレート言語を学ぶ必要はありません 。 あなたはテンプレートにおいてJavaScriptを最大限使うことができます。要素は、プロパティが変更されると自動的に更新されます。

</div>
<div style="flex: 1">

<!-- original:
<h2 class="caption">Fast and light</h2>

Whether your end users are in emerging markets or Silicon Valley, they’ll appreciate that LitElement is extremely fast.

LitElement uses [lit-html](https://github.com/Polymer/lit-html) to define and render HTML templates. DOM updates are lightning-fast, because lit-html only re-renders the dynamic parts of your UI – no diffing required.
-->
<h2 class="caption">速くて軽量</h2>

あなたにとってのエンドユーザーがベンチャー市場であろうとシリコンバレーであろうと、LitElementが非常に高速なことが喜ばれるでしょう。

LitElementは[lit-html](https://github.com/Polymer/lit-html)を使ってHTMLテンプレートを定義して描画します。lit-htmlは変更されたデータのみを再描画するため、DOMの更新は非常に高速です。

</div>
<div style="flex: 1">

<!-- original:
<h2 class="caption">Seamlessly interoperable</h2>

LitElement follows the [Web Components standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so your components will work with any framework.

LitElement uses Custom Elements for easy inclusion in web pages, and Shadow DOM for encapsulation. There’s no new abstraction on top of the web platform.
-->
<h2 class="caption">シームレスに相互運用可能</h2>

LitElementは[Webコンポーネント標準](https://developer.mozilla.org/ja/docs/Web/Web_Components)に準拠しているため、コンポーネントはどのフレームワークでも動きます。

LitElementは、Webページへ簡単に埋め込める含めるカスタム要素を使って、カプセル化のためにDOMをShadow DOMとします。現状のWebプラットフォームでこれより斬新な抽象化はありません。

</div>
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
<p>[試してみる]({{ site.baseurl }}/try)はオンラインで試せるチュートリアルです。インストールする必要があるものはなにもありません。</p>
</div>

<div style="flex:1">
<h2 class="caption">2.</h2>
<p>もっと深く知りたければ、 [ローカルにセットアップ]({{ site.baseurl }}/guide/start) してコンポーネントを構築してください!</p>
</div>

<div style="flex:1">
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
