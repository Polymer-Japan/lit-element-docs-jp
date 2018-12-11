---
layout: post
section: docs
topic: properties
---

<a id="declare">

### [プロパティの宣言](#declare)

<!-- original:
Declare your element's properties by implementing the `properties` getter, or with TypeScript decorators.

LitElement automatically observes declared properties. When a property changes, LitElement updates your element in the [element update lifecycle](/docs/lifecycle/).

To declare properties in the `properties` getter:
-->

`properties`ゲッターを実装するか、TypeScriptデコレータで要素のプロパティを宣言してください。

LitElementは自動的に宣言されたプロパティを観察します。プロパティが変更されると、LitElementは[要素の更新ライフサイクル](/docs/lifecycle/)にある要素を更新します。

`properties`ゲッターでプロパティを宣言するには:

```js
static get properties() { 
  return { 
    prop1: { type: String },
    prop2: { type: Number },
    prop3: { type: Boolean }
  };
}
```

{% include project.html folder="docs/properties/declare" openFile="my-element.js" %}

<!-- original:
You can also declare properties with TypeScript decorators:
-->

TypeScriptデコレータでプロパティを宣言することもできます:

```js
import { LitElement, html, customElement, property } from '@polymer/lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({type : String})  prop1 = 'Hello World';
  @property({type : Number})  prop2 = 5;
  @property({type : Boolean}) prop3 = true;
  ...
}
```

<!-- original:
You can specify any of the property options in this section with TypeScript decorators, or in the `properties` getter.
-->

このセクションのプロパティオプションのいずれかをTypeScriptデコレータで指定することも、 `properties`ゲッターで指定することもできます。

{% include project.html folder="docs/properties/declaretypescript" openFile="my-element.js" %}

[Back to top](properties)

<a id="init">

### [プロパティの初期化](#init)

<!-- original:
Initialize default property values in the element constructor:

```js
constructor() {
  // Always call super() first
  super();
  this.prop1 = 'Hello World';
  this.prop2 = 5;
  this.prop3 = true;
}
```

Remember to call `super()` first in your constructor, or your element won't render at all.

You can also initialize a property from an attribute in markup:
-->

要素コンストラクタのデフォルトのプロパティ値を初期化する:

```js
constructor() {
  // 常にsuper()を最初に呼び出す
  super();
  this.prop1 = 'Hello World';
  this.prop2 = 5;
  this.prop3 = true;
}
```

あなたのコンストラクタで `super()`を最初に呼び出すことを忘れないでください。そうしないと、要素がレンダリングされません。

マークアップ内の属性からプロパティを初期化することもできます:

```html
<my-element prop1="Hi" prop2="7"></my-element>
```

<!-- original:
Values supplied in markup will override the default values in your constructor.

LitElement deserializes a property from an attribute in markup according to its type, so make sure you [configure your property type](#type) correctly.

[Back to top](properties)
-->

マークアップで指定された値は、コンストラクタのデフォルト値よりも優先されます.

LitElementは、その型に従ってマークアップ内の属性からプロパティを直列化解除するため、[プロパティの型を構成する](#type)を正しく設定してください。

[トップへ](properties)

<a id="type">

### [プロパティの型の設定](#type)

<!-- original:
While element properties can be of any type, attributes are always strings. A property must be serialized and deserialized to and from its corresponding [observed attribute](#attribute). 

By default, LitElement uses the `String` constructor to serialize and deserialize properties and attributes. To make sure a non-string property is handled correctly, configure the property's `type` option.

`type` can be: 

* A function that performs both serialization and deserialization:

  ```js
  propName: { type: someFunction }
  ```

* An object with two function properties, `fromAttribute` and `toAttribute`. `fromAttribute` performs deserialization, and `toAttribute` performs serialization:

  ```js
  propName: { type: {
    toAttribute: someFunction,
    fromAttribute: someFunction
  }}
  ```

By default, `type`, `fromAttribute` and `toAttribute` default to the `String` constructor. 

To handle deserialization of strings, numbers, and booleans, you can use the corresponding constructor:
-->

要素のプロパティは任意の型にできますが、属性は常に文字列です。プロパティーは、対応する[監視対象属性](#attributes)との間で直列化および直列化復元する必要があります。 

デフォルトでは、LitElementは `String`コンストラクタを使用してプロパティと属性を直列化および逆直列化します。非文字列のプロパティが正しく処理されるようにするには、プロパティの `type`オプションを設定します。

`type`でできることは:

* シリアライゼーションとデシリアライズの両方を実行する関数:

  ```js
  propName: { type: someFunction }
  ```

* `fromAttribute`と` toAttribute`という2つの関数のプロパティを持つオブジェクトです。 `fromAttribute`は逆直列化を行い、` toAttribute`は直列化を行います:

  ```js
  propName: { type: {
    toAttribute: someFunction,
    fromAttribute: someFunction
  }}
  ```

デフォルトでは、 `type`、` fromAttribute`、 `toAttribute`はデフォルトで` String`コンストラクタになります。

文字列、数値、およびブール値の逆シリアル化を処理するには、対応するコンストラクタ:

```js
return { 
  myString: { type: String },
  myNumber: { type: Number },
  myBoolean: { type: Boolean }
}
```

<!-- original:
Note that when a property of type `Boolean` is deserialized, if it is truthy, the corresponding attribute is created. If the property is falsy, the attribute is removed.

[Back to top](properties)
-->

`Boolean`型のプロパティが逆シリアル化されるとき、真実であれば、対応する属性が作成されることに注意してください。プロパティが偽である場合、属性は削除されます。

[トップへ](properties)

<a id="objects">

#### [プロパティのシリアラズについて](#objects)

<!-- original:
**Objects (including arrays) must be handled differently.** LitElement has no default handling for converting between object properties and string attributes. If you need to serialize and deserialize complex properties, you must implement a `type` for them.

One option is to use `JSON.parse` and `JSON.stringify`:
-->

**オブジェクト（配列を含む）は、別の方法で処理する必要があります。** LitElementには、オブジェクトのプロパティと文字列の属性を変換するためのデフォルト処理はありません。複雑なプロパティを直列化して逆シリアル化する必要がある場合は、それらのために `type`を実装する必要があります。

1つの方法は `JSON.parse`と` JSON.stringify`を使うことです:

```js
{% include projects/docs/properties/type/my-element.js %}
```

<!-- original:
The following code will **not** deserialize attributes to objects:

```text
return { 
  // this will not deserialize strings to objects
  // it will just call `Object("some string")` on them 
  myObj: { type: Object },
}
```

[Back to top](properties)
-->

次のコードは、属性をオブジェクトに逆シリアル化**しません**:

```text
return { 
  // これは文字列をオブジェクトに逆シリアル化しません
  // `Object（" some string "）`を呼び出すだけです
  myObj: { type: Object },
}
```

[トップへ](properties)

<a id="attribute">

### [属性反映の設定](#attribute)

<!-- original:
Changes to observed attributes trigger [`attributeChangedCallback`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks). When set, observed attributes also update their corresponding property. The property's `type` option determines how the attribute value (a string) is deserialized to the property. See [Configure a property type](#type) for more information.

By default, all declared properties get a corresponding observed attribute. The name of the observed attribute is the property name, lowercased:

```js
static get properties() {
  return {
    // observed attribute name is "myprop"
    myProp: { type: Number }
  };
}
```

To create an observed attribute with a different name, set `attribute` to a string: 

```js
// Observed attribute will be called my-prop
myProp: { attribute: 'my-prop' }
```

To prevent an observed attribute from being created for a property, set `attribute` to `false`. The property will not be initialized from attributes in markup, and won't be updated if the attribute changes.

```js
// No observed attribute for you
myProp: { attribute: false }
```

**Example: Configuring observed attributes**
-->

観測属性の変更は、[`attributeChangedCallback`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)をトリガーします。設定すると、監視対象の属性も対応するプロパティを更新します。プロパティの `type`オプションは、属性値（文字列）がどのようにプロパティに逆シリアル化されるかを決定します。詳細は、[プロパティタイプの設定](#type)を参照してください。

デフォルトでは、宣言されたすべてのプロパティは、対応する監視された属性を取得します。観測属性の名前はプロパティ名で、小文字:

```js
static get properties() {
  return {
    // 観測された属性名は "myprop"
    myProp: { type: Number }
  };
}
```

別の名前の観測属性を作成するには、 `attribute`を文字列に設定します: 

```js
// 観測された属性はmy-propと呼ばれます
myProp: { attribute: 'my-prop' }
```

プロパティに対して観測属性が作成されないようにするには、 `attribute`を` false`に設定します。プロパティはマークアップの属性から初期化されず、属性が変更された場合は更新されません。

```js
// あなたの属性はありません
myProp: { attribute: false }
```

**サンプル: 監視対象属性の構成**

```js
{% include projects/docs/properties/attribute/my-element.js %}
```

[トップへ](properties)

<a id="reflect">

### [プロパティの変更を評価する](#reflect)

<!-- original:
You can configure a property so that whenever it changes, its value is reflected to its [observed attribute](#attribute). For example:
-->

変更するたびにその値が[監視された属性]（＃属性）に反映されるようにプロパティを構成できます。例えば

```js
myProp: { type: String, attribute: 'my-prop', reflect: true }
```

<!-- original:
The property's `type` option determines how the property will be serialized. See [Configuring a property type](#type) for more information.


-->

プロパティの `type`オプションは、プロパティの直列化方法を決定します。詳細については、[プロパティタイプの設定]（＃タイプ）を参照してください。

**サンプル: 属性への反映の設定**

```js
{% include projects/docs/properties/attribute/my-element.js %}
```

[トップへ](properties)

<a id="haschanged">

### [プロパティ変更をどのように扱うか指定する](#haschanged)

<!-- original:
All declared properties have a function, `hasChanged`, which is called whenever the property is set. 

`hasChanged` compares the property's old and new values, and evaluates whether or not the property has changed. If `hasChanged` returns true, LitElement starts an element update. See the [Element update lifecycle documentation](/docs/lifecycle/) for more information on how updates work.

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
-->

宣言されたすべてのプロパティには、プロパティが設定されるたびに呼び出される関数「hasChanged」があります。

`hasChanged`はプロパティの古い値と新しい値を比較し、プロパティが変更されたかどうかを評価します。 `hasChanged`がtrueを返した場合、LitElementは要素の更新を開始します。アップデートの仕組みの詳細については、[Element update lifecycle documentation](/docs/lifecycle/)を参照してください。

デフォルトでは:

* `hasValue`は` newVal！== oldVal`なら `true`を返します。
* `hasChanged`は、新しい値と古い値の両方が` NaN`であれば `false`を返します。

プロパティに対して `hasChanged`をカスタマイズするには、それをプロパティオプションとして指定します:

```js
static get properties() { return {
  myProp: {
    hasChanged(newVal, oldVal) {
      // newValとoldValを比較する
      // 更新が進むべきであれば `true`を返します
    }
  }};
}
```

{% include project.html folder="docs/lifecycle/haschanged" %}
