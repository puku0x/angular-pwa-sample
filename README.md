# angular-pwa-sample

This is a PWA sample using Angular CLI 6.0.0.

This sample contains following features.
- Service Worker
- Universal (SSR)
- App Shell


## Tutorial

1. Install Angular CLI 6.0.0

```shell
$ npm i -g @angular/cli@next
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

4. Fix the link for `manifest.json` in `index.html`

```html
<link rel="manifest" href="assets/manifest.json">
```

5. Replace `images/icons/` to `icons/` in `assets/manifest.json`

6. Generate a universal

```shell
$ ng g universal --client-project=my-app
```

7. Run `npm install` to update dependencies.

```shell
$ npm i
```

8. Fix server app configurations in `angular.json`
```json:angular.json
"server": {
  "builder": "@angular-devkit/build-angular:server",
  "options": {
    "outputPath": "dist/my-app-server",
    "main": "src/main.server.ts",
    "tsConfig": "src/tsconfig.server.json"
  }
}
```

9. Move `tsconfig.server.json` to `src/`

```shell
$ mv tsconfig.server.json src/tsconfig.server.json
```

10. Fix `src/tsconfig.server.json`

```json:src/tsconfig.server.json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app-server",
    "module": "commonjs"
  },
  "angularCompilerOptions": {
    "entryModule": "app/app.server.module#AppServerModule"
  }
}
```

11. Generate App Shell

```shell
$ ng g app-shell --client-project=my-app --universal-project=my-app
```

12. Add App Shell configurations to `angular.json`

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

13. Run `ng run` to build App Shell

```shell
$ ng run my-app:app-shell:production
```

Congratulations ! Your Angular application is built in `dist/my-app`.

You can see it byusing `http-server`.

```
$ npx http-server ./dist/my-app
```
