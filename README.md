[![build][travis-ci-image]][travis-ci-url]

# angular-pwa-sample

This is a PWA sample using Angular CLI 6.0.0.

This sample contains following features.
- Service Worker
- Universal (SSR)
- App Shell


## Tutorial

1. Install Angular CLI 6.0.0

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

7. Add App Shell configurations to `angular.json`

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

8. Run `ng run` to build the App

```shell
$ ng run my-app:app-shell:production
```

Congratulations ! Your Angular application is built in `dist/my-app`.

You can see it byusing `http-server`.

```
$ npx http-server ./dist/my-app
```


[travis-ci-url]: http://travis-ci.org/puku0x/angular-pwa-sample
[travis-ci-image]: https://travis-ci.org/puku0x/angular-pwa-sample.svg?branch=master
