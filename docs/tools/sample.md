---
layout: post
section: tools
topic: sample
pageid: sample
---

<!-- original:
* [start-lit-element sample project on GitHub](https://github.com/PolymerLabs/start-lit-element)
* [start-lit-element demo on Firebase](https://start-lit-element.firebaseapp.com/)

**On this page:**

* [Clone](#clone)
* [Serve](#serve)
* [Build](#build)
-->

* [start-lit-element GitHubのサンプルプロジェクト](https://github.com/PolymerLabs/start-lit-element)
* [start-lit-element Firebase上のデモページ](https://start-lit-element.firebaseapp.com/)

**ここでは:**

* [複製](#clone)
* [サーバー](#serve)
* [ビルド](#build)

### [複製](#clone) 

<!-- original:
Use Git to clone the sample project:
-->

Gitを使ってサンプルプロジェクトを複製する:

```bash
git clone https://github.com/PolymerLabs/start-lit-element.git
```

<!-- original:
The project is configured, ready to serve and build right away.
-->

プロジェクトは構成され、即座にサービスを提供し、すぐに構築できます。

<a id="serve">

### [サーバー](#serve)

<!-- original:
1.  Go to the `start-lit-element` folder:

    ```bash
    cd start-lit-element
    ```

2.  Install the project's dependencies: 

    ```bash
    npm install
    ```

3.  Serve the project locally:

    ```bash
    polymer serve
    ```

    The Polymer CLI dev server starts your app and tells you where you can see it:

    ```
    ~/start-lit-element> polymer serve

    info: [cli.command.serve] Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8001
      reusable components: http://127.0.0.1:8001/components/start-lit-element/
    ```

4.  Open the "applications" URL to view your app. In the example above, you'd open http://127.0.0.1:8001.

See a demo of what the app should look like at [start-lit-element.firebaseapp.com](https://start-lit-element.firebaseapp.com/). 
-->

1.  `start-lit-element`フォルダに移動します。:

    ```bash
    cd start-lit-element
    ```

2.  プロジェクトの依存関係をインストールする: 

    ```bash
    npm install
    ```

3.  プロジェクトをローカルに提供する:

    ```bash
    polymer serve
    ```

    Polymer CLIのデベロッパーサーバーはあなたのアプリを起動し、あなたがそれを見ることができる場所を教えてくれます:

    ```
    ~/start-lit-element> polymer serve

    info: [cli.command.serve] Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8001
      reusable components: http://127.0.0.1:8001/components/start-lit-element/
    ```

4.  アプリケーションを表示するには、アプリケーションのURLを開きます。上記の例では、http://127.0.0.1:8001 を開けます。

アプリが[start-lit-element.firebaseapp.com](https://start-lit-element.firebaseapp.com/)のように表示されるデモをご覧ください。

<a id="build">

### [ビルド](#build)

<!-- original:
1.  Go to your root project folder:

    ```bash
    cd start-lit-element
    ```

2.  Use Polymer CLI to build your project:

    ```bash
    polymer build    
    ```

3.  Serve the built project locally: 

    ```bash
    polymer serve build/default
    ```

You can deploy the built project on any web server. See the [Sample project README](https://github.com/PolymerLabs/start-lit-element/blob/master/README.md#deploy) for instructions on deploying to Firebase. See a demo of the sample app deployed on Firebase at [start-lit-element.firebaseapp.com](https://start-lit-element.firebaseapp.com/). 
-->

1.  ルートプロジェクトフォルダに移動します。:

    ```bash
    cd start-lit-element
    ```

2.  Polymer CLIを使用してプロジェクトを構築する:

    ```bash
    polymer build    
    ```

3.  ローカルにビルドされたプロジェクトを提供する: 

    ```bash
    polymer serve build/default
    ```

ビルドされたプロジェクトは、任意のWebサーバーに配置できます。 Firebaseにデプロイする方法については、[サンプルプロジェクトのREADME](https://github.com/PolymerLabs/start-lit-element/blob/master/README.md#deploy)を参照してください。 Firebaseにデプロイされているサンプルアプリケーションのデモを[start-lit-element.firebaseapp.com](https://start-lit-element.firebaseapp.com/)でご覧ください。
