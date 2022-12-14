# @fastly/next-compute-js を試す

https://zenn.dev/tkc310/scraps/c8a4e20c69774f

## Log

### Node & Next.js

```console
$ anyenv update
$ nodenv install 18.10.0
$ nodenv rehash
```

```console
$ npm init -y
$ npx create-next-app@latest --ts
```

```console
$ npm run dev
$ open http://localhost:3000
```

### Fastly

#### @fastly/next-compute-js

```console
$ npx @fastly/next-compute-js
# created ./compute-js/
```

```console
$ brew install fastly/tap/fastly
# https://developer.fastly.com/learning/tools/cli/#installing
$ cd compute-js
```

##### Debug

```console
$ fastly compute serve
$ open http://localhost:7676
```

##### Deploy

事前に下記を行う

- fastly にサインアップ
- personal api token の発行
- CLI のセットアップ (プロファイルを作る)  
  https://zenn.dev/hrmsk66/articles/74e2e890726e99

```console
$ fastly profile create test
# ここでtokenの入力が求められる
# => created ~/Library/Application\ Support/fastly/config.toml
```

```console
$ fastly compute publish
# => 色々聞かれるが全てデフォルトにする
# => デプロイが成功すると https://xxx.edgecompute.app のようなデプロイ先にアクセスするURLが表示される
```

#### @fastly/compute-js-static-publish

```console
$ npm run build
$ npm run export
```

```console
$ npx @fastly/compute-js-static-publish --preset=next
# refs: https://github.com/fastly/compute-js-static-publish#1-run-compute-js-static-publish

$ cd compute-js
$ npm i
$ fastly compute serve
$ open http://localhost:7676
```

事前に compute service を追加しておき `compute-js/fastly.toml` の `service_id` を修正する。

```console
$ fastly compute publish
# => デプロイが成功すると https://xxx.edgecompute.app のようなデプロイ先にアクセスするURLが表示される
```
