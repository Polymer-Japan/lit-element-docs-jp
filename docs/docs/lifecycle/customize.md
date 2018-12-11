---
layout: post
section: docs
topic: lifecycle
subtopic: customize
---

<!-- original:
**On this page:**

* [Customize when updates happen](#customize)
* [Request an update at a specific time](#request)
* [Respond to or wait for an update](#respond)
-->

**ここでは:**

* [更新時処理のカスタマイズ](#customize)
* [指定されたタイミングで更新要求](#request)
* [更新の実行及び実行待ち](#respond)

<a id="customize">

### [更新時処理のカスタマイズ](#customize)

<!-- original:
**Customize which property changes should cause an update**

[Implement `shouldUpdate`](methods#shouldupdate):
-->

**更新を引き起こすプロパティの変更をカスタマイズする**

[`shouldUpdate`を実装する](methods#shouldupdate):

```js
shouldUpdate(changedProps) {
  return changedProps.has('prop1');
}
```

{% include project.html folder="docs/lifecycle/shouldupdate" %}

<!-- original:
**Customize what constitutes a property change**

Specify [`hasChanged`](methods#haschanged) for the property:

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

**プロパティ変更を構成するものをカスタマイズする**

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
**Manage property changes and updates for object subproperties**

Mutations (changes to object subproperties and array items) are not observable. Instead, either rewrite the whole object, or call [`requestUpdate`](methods#requestupdate) after a mutation.

```js
// Option 1: Rewrite whole object, triggering an update
this.prop1 = Object.assign({}, this.prop1, { subProp: 'data' });

// Option 2: Mutate a subproperty, then call requestUpdate
this.prop1.subProp = 'data';
this.requestUpdate();
```
-->

**オブジェクトのサブプロパティのプロパティの変更と更新の管理**

突然変異（オブジェクトのサブプロパティと配列アイテムの変更）は観測できません。代わりに、オブジェクト全体を書き換えるか、または突然変異の後に[`requestUpdate`](メソッド＃requestupdate)を呼び出します。

```js
// Option 1: オブジェクト全体を書き直し、更新をトリガする
this.prop1 = Object.assign({}, this.prop1, { subProp: 'data' });

// Option 2: サブプロパティを変更してから、requestUpdateを呼び出します。
this.prop1.subProp = 'data';
this.requestUpdate();
```

{% include project.html folder="docs/lifecycle/subproperties" %}

<!-- original:
**Update in response to something that isn't a property change**

Call [`requestUpdate`](methods#requestupdate):

```js
// Request an update in response to an event
this.addEventListener('load-complete', async (e) => {
  console.log(e.detail.message);
  console.log(await this.requestUpdate());
});
```
-->

**プロパティーの変更ではないものに対する応答**

[`requestUpdate`](methods#requestupdate)を呼ぶ:

```js
// イベントに応じて更新をリクエストする
this.addEventListener('load-complete', async (e) => {
  console.log(e.detail.message);
  console.log(await this.requestUpdate());
});
```

{% include project.html folder="docs/lifecycle/shouldupdate" %}

<a id="request">

### [更新の指定](#request)

<!-- original:
**Request an update regardless of property changes**

Call [`requestUpdate()`](methods#requestupdate):
-->

**プロパティの変更に関係なく更新を要求する**

[`requestUpdate()`](methods#requestupdate)を呼ぶ:

```js
this.requestUpdate();
```

<!-- original:
**Request an update for a specific property**

Call [`requestUpdate(propName, oldValue)`](methods#requestupdate):
-->

**特定のプロパティの更新をリクエストする**

[`requestUpdate(propName, oldValue)`](methods#requestupdate)を呼ぶ:

```js
let oldValue = this.prop1;
this.prop1 = 'new value';
this.requestUpdate('prop1', oldValue);
```

{% include project.html folder="docs/lifecycle/requestupdate" %}

<a id="respond">

### [更新の実行及び実行待ち](#respond)

<!-- original:
**Do something after the first update**

Implement [`firstUpdated`](methods#firstupdated): 
-->

**最初の更新後に何かをする**

[`firstUpdated`](methods#firstupdated)を実装する: 

```js
firstUpdated(changedProps) {
  console.log(changedProps.get('prop1'));
}
```

{% include project.html folder="docs/lifecycle/firstupdated" %}

<!-- original:
**Do something after every update**

Implement [`updated`](methods#updated):
-->

**更新のたびに何かをする**

[`updated`](methods#updated)を実装する:

```js
updated(changedProps) {
  console.log(changedProps.get('prop1'));
}
```

{% include project.html folder="docs/lifecycle/updated" %}

<!-- original:
**Do something when the element next updates**

Await the [`updateComplete`](methods#updatecomplete) promise:

```js
await updateComplete;
// do stuff
```

```js
updateComplete.then(() => {
  // do stuff
});
```

**Wait for an element to finish updating**

Await the [`updateComplete`](methods#updatecomplete) promise:

```js
let done = await updateComplete;
```

```js
updateComplete.then(() => {
  // finished updating
});
```
-->

**要素が次回更新されたときに何かする**

[`updateComplete`](methods#updatecomplete)のPromiseをawaitする:

```js
await updateComplete;
// なにか
```

```js
updateComplete.then(() => {
  // なにか
});
```

**要素の更新が完了するまで待ちます。**

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

