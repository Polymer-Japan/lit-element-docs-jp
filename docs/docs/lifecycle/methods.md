---
layout: post
section: docs
topic: lifecycle
subtopic: methods
---

<!-- original:
In call order, the methods in the update lifecycle are: 
-->

更新ライフサイクルで呼び出されるメソッドの順番としては:

1.  [hasChanged](#haschanged)
1.  [requestUpdate](#requestupdate) 
1.  [shouldUpdate](#shouldupdate)
1.  [update](#update)
1.  [render](#render)
1.  [firstUpdated](#firstupdated)
1.  [updated](#updated)
1.  [updateComplete](#updatecomplete)

<a id="haschanged">

<br/>

[Back to top](methods)

## [hasChanged](#haschanged)

```
hasChanged(newValue, oldValue)
```

<!-- original:
| **Params**<br/><br/>&nbsp; | `newValue`<br/><br/>`oldValue` | Property value to be set.<br /> <br/>Previous property value for comparison.|
| **Returns** | `Boolean`  | Element update proceeds if `hasChanged` returns true.|
| **Updates?** | No | Property changes inside this method will not trigger an element update. |

Called whenever a property is set. If `hasChanged` returns `true`, [`requestUpdate`](#requestupdate) is called.

By default:

* `hasChanged` returns `true` if `newVal !== oldVal`.
* `hasChanged` returns `false` if both the new and old values are `NaN`.

To customize `hasChanged` for a property, specify it as a property option:

```js
static get properties() { return {
  myProp: {
    hasChanged(newVal, oldVal) {
      // compare newVal and oldVal
      // return `true` if an update should proceed
    }
  }};
}
```

**Example**
-->

| **引数**<br/><br/>&nbsp; | `newValue`<br/><br/>`oldValue` | 設定するプロパティ値<br /> <br/>比較のための以前のプロパティ値|
| **返り値** | `Boolean`  | `hasChanged`がtrueを返すと、要素の更新が続けられます |
| **更新？** | いいえ | このメソッドの内部でのプロパティの変更は、要素の更新をトリガーしません |

プロパティが設定されると呼び出されます。 `hasChanged`が` true`を返す場合、[`requestUpdate`](＃requestupdate)が呼び出されます。

デフォルトでは:

* `hasValue`は` newVal！== oldVal`なら `true`を返します。
* `hasChanged`は、新しい値と古い値の両方が` NaN`であれば `false`を返します。

プロパティに対して `hasChanged`をカスタマイズするには、それをプロパティオプションとして指定します:

```js
static get properties() { return {
  myProp: {
    hasChanged(newVal, oldVal) {
      // newValとoldValを比較して
      // 更新を続行する場合は `true`を返します
    }
  }};
}
```

**サンプル**

_my-element.js_

```js
{% include projects/docs/lifecycle/haschanged/my-element.js %}
```

{% include project.html folder="docs/lifecycle/haschanged" %}

<a id="requestupdate">

<br/>

[Back to top](methods)

## [requestUpdate](#requestupdate)

```
requestUpdate()
requestUpdate(propertyName, oldValue)
```

<!-- original:
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

<a id="shouldupdate">

<br/>

<!-- original:
[Back to top](methods)
-->

[トップへ](methods)

## [shouldUpdate](#shouldupdate)

```
shouldUpdate(changedProperties)
```

<!-- original:
| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Returns**  | `Boolean` | If `true`, update proceeds. Default return value is `true`. |
| **Updates?** | Yes | Property changes inside this method will trigger an element update. |

**Example: Customize which property changes should cause updates**
-->

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **返り値**  | `Boolean` | `true`の場合、更新が進みます。デフォルトの戻り値は `true`です。 |
| **更新？** | はい | このメソッドの内部でプロパティを変更すると、要素が更新されます。 |

**サンプル: どのプロパティの変更によって更新が発生するかをカスタマイズする**

```js
{% include projects/docs/lifecycle/shouldupdate/my-element.js %}
```

{% include project.html folder="docs/lifecycle/shouldupdate" %}

<a id="update">

<br/>

[トップへ](methods)

## [update](#update)

```
update(changedProperties)
```

<!-- original:
| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Updates?** | No | Property changes inside this method will not trigger an element update. |

Updates the element by reflecting property values to attributes, and calling `render()`. 
-->

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **更新？** | いいえ | このメソッドの内部でのプロパティの変更は、要素の更新をトリガーしません。 |

属性値を属性に反映させて要素を更新し、 `render（）`を呼び出します。

```js
{% include projects/docs/lifecycle/update/my-element.js %}
```

{% include project.html folder="docs/lifecycle/update" %}

<a id="render">

<br/>

[Back to top](methods)

## [render](#render)

```
render()
```

<!-- original:
| **Returns** | `TemplateResult` | Must return a lit-html `TemplateResult`. |
| **Updates?** | No | Property changes inside this method will not trigger an element update. |

Uses lit-html to render the element template.

See the documentation on [writing and rendering templates](../templates) for more information.
-->

| **返り値** | `TemplateResult` | lit-htmlの `TemplateResult`を返さなければなりません。 |
| **更新？** | いいえ | このメソッドの内部でのプロパティの変更は、要素の更新をトリガーしません。 |

lit-htmlを使用して要素テンプレートをレンダリングします。

詳細については、[テンプレートの作成とレンダリング](../templates)のドキュメントを参照してください。

<a id="firstupdated">

<br/>

[トップへ](methods)

## [firstUpdated](#firstupdated)

`firstUpdated(changedProperties)`

<!-- original:
| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Updates?** | Yes | Property changes inside this method will trigger an element update. |

Called after the element's DOM has been updated the first time, immediately before [`updated`](#updated) is called. 

Customize `firstUpdated` to perform one-time work after the element's template has been created.

**Example: Focus an input element**
-->

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **更新？** | はい | このメソッドの内部でプロパティを変更すると、要素が更新されます。 |

要素のDOMが最初に更新された後、[`updated`](#updated)が呼び出される直前に呼び出されます。

要素のテンプレートが作成された後にワンタイム作業を実行するように `firstUpdated`をカスタマイズします。

**サンプル: 入力要素をフォーカスする**

```js
{% include projects/docs/lifecycle/firstupdated/my-element.js %}
```

{% include project.html folder="docs/lifecycle/firstupdated" %}

<a id="shouldupdate">

<br/>

[トップへ](methods)


## [updated](#updated)

```
updated(changedProperties)
```

<!-- original:
| **Params** | `changedProperties`| `Map`. Keys are the names of changed properties; Values are the corresponding previous values. |
| **Updates?** | Yes | Property changes inside this method will trigger an element update. |

Called when the element's DOM has been updated and rendered. Does nothing. Implement to do stuff after anupdate e.g. focus, etc

**Example: Focus an element after update**
-->

| **引数** | `changedProperties`| `Map`オブジェクトでキーは変更されたプロパティの名前です。<br/>値は対応する以前の値です。 |
| **更新？** | はい | このメソッドの内部でプロパティを変更すると、要素が更新されます。 |

要素のDOMが更新されレンダリングされたときに呼び出されます。何もしない。例えば、更新後の処理を実装する。フォーカスなど

**サンプル: 更新後に要素をフォーカスする**

```js
{% include projects/docs/lifecycle/updated/my-element.js %}
```

{% include project.html folder="docs/lifecycle/updated" %}

<a id="updatecomplete">

<br/>

[トップへ](methods)

## [updateComplete](#updatecomplete)

```js
updateComplete
```

<!-- original:
| **Type** | `Promise` | Resolves with a `Boolean` when the element has finished updating. |
| **Resolves** <br/><br/>| `true` if there are no more pending updates.<br/><br/> `false` if this update cycle triggered another update. |

The `updateComplete` Promise resolves when the element has finished updating. Use `updateComplete` to to wait for an update:

  ```js
  await updateComplete;
  // do stuff
  ```

  ```js
  updateComplete.then(() => { /* do stuff */ });
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

`updateComplete` Promiseは、要素の更新が完了した時点を解決します。 `updateComplete`を使って更新を待つ:

  ```js
  await updateComplete;
  // なにか
  ```

  ```js
  updateComplete.then(() => { /* なにか */ });
  ```

`updateComplete`を解決する前に追加状態を待たせるには、` updateComplete`ゲッターを実装してください:

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
