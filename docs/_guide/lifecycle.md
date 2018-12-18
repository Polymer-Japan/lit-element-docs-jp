---
layout: post
title: ライフサイクル
slug: lifecycle
---

{::options toc_levels="1..3" /}
* ToC
{:toc}

<!-- original:
## Overview

LitElement-based components update asynchronously in response to observed property changes. Property changes are batched—if more properties change after an update is requested, but before the update starts, all of the changes are captured in the same update.

At a high level, the update lifecycle is:

1.  A property is set.
2.  The property's `hasChanged` function evaluates whether the property has changed.
3.  If the property has changed, `requestUpdate` fires, scheduling an update.
4.  `shouldUpdate` checks whether the update should proceed.
5.  If the update should proceed, the `update` function reflects the element's properties to its attributes.
6.  The lit-html `render` function renders DOM changes.
7.  The `updated` function is called, exposing the properties that changed.
8.  The `updateComplete` Promise resolves. Any code waiting for it can now run.

####  LitElement and the browser event loop

The browser executes JavaScript code by processing a queue of tasks in the [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop). In each iteration of the event loop, the browser takes a task from the queue and runs it to completion.

When the task completes, before taking the next task from the queue, the browser allocates time to perform work from other sources—including DOM updates, user interactions, and the microtask queue.

LitElement updates are requested asynchronously as Promises, and are queued as microtasks. This means that updates are processed at the end of every iteration of the event loop, making updates fast and responsive.

For a more detailed explanation of the browser event loop, see [Jake Archibald's article](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/).

#### Promises and asynchronous functions

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

## Methods and properties

In call order, the methods and properties in the update lifecycle are:

1.  [someProperty.hasChanged](#haschanged)
1.  [requestUpdate](#requestupdate)
1.  [shouldUpdate](#shouldupdate)
1.  [update](#update)
1.  [render](#render)
1.  [firstUpdated](#firstupdated)
1.  [updated](#updated)
1.  [updateComplete](#updatecomplete)

### someProperty.hasChanged

All declared properties have a function, `hasChanged`, which is called whenever the property is set; if `hasChanged` returns true, an update is scheduled.

See the Properties documentation for information on [configuring `hasChanged` to customize what constitutes a property change](/properties#haschanged).
-->

## 概要

LitElementベースのコンポーネントは、監視されているプロパティの変更に応じて非同期で更新されます。プロパティの変更は一括処理されます。更新が要求された後、更新が開始される前にさらにプロパティが変更されると、すべての変更が同じ更新で反映されます。

更新ライフサイクルは:

1. プロパティが設定されると、
2. **プロパティ毎に設定** される `hasChanged`によって **プロパティが変更されたかどうか** を確認。
3. プロパティが変更されたなら`requestUpdate()`を呼んで描画をスケジューリングし、
4. `shouldUpdate` によって描画をすべきか確認。
5. 描画してよいなら`update`が呼ばれて各属性やプロパティを更新し、
6. lit-htmlがDOMに描画。
7. **([訳者追加](https://github.com/Polymer/lit-element#advanced-update-lifecycle)** 最初の描画時は`firstUpdated`が呼ばれつつ) `update`が呼ばれ、プロパティも更新済みとなり、
8. `updateComplete`がresolveされる

####  LitElementとブラウザのイベントループ

これらの概念の詳細については、[Jake Archibaldの記事](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)を参照してください。

ブラウザは[イベントループ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)のタスクのキューを処理することによってJavaScriptコードを実行します。イベントループが繰り返されるたびに、ブラウザはキューからタスクを取り出し、完了まで実行します。

タスクが完了すると、キューから次のタスクを実行する前に、ブラウザはDOM更新、ユーザー対話、マイクロタスクキューなどの他のソースから作業を実行するための時間を割り当てます。

LitElementの更新は、Promiseとして非同期に要求され、マイクロタスクとしてキューに入れられます。これは、イベントループの各反復の最後に要素の更新が処理されることを意味し、更新をすばやく迅速に処理します。

#### Promisesと非同期関数

LitElementは、[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)オブジェクトを使用して要素の更新をスケジュールし、それに応答します。

`async`と` await`を使うと、Promisesで簡単に作業できます。例えば、あなたは `updateComplete` Promiseを待つことができます:

```js
// `async`は関数をPromiseに戻し、` await`を使用させます
async myFunc(data) {
  // プロパティを設定し、更新をトリガする
  this.myProp = data;

  // updateCompleteのPromiseが解決するのを待つ
  await this.updateComplete;
  // ...なにか...
  return 'done';
}
```

`async`関数がPromiseを返すので、あなたもそれらを待つことができます:

```js
let result = await myFunc('stuff');
// `result`が解決されました！次の処理に移れます。
```

詳細なチュートリアルについては、[Web Fundamentals primer on Promises](https://developers.google.com/web/fundamentals/primers/promises)を参照してください。

## メソッドとプロパティ

更新ライフサイクルで呼び出されるメソッドの順番としては:

1.  [someProperty.hasChanged](#haschanged)
1.  [requestUpdate](#requestupdate) 
1.  [shouldUpdate](#shouldupdate)
1.  [update](#update)
1.  [render](#render)
1.  [firstUpdated](#firstupdated)
1.  [updated](#updated)
1.  [updateComplete](#updatecomplete)

### someProperty.hasChanged

宣言されたすべてのプロパティには、プロパティが設定されるたびに呼び出される関数`hasChanged`があります。 `hasChanged`がtrueを返した場合、更新がスケジュールされます。

[プロパティ変更動作をカスタマイズするために`hasChanged`を設定する](/properties#haschanged)も参照してください。

### requestUpdate

<!-- original:
```js
// Manually start an update
this.requestUpdate();

// Call from within a custom property setter
this.requestUpdate(propertyName, oldValue);
```

| **Params**<br/><br/>&nbsp; | `propertyName`<br/><br/>`oldValue`| Name of property to be updated. <br/><br/> Previous property value. |
| **Returns**  | `Promise` | Returns the [`updateComplete` Promise](#updatecomplete), which resolves on completion of the update. |
| **Updates?** | No | Property changes inside this method will not trigger an element update. |

If [`hasChanged`](#haschanged) returned `true`, `requestUpdate` fires, and the update proceeds.

To manually start an element update, call `requestUpdate` with no parameters.

To implement a custom property setter that supports property options, pass the property name and its previous value as parameters.

**Example: Manually start an element update**
-->

| **引数**<br/><br/>&nbsp; | `propertyName`<br/><br/>`oldValue`| 更新されるプロパティの名前。 <br/><br/> 以前のプロパティ値。 |
| **返り値**  | `Promise` | 更新の完了時に解決する [`updateComplete` Promise](#updatecomplete)を返します。 |
| **更新？** | いいえ | このメソッドの内部でのプロパティの変更は、要素の更新をトリガーしません。 |

[`hasChanged`](＃haschanged)が` true`を返した場合、 `requestUpdate`が起動し、更新が行われます。

要素の更新を手動で開始するには、パラメータなしで `requestUpdate`を呼び出します。

プロパティオプションをサポートするカスタムプロパティセッターを実装するには、プロパティ名とその前の値をパラメーターとして渡します。

**サンプル: 手動で要素の更新を開始する**

```js
{% include projects/docs/lifecycle/requestupdate/my-element.js %}
```

{% include project.html folder="docs/lifecycle/requestupdate" %}

<!-- original:
**Example: Call `requestUpdate` from a custom property setter**
-->

**サンプル: カスタムプロパティセッターから `requestUpdate`を呼び出します**

```js
{% include projects/docs/lifecycle/customsetter/my-element.js %}
```

{% include project.html folder="docs/lifecycle/customsetter" %}

### shouldUpdate

<!-- original:
```js
/**
 * Implement to override default behavior.
 */
shouldUpdate(changedProperties) { ... }
```

| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Returns**  | `Boolean` | If `true`, update proceeds. Default return value is `true`. |
| **Updates?** | Yes | Property changes inside this method will trigger an element update. |

Controls whether an update should proceed. Implement `shouldUpdate` to specify which property changes should cause updates. By default, this method always returns true.

**Example: Customize which property changes should cause updates**
-->

```js
/** 
 * デフォルト動作をオーバーライド
 */
shouldUpdate(changedProperties) { ... }
```

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **返り値**  | `Boolean` | `true`の場合、更新が進みます。デフォルトの戻り値は `true`です。 |
| **更新？** | はい | このメソッドの内部でプロパティを変更すると、要素が更新されます。 |

**サンプル: どのプロパティの変更によって更新が発生するかをカスタマイズする**

```js
{% include projects/docs/lifecycle/shouldupdate/my-element.js %}
```

{% include project.html folder="docs/lifecycle/shouldupdate" %}

### update

<!-- original:
| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Updates?** | No | Property changes inside this method do not trigger an element update. |

Reflects property values to attributes and calls `render` to render DOM via lit-html. Provided here for reference. You don't need to override or call this method. 
-->

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **更新？** | いいえ | このメソッドの内部でのプロパティの変更は、要素の更新をトリガーしません。 |

属性値を属性に反映させて要素を更新し、 `render()`を呼び出します。このメソッドをオーバーライドまたは呼び出す必要はありません。

### render

<!-- original:
```js
/**
 * Implement to override default behavior.
 */
render() { ... }
```

| **Returns** | `TemplateResult` | Must return a lit-html `TemplateResult`. |
| **Updates?** | No | Property changes inside this method will not trigger an element update. |

Uses lit-html to render the element template. You must implement `render` for any component that extends the LitElement base class.

See the documentation on [Templates](/templates) for more information.
-->

```js
/** 
 * デフォルト動作をオーバーライド
 */
render() { ... }
```

| **返り値** | `TemplateResult` | lit-htmlの `TemplateResult`を返さなければなりません。 |
| **更新？** | いいえ | このメソッドの内部でのプロパティの変更は、要素の更新をトリガーしません。 |

lit-htmlを使用して要素テンプレートをレンダリングします。

詳細については、[テンプレートの作成とレンダリング](../templates)のドキュメントを参照してください。

### firstUpdated

<!-- original:
```js
/**
 * Implement to override default behavior.
 */
firstUpdated(changedProperties) { ... }
```

| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Updates?** | Yes | Property changes inside this method will trigger an element update. |

Called after the element's DOM has been updated the first time, immediately before [`updated`](#updated) is called.

Implement `firstUpdated` to perform one-time work after the element's template has been created.

**Example: Focus an input element**
-->

```js
/** 
 * デフォルト動作をオーバーライド
 */
firstUpdated(changedProperties) { ... }
```

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **更新？** | はい | このメソッドの内部でプロパティを変更すると、要素が更新されます。 |

要素のDOMが最初に更新された後、[`updated`](#updated)が呼び出される直前に呼び出されます。

要素のテンプレートが作成された後にワンタイム作業を実行するように `firstUpdated`をカスタマイズします。

**サンプル: 入力要素をフォーカスする**

```js
{% include projects/docs/lifecycle/firstupdated/my-element.js %}
```

{% include project.html folder="docs/lifecycle/firstupdated" %}

### updated

<!-- original:
```js
/**
 * Implement to override default behavior.
 */
updated(changedProperties) { ... }
```

| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Updates?** | Yes | Property changes inside this method will trigger an element update. |

Called when the element's DOM has been updated and rendered. Implement to perform some task after an update.

**Example: Focus an element after update**
-->

```js
/** 
 * デフォルト動作をオーバーライド
 */
updated(changedProperties) { ... }
```

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **更新？** | はい | このメソッドの内部でプロパティを変更すると、要素が更新されます。 |

要素のDOMが更新されレンダリングされたときに呼び出されます。更新後の処理を実装してください。

**サンプル: 更新後に要素をフォーカスする**

```js
{% include projects/docs/lifecycle/updated/my-element.js %}
```

{% include project.html folder="docs/lifecycle/updated" %}

### updateComplete

<!-- original:
```js
// Await Promise property.
await this.updateComplete;
```

| **Type** | `Promise` | Resolves with a `Boolean` when the element has finished updating. |
| **Resolves** <br/><br/>| `true` if there are no more pending updates.<br/><br/> `false` if this update cycle triggered another update. |

The `updateComplete` Promise resolves when the element has finished updating. Use `updateComplete` to to wait for an update:

  ```js
  await this.updateComplete;
  // do stuff
  ```

  ```js
  this.updateComplete.then(() => { /* do stuff */ });
  ```

To have `updateComplete` await additional state before it resolves, implement the `updateComplete` getter:

  ```js
  get updateComplete() {
    return this.getMoreState().then(() => {
      return this._updatePromise;
    });
  }
  ```

**Example**
-->

| **型**&nbsp; | `Promise` | 要素の更新が終了すると、 `Boolean`が返されます。 |
| **Resolves** <br/><br/>| より多くの保留中の更新がなければ `true`を返します。<br/> <br/>この更新サイクルが別の更新を引き起こした場合は` false`を返します。 |

`updateComplete` Promiseは、要素の更新が完了した時点をPromiseがresolveされます。更新を待つには`updateComplete`を使ってください:

  ```js
  await updateComplete;
  // なにか
  ```

  ```js
  updateComplete.then(() => { /* なにか */ });
  ```

`updateComplete`をresolveする前に追加状態を待たせるには、` updateComplete`ゲッターを実装してください:

  ```js
  get updateComplete() {
    return this.getMoreState().then(() => {
      return this._updatePromise;
    });
  }
  ```

**サンプル**

```js
{% include projects/docs/lifecycle/updatecomplete/my-element.js %}
```

{% include project.html folder="docs/lifecycle/updatecomplete" %}

<!-- original:
## Examples

#### Customize which property changes should cause an update

[Implement `shouldUpdate`](#shouldupdate):

```js
shouldUpdate(changedProps) {
  return changedProps.has('prop1');
}
```
-->

## サンプルコード

#### 更新をトリガするプロパティの変更動作をカスタマイズする

[`shouldUpdate`を実装する](#shouldupdate):

```js
shouldUpdate(changedProps) {
  return changedProps.has('prop1');
}
```

{% include project.html folder="docs/lifecycle/shouldupdate" %}

<!-- original:
#### Customize what constitutes a property change

Specify [`hasChanged`](#haschanged) for the property:

```js
static get properties(){ return {
  myProp: {
    type: Number,
    /* Only consider myProp to have changed if newVal > oldVal */
    hasChanged(newVal, oldVal) {
      return newVal > oldVal;
    }
  }
}
```
-->

#### それぞれのプロパティ変更をカスタマイズする

プロパティに[`hasChanged`](methods#haschanged)を指定する:

```js
static get properties(){ return {
  myProp: {
    type: Number,
    /* newVal> oldValの場合のみmyPropを変更したとみなします */
    hasChanged(newVal, oldVal) {
      return newVal > oldVal;
    }
  }
}
```

{% include project.html folder="docs/lifecycle/haschanged" %}

<!-- original:
#### Manage property changes and updates for object subproperties

Mutations (changes to object subproperties and array items) are not observable. Instead, either rewrite the whole object, or call [`requestUpdate`](#requestupdate) after a mutation.

```js
// Option 1: Rewrite whole object, triggering an update
this.prop1 = Object.assign({}, this.prop1, { subProp: 'data' });

// Option 2: Mutate a subproperty, then call requestUpdate
this.prop1.subProp = 'data';
this.requestUpdate();
```
-->

#### オブジェクトのサブプロパティのプロパティの変更と更新の管理

Mutation(オブジェクトのサブプロパティや配列アイテムの変更)は検知できません。代わりに、オブジェクト全体を書き換えるか、または変更後に[`requestUpdate`](メソッド＃requestupdate)を呼び出します。

```js
// Option 1: オブジェクト全体を書き直し、更新をトリガする
this.prop1 = Object.assign({}, this.prop1, { subProp: 'data' });

// Option 2: サブプロパティを変更してから、requestUpdateを呼び出します。
this.prop1.subProp = 'data';
this.requestUpdate();
```

{% include project.html folder="docs/lifecycle/subproperties" %}

<!-- original:
#### Update in response to something that isn't a property change

Call [`requestUpdate`](#requestupdate):

```js
// Request an update in response to an event
this.addEventListener('load-complete', async (e) => {
  console.log(e.detail.message);
  console.log(await this.requestUpdate());
});
```
-->

#### プロパティ変更でない時の更新

[`requestUpdate`](methods#requestupdate)を呼ぶ:

```js
// イベントに応じて更新をリクエストする
this.addEventListener('load-complete', async (e) => {
  console.log(e.detail.message);
  console.log(await this.requestUpdate());
});
```

{% include project.html folder="docs/lifecycle/shouldupdate" %}

<!-- original:
#### Request an update regardless of property changes

Call [`requestUpdate()`](#requestupdate):
-->

#### プロパティの変更に関係なく更新を要求する

[`requestUpdate()`](methods#requestupdate)を呼ぶ:

```js
this.requestUpdate();
```

<!-- original:
#### Request an update for a specific property

Call [`requestUpdate(propName, oldValue)`](#requestupdate):

```js
let oldValue = this.prop1;
this.prop1 = 'new value';
this.requestUpdate('prop1', oldValue);
```
-->

#### 特定のプロパティの更新をリクエストする

[`requestUpdate(propName, oldValue)`](methods#requestupdate)を呼ぶ:

```js
let oldValue = this.prop1;
this.prop1 = '新しい値';
this.requestUpdate('prop1', oldValue);
```

{% include project.html folder="docs/lifecycle/requestupdate" %}

<!-- original:
#### Do something after the first update

Implement [`firstUpdated`](#firstupdated): 
-->

#### 最初の更新後に何かをする

[`firstUpdated`](#firstupdated)を実装する:

```js
firstUpdated(changedProps) {
  console.log(changedProps.get('prop1'));
}
```

{% include project.html folder="docs/lifecycle/firstupdated" %}

<!-- original:
#### Do something after every update

Implement [`updated`](#updated):
-->

#### 更新のたびに何かをする

[`updated`](#updated)を実装する:

```js
updated(changedProps) {
  console.log(changedProps.get('prop1'));
}
```

{% include project.html folder="docs/lifecycle/updated" %}

<!-- original:
#### Do something when the element next updates

Await the [`updateComplete`](#updatecomplete) promise:

```js
await updateComplete;
// do stuff
```

```js
updateComplete.then(() => {
  // do stuff
});
```

#### Wait for an element to finish updating

Await the [`updateComplete`](#updatecomplete) promise:

```js
let done = await updateComplete;
```

```js
updateComplete.then(() => {
  // finished updating
});
```
-->

#### 要素が次回更新されたときに何かする

[`updateComplete`](updatecomplete)のPromiseをawaitする:

```js
await updateComplete;
// なにか
```

```js
updateComplete.then(() => {
  // なにか
});
```

#### 要素の更新が完了するまで待つ

[`updateComplete`](methods#updatecomplete)のPromiseをawaitする:

```js
let done = await updateComplete;
```

```js
updateComplete.then(() => {
  // アップデートの完了
});
```

{% include project.html folder="docs/lifecycle/updatecomplete" %}
