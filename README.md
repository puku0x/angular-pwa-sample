[![build][travis-ci-image]][travis-ci-url]
[![Dependency status][david-dm-image]][david-dm-url]
[![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

# angular-pwa-sample

![lightouse](./lighthouse.png)


This is a PWA sample using Angular CLI 6.

This sample contains following features.
- Service Worker
- Universal (SSR)
- App Shell


## Tutorial

1. Install Angular CLI 6

```shell
$ npm i -g @angular/cli
```

2. Create an app

```shell
$ ng new my-app --routing --style=scss
$ cd my-app
```

3. Add service worker

```shell
$ ng add @angular/pwa --project=my-app
```

4. Generate universal files

```shell
$ ng g universal --client-project=my-app
```

5. Run `npm install` to update dependencies.

```shell
$ npm i
```

6. Generate App Shell

```shell
$ ng g app-shell --client-project=my-app --universal-project=my-app
```

7. Add configurations for production build

```json:angular.json
"app-shell": {
  "builder": "@angular-devkit/build-angular:app-shell",
  "options": {
    "browserTarget": "my-app:build",
    "serverTarget": "my-app:server",
    "route": "shell"
  },
  "configurations": {
    "production": {
      "browserTarget": "my-app:build:production"
    }
  }
}
```

8. Run `ng run` to build the app

```shell
$ ng run my-app:app-shell:production
```

Congratulations ! Your Angular application is built in `dist/my-app`.

You can see it by using `pushstate-server`.

```
$ npx pushstate-server ./dist/my-app
```


[travis-ci-url]: http://travis-ci.org/puku0x/angular-pwa-sample
[travis-ci-image]: https://travis-ci.org/puku0x/angular-pwa-sample.svg?branch=master
[david-dm-url]:https://david-dm.org/puku0x/angular-pwa-sample
[david-dm-image]:https://david-dm.org/puku0x/angular-pwa-sample.svg
[david-dm-dev-url]:https://david-dm.org/puku0x/angular-pwa-sample?type=dev
[david-dm-dev-image]:https://david-dm.org/puku0x/angular-pwa-sample/dev-status.svg
