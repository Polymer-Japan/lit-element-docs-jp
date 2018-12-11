---
layout: post
section: docs
topic: lifecycle
subtopic: index
---

<!-- original:
**On this page:**

* [Overview](#overview)
* [LitElement and the browser event loop](#eventloop)
* [Promises and asynchronous functions](#promises)
-->

**ここでは:**

* [概要](#overview)
* [LitElementとブラウザのイベントループ](#eventloop)
* [Promisesと非同期関数](#promises)

<a id="overview">

### [概要](#overview)

<!-- original:
LitElement-based components update asynchronously in response to observed property changes. Property changes are batched--if more properties change after an update is requested, but before the update starts, all of the changes are captured in the same update.

At a high level, the update lifecycle is:

1.  A property is set. 
2.  The property's `hasChanged` function evaluates whether the property has changed.
3.  If the property has changed, `requestUpdate` fires, scheduling an update.
4.  `shouldUpdate` checks whether the update should proceed.
5.  If the update should proceed, the `update` function reflects the element's properties to its attributes.
6.  The lit-html `render` function renders DOM changes.
7.  The `updated` function is called, exposing the properties that changed.
8.  The `updateComplete` Promise resolves. Any code waiting for it can now run.

See the documentation on [Customizing lifecycle behavior](customize) for a guide to working with the LitElement update lifecycle. 

For details on the lifecycle methods' parameters, return values, and how to call them, see the [Lifecycle methods reference](methods).
-->

LitElementベースのコンポーネントは、監視されているプロパティの変更に応じて非同期に更新されます。プロパティーの変更は一括処理されます。更新が要求された後、更新が開始される前にさらにプロパティーが変更されると、すべての変更が同じ更新で取り込まれます。

高いレベルでは、更新ライフサイクルは:

1. プロパティが設定されると、
2. **プロパティ毎に設定** される `hasChanged`によって **プロパティが変更されたかどうか** を確認。
3. プロパティが変更されたなら`requestUpdate()`を呼んで描画をスケジューリングし、
4. `shouldUpdate` によって描画をすべきか確認。
5. 描画してよいなら`update`が呼ばれて各属性やプロパティを更新し、
6. lit-htmlがDOMに描画。
7. **([訳者追加](https://github.com/Polymer/lit-element#advanced-update-lifecycle)** 最初の描画時は`firstUpdated`が呼ばれつつ) `update`が呼ばれ、プロパティも更新済みとなり、
8. `updateComplete`がresolveされる

LitElementの更新ライフサイクルを操作するためのガイドについては、[ライフサイクル動作のカスタマイズ](customize)のドキュメントを参照してください。

ライフサイクルメソッドのパラメータ、戻り値、およびそれらの呼び出し方法の詳細については、[ライフサイクルメソッドのリファレンス](methods)を参照してください。

<a id="eventloop">

### [LitElementとブラウザのイベントループ](#eventloop)

<!-- original:
For a more detailed explanation of these concepts, see [Jake Archibald's article](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/).

The browser executes JavaScript code by processing a queue of tasks in the [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop). In each iteration of the event loop, the browser takes a task from the queue and runs it to completion. 

When the task completes, before taking the next task from the queue, the browser allocates time to perform work from other sources--including DOM updates, user interactions, and the microtask queue. 

LitElement updates are requested asynchronously as Promises, and are queued as microtasks. This means that element updates are processed at the end of every iteration of the event loop--making updates super fast and responsive.
-->

これらの概念の詳細については、[Jake Archibaldの記事](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)を参照してください。

ブラウザは[イベントループ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)のタスクのキューを処理することによってJavaScriptコードを実行します。イベントループが繰り返されるたびに、ブラウザはキューからタスクを取り出し、完了まで実行します。

タスクが完了すると、キューから次のタスクを実行する前に、ブラウザはDOM更新、ユーザー対話、マイクロタスクキューなどの他のソースから作業を実行するための時間を割り当てます。

LitElementの更新は、Promisesとして非同期に要求され、マイクロタスクとしてキューに入れられます。これは、イベントループの各反復の最後に要素の更新が処理されることを意味し、更新をすばやく迅速に処理します。

<a id="promises">

### [Promisesと非同期関数](#promises)

<!-- original:
LitElement uses [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objects to schedule and respond to element updates. 

Using `async` and `await` makes it easy to work with Promises. For example, you can await the `updateComplete` Promise:

```js
// `async` makes the function return a Promise & lets you use `await` 
async myFunc(data) {
  // Set a property, triggering an update
  this.myProp = data;

  // Wait for the updateComplete promise to resolve
  await this.updateComplete;
  // ...do stuff...
  return 'done';
}
```

Because `async` functions return a Promise, you can await them, too:

```js
let result = await myFunc('stuff');
// `result` is resolved! You can do something with it
```

See the [Web Fundamentals primer on Promises](https://developers.google.com/web/fundamentals/primers/promises) for a more in-depth tutorial.
-->

LitElementは、[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)オブジェクトを使用して要素の更新をスケジュールし、それに応答します。

`async`と` await`を使うと、Promisesで簡単に作業できます。例えば、あなたは `updateComplete` Promiseを待つことができます:

```js
// `async`は関数をプロミスに戻し、` await`を使用させます
async myFunc(data) {
  // プロパティを設定し、更新をトリガする
  this.myProp = data;

  // updateCompleteの約束が解決するのを待つ
  await this.updateComplete;
  // ...なにか...
  return 'done';
}
```

`async`関数がPromiseを返すので、あなたもそれらを待つことができます:

```js
let result = await myFunc('stuff');
// `result`が解決されました！あなたはそれで何かできる
```

詳細なチュートリアルについては、[Web Fundamentals primer on Promises](https://developers.google.com/web/fundamentals/primers/promises)を参照してください。
