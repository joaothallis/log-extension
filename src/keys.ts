import { BindingKey, CoreBindings } from '@loopback/core';
import { LogComponent } from './component';

/**
 * Binding keys used by this component.
 */
export namespace EXAMPLE_LOG_BINDINGS {
    export const APP_LOG_LEVEL =
        BindingKey.create<LOG_LEVEL>('example.log.level');
    export const TIMER = BindingKey.create<TimerFn>('example.log.timer');
    export const LOGGER = BindingKey.create<LogWriterFn>('example.log.logger');
    export const LOG_ACTION = BindingKey.create<LogFn>('example.log.action');
}

/**
 * Enum to define the supported log levels
 */
export enum LOG_LEVEL { DEBUG, INFO, WARN, ERROR, OFF, }
