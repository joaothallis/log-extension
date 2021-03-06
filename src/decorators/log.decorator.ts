import { LOG_LEVEL, EXAMPLE_LOG_BINDINGS } from '../keys';
import {
    Constructor, MethodDecoratorFactory, MetadataInspector,
} from '@loopback/core';
import { LevelMetadata } from '../type';

/**
 * Mark a controller method as requiring logging (input, output & timing)
 * if it is set at or greater than Application LogLevel.
 * LOG_LEVEL.DEBUG < LOG_LEVEL.INFO < LOG_LEVEL.WARN < LOG_LEVEL.ERROR < LOG_LEVEL.OFF
 *
 * @param level - The Log Level at or above it should log
 */
export function log(level?: number) {
    if (level === undefined) level = LOG_LEVEL.WARN;
    return MethodDecoratorFactory.createDecorator<LevelMetadata>(EXAMPLE_LOG_BINDINGS.METADATA, { level, },);
}

/**
 * Fetch log level stored by `@log` decorator.
 *
 * @param controllerClass - Target controller
 * @param methodName - Target method
 */
export function getLogMetadata(controllerClass: Constructor<{}>,
    methodName: string,): LevelMetadata {
    return (MetadataInspector.getMethodMetadata<LevelMetadata>(EXAMPLE_LOG_BINDINGS.METADATA, controllerClass.prototype, methodName,) || { level: LOG_LEVEL.OFF });
}
