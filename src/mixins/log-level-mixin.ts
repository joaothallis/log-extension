import { MixinTarget, Application } from '@loopback/core';
import { EXAMPLE_LOG_BINDINGS } from '../keys';
import { LogComponent } from '../component';

export function LogMixin<T extends MixinTarget<application>>(superClass: T) {
    return class extends superClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args: any[]) {
            super(...args);
            if (this.options && this.options.logLevel) {
                this.loglevel(this.options.logLevel);
            }
            this.component(logComponent);
        }

        logLevel(level: LOG_LEVEL) {
            this.bind(EXAMPLE_LOG_BINDINGS.APP_LOG_LEVEL).to(level);
        }
    };
}
