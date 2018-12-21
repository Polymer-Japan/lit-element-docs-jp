---
layout: guide
title: プロパティ
slug: properties
---

{::options toc_levels="1..3" /}
* ToC
{:toc}

<!-- original:
## Overview

LitElement manages your declared properties and their corresponding attributes. By default, LitElement will: 

* Ensure that an element update is scheduled when any declared property changes.
* Capture instance values for declared properties. Apply any property values that are set before the browser registers a custom element definition.
* Set up an observed (not reflected) attribute with the lowercased name of each property.
* Handle attribute conversion for properties declared as type `String`, `Number`, `Boolean`, `Array`, and `Object`.
* Use direct comparison (`oldValue !== newValue`) to test for property changes.
* Apply any property options and accessors declared by a superclass. 

{:.alert .alert-warning}
<div>

**Remember to declare all of the properties that you want LitElement to manage.** For the property features above to be applied, you must [declare the property](#declare). 

</div>
-->

## 概要 {#overview}

LitElementは、宣言されたプロパティとそれに対応する属性を管理します。 既定として:

* 宣言されたプロパティが変更されたときに更新がスケジュールされます。
* インスタンスの値は宣言されたプロパティとして設定されます。ブラウザがカスタム要素を登録する前に設定されているプロパティに値が適用されます。
* 各プロパティは小文字の名前で、監視される属性(属性に反映はされない)として設定されます。
* 属性は`String`、` Number`、 `Boolean`、` Array`、および `Object`型などの宣言されたプロパティの設定によって変換されます。
* プロパティの値が変更されているかチェックするには厳密な比較(dirty check: `oldValue！== newValue`)を使ってください。
* スーパークラスによって宣言されたプロパティやアクセサが全て適用されています。

{:.alert .alert-warning}
<div>

**LitElementで使うプロパティは全て宣言しておく必要があることを忘れないでください** 上記のプロパティの機能を使うには、 [プロパティを宣言](#declare)する必要があります。

</div>

<!-- original:
### Property options

A property declaration is an object in the following format:

```
{ optionName1: optionValue1, optionName2: optionValue2, ... }
```

The following options are available:

* `converter`: [Convert between properties and attributes](#conversion).
* `type`: [Use LitElement's default attribute converter](#conversion-type).
* `attribute`: [Configure observed attributes](#observed-attributes).
* `reflect`: [Configure reflected attributes](#reflected-attributes).
* `noAccessor`: Whether to set up a default [property accessor](#accessors).
* `hasChanged`: Specify what constitutes a [property change](#haschanged).

All property declaration options can be specified in a static properties getter, or with TypeScript decorators.
-->

### プロパティオプション

プロパティ宣言は、次の形式のオブジェクトです:

```
{ optionName1: optionValue1, optionName2: optionValue2, ... }
```

以下のオプションが利用可能です:

* `converter`: [プロパティと属性を変換する](#conversion).
* `type`: [LitElementの既定の属性コンバータを使用する](#conversion-type).
* `attribute`: [監視対象属性を設定する](#observed-attributes).
* `reflect`: [反映された属性を設定する](#reflected-attributes).
* `noAccessor`: 既定の[プロパティアクセサ](#accessors)を設定するかどうか
* `hasChanged`: [プロパティの変更](#haschanged)の構成を指定する

すべてのプロパティ宣言オプションは、静的プロパティゲッターまたはTypeScriptデコレータで指定できます。

<!-- original:
## Declare properties

Declare your element's properties by implementing a static `properties` getter, or by using TypeScript decorators:

```js
// properties getter
static get properties() {
  return { 
    prop1: { type: String }
  };
}
```

```js
// TypeScript decorators
export class MyElement extends LitElement {
  @property( { type : String }  ) prop1 = '';
```
-->
## プロパティの宣言 {#declare}

`properties`ゲッターを実装するか、TypeScriptデコレータで要素のプロパティを宣言してください:

```js
// プロパティゲッター
static get properties() {
  return { 
    prop1: { type: String }
  };
}
```

```js
// TypeScriptデコレータ
export class MyElement extends LitElement {
  @property( { type : String }  ) prop1 = '';
```

<!-- original:
### Declare properties in a static properties getter

To declare properties in a static `properties` getter:

```js
static get properties() { 
  return { 
    prop1: { type: String },
    prop2: { type: Number },
    prop3: { type: Boolean }
  };
}
```

{:.alert .alert-warning}
<div>

**If you implement a static properties getter, initialize your property values in the element constructor.**

```js
constructor() {
  // Always call super() first
  super();
  this.prop1 = 'Hello World';
  ...
}
```

Remember to call `super()` first in your constructor, or your element won't render at all.

</div>

**Example: Declare properties with a static `properties` getter** 
-->
### 静的ゲッターでプロパティを宣言

`properties`でプロパティを宣言するには:

```js
static get properties() { 
  return { 
    prop1: { type: String },
    prop2: { type: Number },
    prop3: { type: Boolean }
  };
}
```

{:.alert .alert-warning}
<div>

**プロパティを使う時には、コンストラクタでプロパティの値を初期化してください**

```js
constructor() {
  // 必ず最初にsuper()を呼びます
  super();
  this.prop1 = 'Hello World';
  ...
}
```

コンストラクタで `super()`を最初に呼び出すことを忘れないでください。さもないと要素はレンダリングされません。

</div>

**例: `properties`でプロパティを宣言** 

```js
{% include projects/properties/declare/my-element.js %}
```

{% include project.html folder="properties/declare" openFile="my-element.js" %}

<!-- original:
### Declare properties with TypeScript decorators

You can also declare properties with TypeScript decorators:

```js
@property({type : String})  prop1 = 'Hello World';
```

**Example: Declare properties with TypeScript decorators** 
-->
### TypeScriptデコレータを使う

TypeScriptデコレータでプロパティを宣言することもできます:

```js
@property({type : String})  prop1 = 'Hello World';
```

**例: TypeScriptデコレータによるプロパティ宣言** 

```js
{% include projects/properties/declaretypescript/my-element.ts %}
```

{% include project.html folder="properties/declaretypescript" openFile="my-element.ts" %}

## プロパティの初期化 {#initialize}

### コンストラクタでプロパティを初期化

<!-- original:
If you implement a static properties getter, initialize your property values in the element constructor:

```js
static get properties() { return { /* Property declarations */ }; } 

constructor() {
  // Always call super() first
  super();

  // Initialize properties 
  this.prop1 = 'Hello World';
}
```

{:.alert .alert-warning}
<div> 

Remember to call `super()` first in your constructor, or your element won't render at all.

</div>

**Example: Initialize property values in the element constructor** 
-->

プロパティを使う時には、コンストラクタでプロパティの値を初期化します:

```js
static get properties() { return { /* Property declarations */ }; } 

constructor() {
  // 必ず最初にsuper()を呼びます
  super();

  // プロパティの初期化
  this.prop1 = 'Hello World';
}
```

{:.alert .alert-warning}
<div> 

コンストラクタで `super()`を最初に呼び出すことを忘れないでください。さもないと要素はレンダリングされません。

</div>

**例: コンストラクタでプロパティを初期化** 

```js
{% include projects/properties/init/my-element.js %}
```

{% include project.html folder="properties/init" openFile="my-element.js" %}

<!-- original:
### Initialize property values when using TypeScript decorators

TypeScript users can initialize property values when they are declared with the `@property` decorator:

```ts
@property({ type : String }) prop1 = 'Hello World';
```
-->
### TypeScriptデコレータでプロパティを初期化

TypeScriptでは `@property`デコレータでプロパティの値を初期化できます:

```ts
@property({ type : String }) prop1 = 'Hello World';
```

**例: TypeScriptデコレータを使ってプロパティの値を初期化する** 

```js
{% include projects/properties/inittypescript/my-element.ts %}
```

{% include project.html folder="properties/inittypescript" openFile="my-element.ts" %}

<!-- original:
### Initialize property values from attributes in markup 

You can also initialize property values from observed attributes in markup:

_index.html_ 

```html
<my-element 
  mystring="hello world"
  mynumber="5"
  mybool
  myobj='{"stuff":"hi"}'
  myarray='[1,2,3,4]'></my-element>
```
-->

### HTMLの属性からプロパティを初期化 {#initialize-markup}

また、マークアップ内の属性からプロパティの値を初期化することもできます:

_index.html_ 

```html
<my-element 
  mystring="hello world"
  mynumber="5"
  mybool
  myobj='{"stuff":"hi"}'
  myarray='[1,2,3,4]'></my-element>
```

{% include project.html folder="properties/initmarkup" openFile="index.html" %}

<!-- original:
See [observed attributes](#observed-attributes) and [converting between properties and attributes](#conversion) for more information on setting up initialization from attributes.
-->

属性から初期化する方法の詳細については、[属性の監視](#observed-attributes)および[プロパティと属性間の変換](#conversion)を参照してください。

<!-- original:
## Configure attributes

### Convert between properties and attributes

While element properties can be of any type, attributes are always strings. This impacts the [observed attributes](#observed-attributes) and [reflected attributes](#reflected-attributes) of non-string properties:

  * To **observe** an attribute (set a property from an attribute), the attribute value must be converted from a string to match the property type. 

  * To **reflect** an attribute (set an attribute from a property), the property value must be converted to a string.

#### Use the default converter

LitElement has a default converter which handles `String`, `Number`, `Boolean`, `Array`, and `Object` property types.

To use the default converter, specify the `type` option in your property declaration:

```js
// Use LitElement's default converter 
prop1: { type: String },
prop2: { type: Number },
prop3: { type: Boolean },
prop4: { type: Array },
prop5: { type: Object }
```

The information below shows how the default converter handles conversion for each type.

**Convert from attribute to property**

* For **Strings**, when the attribute is defined, set the property to the attribute value.
* For **Numbers**, when the attribute is defined, set the property to `Number(attributeValue)`.
* For **Booleans**, when the attribute is:
  * non-`null`, set the property to `true`.
  * `null` or `undefined`, set the property to `false`.
* For **Objects and Arrays**, when the attribute is:
  * Defined, set the property value to `JSON.parse(attributeValue)`.

**Convert from property to attribute** 

* For **Strings**, when the property is:
  * `null`, remove the attribute.
  * `undefined`, don't change the attribute.
  * Defined and not `null`, set the attribute to the property value.
* For **Numbers**, when the property is:
  * `null`, remove the attribute.
  * `undefined`, don't change the attribute.
  * Defined and not `null`, set the attribute to the property value.
* For **Booleans**, when the property is:
  * truthy, create the attribute.
  * falsy, remove the attribute.
* For **Objects and Arrays**, when the property is:
  * `null` or `undefined`, remove the attribute.
  * Defined and not `null`, set the attribute value to `JSON.stringify(propertyValue)`.

**Example: Use the default converter** 
-->

## 属性をカスタマイズする {#attributes}

### プロパティと属性間の変換 {#conversion}

要素のプロパティは任意の型にできますが、属性は常に文字列です。これは、非文字列プロパティの[属性の監視](#observed-attributes)と[属性への反映](#reflected-attributes)に影響を与えます:

  * 属性を**監視**(属性からプロパティを設定する)するには、プロパティの値を文字列からプロパティの型に合わせて変換する必要があります。

  * 属性を**反映**(プロパティから属性を設定)するには、プロパティの値を文字列に変換する必要があります。

#### 既定のコンバータを使う {#conversion-type}

LitElementには、 `String`、` Number`、 `Boolean`、` Array`、 `Object`プロパティの型を扱う既定のコンバータがあります。

既定のコンバータを使用するには、プロパティ宣言で `type`オプションを指定してください:

```js
// Use LitElement's default converter 
prop1: { type: String },
prop2: { type: Number },
prop3: { type: Boolean },
prop4: { type: Array },
prop5: { type: Object }
```

以下では、既定のコンバータが型の変換をどのように処理するかを示しています。

**属性からプロパティに変換する**

* **Strings**は、そのまま属性の値をプロパティに設定します
* **Numbers**は、`Number(attributeValue)`として設定します
* **Booleans**は、属性が:
  * `null`でなかったら`true`
  * `null`もしくは`undefined`であれば、`false`をプロパティに設定します
* **Objects and Arrays**は、属性が:
  * 宣言されていれば、`JSON.parse(attributeValue)`として設定します

**プロパティから属性への変換** 

* **Strings**は、プロパティが:
  * `null`であれば、属性を削除します
  * `undefined`であれば、属性を変更しません
  * 宣言されていて、`null`でないなら、属性に設定します
* **Numbers**は、プロパティが:
  * `null`であれば、属性を削除します
  * `undefined`であれば、属性を変更しません
  * 宣言されていて、`null`でないなら、属性に設定します
* **Booleans**は、プロパティが:
  * 真(truthy)であれば、属性を作成します
  * 真(falsy)であれば、属性を削除します
* **Objects and Array**は、プロパティが:
  * `null`もしくは`undefined`であれば、属性を削除します
  * 宣言されていて、`null`でないなら、`JSON.stringify(propertyValue)`として設定します

**例: 既定のコンバータを使用する** 

```js
{% include projects/properties/defaultconverter/my-element.js %}
```

{% include project.html folder="properties/defaultconverter" openFile="my-element.js" %}

<!-- original:
#### Configure a custom converter

You can specify a custom property converter in your property declaration with the `converter` option:

```js
myProp: { 
  converter: // Custom property converter
} 
```

`converter` can be an object or a function. If it is an object, it can have keys for `fromAttribute` and `toAttribute`: 

```js
prop1: { 
  converter: { 
    fromAttribute: (value, type) => { 
      // `value` is a string
      // Convert it to a value of type `type` and return it
    },
    toAttribute: (value, type) => { 
      // `value` is of type `type` 
      // Convert it to a string and return it
    }
  }
}
```

If `converter` is a function, it is used in place of `fromAttribute`:

```js
myProp: { 
  converter: (value, type) => { 
    // `value` is a string
    // Convert it to a value of type `type` and return it
  }
} 
```

If no `toAttribute` function is supplied for a reflected attribute, the attribute is set to the property value without conversion.

During an update: 

  * If `toAttribute` returns `null`, the attribute is removed. 

  * If `toAttribute` returns `undefined`, the attribute is not changed.

**Example: Configure a custom converter** 
-->
#### カスタムコンバータを設定する {#conversion-converter}

`converter`オプションを使ってプロパティ宣言でカスタムプロパティコンバーターを指定することができます:

```js
myProp: { 
  converter: // カスタムコンバータ
} 
```

`converter`はオブジェクトまたは関数です。それがオブジェクトの場合、 `fromAttribute`と` toAttribute`のためのキーを持つことができます: 

```js
prop1: { 
  converter: { 
    fromAttribute: (value, type) => { 
      // `value`は文字列として
      // `type`で定義された型として変換して返す
    },
    toAttribute: (value, type) => { 
      // `value`が`type`で定義された型として
      // 文字列として変換して返す
    }
  }
}
```

`converter`が関数の場合、` fromAttribute`の代わりに使用されます。:

```js
myProp: { 
  converter: (value, type) => { 
    // `value`は文字列として
    // `type`で定義された型として変換して返す
  }
} 
```

反映された属性に対して `toAttribute`関数が指定されていない場合、属性は変換されずにプロパティの値が設定されます。

更新時に動作としては: 

  * `toAttribute`が`null`の場合、属性は削除されます。

  * `toAttribute`が`undefined`を返した場合、その属性は変更されません。

**例: カスタムコンバータを設定する** 

```js
{% include projects/properties/attributeconverter/my-element.js %}
```

{% include project.html folder="properties/attributeconverter" openFile="my-element.js" %}

<!-- original:
### Configure observed attributes

An **observed attribute** fires the custom elements API callback `attributeChangedCallback` whenever it changes. By default, whenever an attribute fires this callback, LitElement sets the property value from the attribute using the property's `fromAttribute` function. See [Convert between properties and attributes](#conversion) for more information.

By default, LitElement creates a corresponding observed attribute for all declared properties. The name of the observed attribute is the property name, lowercased:

```js
// observed attribute name is "myprop"
myProp: { type: Number }
```

To create an observed attribute with a different name, set `attribute` to a string: 

```js
// Observed attribute will be called my-prop
myProp: { attribute: 'my-prop' }
```

To prevent an observed attribute from being created for a property, set `attribute` to `false`. The property will not be initialized from attributes in markup, and attribute changes won't affect it.

```js
// No observed attribute for this property
myProp: { attribute: false }
```

An observed attribute can be used to provide an initial value for a property via markup. See [Initialize properties with attributes in markup](#initialize-markup).

**Example: Configure observed attributes**
-->
### 属性を監視する {#observed-attributes}

**監視された属性**は、更新されるたびに、カスタム要素のAPIコールバック`attributeChangedCallback`されます。 既定では、属性がこのコールバックを呼び出すたびに、LitElementはプロパティの `fromAttribute`関数を使用して属性からプロパティの値を設定します。 詳細については、[プロパティと属性の変換](#conversion)を参照してください。

既定では、LitElementは、宣言されたすべてのプロパティに対して、対応する監視設定を作成します。監視している属性の名前はプロパティ名で、小文字となります:

```js
// 監視している属性名は "myprop"
myProp: { type: Number }
```

監視している属性に別名をつけるには、 `attribute`を設定します: 

```js
// 監視している属性名が "my-prop" となる
myProp: { attribute: 'my-prop' }
```

プロパティに対して属性の監視がされないようにするには、 `attribute`を`false`に設定します。このプロパティはマークアップの属性から初期化されず、属性の変更は影響を受けません。

```js
// このプロパティの属性と紐付きません
myProp: { attribute: false }
```

監視された属性を使用して、マークアップを介してプロパティの初期値を提供することができます。 [HTMLの属性からプロパティを初期化](#initialize-markup)を参照してください。

**例: 属性の監視を設定する**

```js
{% include projects/properties/attributeobserve/my-element.js %}
```

{% include project.html folder="properties/attributeobserve" openFile="my-element.js" %}

<!-- original:
### Configure reflected attributes

You can configure a property so that whenever it changes, its value is reflected to its [observed attribute](#observed-attributes). For example:

```js
// Value of property "myProp" will reflect to attribute "myprop"
myProp: { reflect: true }
```

When the property changes, LitElement uses the `toAttribute` function in the property's converter to set the attribute value from the new property value. 

* If `toAttribute` returns `null`, the attribute is removed.

* If `toAttribute` returns `undefined`, the attribute is not changed.

* If `toAttribute` itself is undefined, the property value is set to the attribute value without conversion.

{:.alert .alert-info}
<div>

**LitElement tracks reflection state during updates.** LitElement keeps track of  state information to avoid creating an infinite loop of changes between a property and an observed, reflected attribute.

</div>

**Example: Configure reflected attributes**
-->
### 属性への反映を設定する {#reflected-attributes}

変更するたびにその値が [監視している属性](#observed-attributes)に反映されるようにプロパティを設定できます。 例えば:

```js
// プロパティ"myProp"の値は属性"myprop"に反映されます。
myProp: { reflect: true }
```

プロパティが変更されると、LitElementはプロパティのコンバータ `toAttribute`関数を使用して、新しいプロパティの値から属性値を設定します。

* `toAttribute`が`null`を返す場合、属性は削除されます。

* `toAttribute`が`undefined`を返した場合、その属性は変更されません。

* `toAttribute`自体が未定義の場合、プロパティの値は変換せずに属性値に設定されます。

{:.alert .alert-info}
<div>

LitElement keeps track of  state information to avoid creating an infinite loop of changes between a property and an observed, reflected attribute.

**LitElementは更新中に反映状態を追跡します** LitElementは、プロパティと監視している属性との間で引き起される無限ループを回避するために、状態を見ています。

</div>

**例: 属性への反映を設定する**

```js
{% include projects/properties/attributereflect/my-element.js %}
```

{% include project.html folder="properties/attributereflect" openFile="my-element.js" %}

<!-- original:
## Configure property accessors

By default, LitElement generates a property accessor for all declared properties. The accessor is invoked whenever you set the property:

```js
// Declare a property
static get properties() { return { myProp: { type: String } }; }
...
// Later, set the property
this.myProp = 'hi'; // invokes myProp's generated property accessor
```

Generated accessors automatically call `requestUpdate`, initiating an update if one has not already begun.

### Create custom property accessors

To specify how getting and setting works for a property, create custom accessors:

```js
// Declare a property
static get properties() { return { myProp: { type: String } }; }

// Custom accessors
set myProp(value) { ... /* Custom setter */ } 
get myProp() { ... /* Custom getter */ }

...

// Later, set the property
this.myProp = 'hi'; // Invokes generated accessor, which calls custom accessor
```

When you create custom property accessors for a property, LitElement still generates its own accessors unless you specify otherwise ([see below](#accessors-noaccessor)). The generated setter:

* Saves the previous property value.
* Calls your custom setter.
* Requests an update, supplying the property name and its old value to the update lifecycle.

### Prevent LitElement from generating a property accessor

To prevent LitElement from generating property accessors, set `noAccessors` to `true` in the property declaration:

```js
static get properties() { return { 
  // Don't generate accessors for myProp
  myProp: { type: Number, noAccessors: true } 

  // Do generate accessors for aProp
  aProp: { type: String }
}; }

// Create custom accessors for myProp
set myProp(value) { this._myProp = Math.floor(value); } 
get myProp() { return this._myProp; }

updated(changedProperties) { ... /* no changedProperties entry for myProp */ }

...
// later...
this.myProp = Math.random()*10; // Invokes custom setter; no generated setter
this.aProp = 'hi'; // Invokes generated setter
```

In the example above: 

* No update request will be made when `this.myProp = ...` is executed.
* The update requested as a result of `this.aProp = ...` will still capture `myProp`'s new value.
* The change to `myProp` won't register in the element update lifecycle.

To handle update requests and property options in a custom setter, call `this.requestUpdate('propertyName', oldValue)`:

```js
set myProp(value) { 
  let oldValue = this._myProp;
  this._myProp = Math.floor(value); 
  this.requestUpdate('myProp', oldValue);
} 
```

**Example: Custom property accessors** 
-->
## プロパティアクセサの設定 {#accessors}

既定では、LitElementは宣言されたすべてのプロパティのプロパティアクセサを生成します。 アクセサは、プロパティを設定するたびに呼び出されます:

```js
// プロパティの宣言
static get properties() { return { myProp: { type: String } }; }
...
// その後、値を設定する
this.myProp = 'hi'; // プロパティアクセサが呼び出される
```

生成されたアクセサは自動的に `requestUpdate`を呼び出し、まだ開始していなければ更新を開始します。

### カスタムプロパティアクセサを作成する {#accessors-custom}

プロパティの取得と設定の動作を指定するには、カスタムアクセサを作成します:

```js
// プロパティの宣言
static get properties() { return { myProp: { type: String } }; }

// カスタムアクセサ
set myProp(value) { ... /* Custom setter */ } 
get myProp() { ... /* Custom getter */ }

...

// その後、プロパティを設定する
this.myProp = 'hi'; // カスタムアクセサを通して呼び出される
```

プロパティのカスタムプロパティアクセサを作成する場合、特に指定しない限り([下記参照](#accessors-noaccessor))、LitElementは独自のアクセサを生成します。 その生成されるセッターは:

* 以前のプロパティ値を保存します。
* あなたのカスタムセッターを呼び出します。
* 更新ライフサイクルにプロパティ名とその古い値を指定して、更新を要求します。

### LitElementがプロパティアクセサを生成しないようにする {#accessors-noaccessor}

LitElementがプロパティアクセサを生成しないようにするには、プロパティ宣言で `noAccessors`を`true`に設定してください:

```js
static get properties() { return { 
  // myPropのアクセサを生成しない
  myProp: { type: Number, noAccessors: true } 

  // aPropのアクセサを生成する
  aProp: { type: String }
}; }

// myPropのカスタムアクセサを作成する
set myProp(value) { this._myProp = Math.floor(value); } 
get myProp() { return this._myProp; }

updated(changedProperties) { ... /* changedPropertiesにmyPropは出てこない */ }

...
// その後、、、
this.myProp = Math.random()*10; // カスタムセッターを呼び出します。生成されたセッターはありません
this.aProp = 'hi'; // 生成されたセッターを呼び出します
```

上記の例では: 

* `this.myProp = ...`が実行されても、更新要求は行われません。
* `this.aProp = ...`の結果として要求された更新は`myProp`の最新の値を取得できます。
* `myProp`への変更は要素の更新ライフサイクルに登録されません。

カスタムセッターにプロパティ設定の更新をトリガーするには、 `this.requestUpdate('propertyName', oldValue)`を使ってください:

```js
set myProp(value) { 
  let oldValue = this._myProp;
  this._myProp = Math.floor(value); 
  this.requestUpdate('myProp', oldValue);
} 
```

**例: カスタムプロパティアクセサ** 

```js
{% include projects/properties/customsetter/my-element.js %}
```

{% include project.html folder="properties/customsetter" openFile="my-element.js" %}

<!-- original:
## Configure property changes

All declared properties have a function, `hasChanged`, which is called whenever the property is set. 

`hasChanged` compares the property's old and new values, and evaluates whether or not the property has changed. If `hasChanged` returns true, LitElement starts an element update if one is not already scheduled. See the [Element update lifecycle documentation](lifecycle) for more information on how updates work.

By default:

* `hasChanged` returns `true` if `newVal !== oldVal`.
* `hasChanged` returns `false` if both the new and old values are `NaN`.

To customize `hasChanged` for a property, specify it as a property option:

```js
myProp: { hasChanged(newVal, oldVal) {
  // compare newVal and oldVal
  // return `true` if an update should proceed
}}
```

**Example: Configure property changes** 
-->

## プロパティ変更をカスタマイズ {#hasChanged}

宣言されたすべてのプロパティには、プロパティが設定されるたびに呼び出される関数「hasChanged」があります。

`hasChanged`はプロパティの古い値と新しい値を比較し、プロパティが変更されたかどうかを評価します。 `hasChanged`がtrueを返した場合、LitElementは要素の更新を開始します。アップデートの仕組みの詳細については、[Element update lifecycle documentation](/docs/lifecycle/)を参照してください。

既定では:

* `hasValue`は` newVal！== oldVal`なら `true`を返します。
* `hasChanged`は、新しい値と古い値の両方が` NaN`であれば `false`を返します。

プロパティに対して `hasChanged`をカスタマイズするには、それをプロパティオプションとして指定します:

```js
myProp: { hasChanged(newVal, oldVal) {
  // newValとoldValを比較する
  // 更新が進むべきであれば `true`を返します
}}
```

**例: プロパティの変更を設定** 

```js
{% include projects/properties/haschanged/my-element.js %}
```

{% include project.html folder="properties/haschanged" openFile="my-element.js" %}
