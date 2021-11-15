# loppback4-example-log-extension

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install LogComponent using `npm`;

```sh
$ [npm install | yarn add] loppback4-example-log-extension
```

## Basic Use

Configure and load LogComponent in the application constructor
as shown below.

```ts
import {LogComponent, LogComponentOptions, DEFAULT_LOPPBACK4_EXAMPLE_LOG_EXTENSION_OPTIONS} from 'loppback4-example-log-extension';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: LogComponentOptions = DEFAULT_LOPPBACK4_EXAMPLE_LOG_EXTENSION_OPTIONS;
    this.configure(LogComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(LogComponent);
    // ...
  }
  // ...
}
```
