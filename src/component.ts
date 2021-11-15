import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
} from '@loopback/core';
import {LogComponentBindings} from './keys'
import {DEFAULT_LOPPBACK4_EXAMPLE_LOG_EXTENSION_OPTIONS, LogComponentOptions} from './types';

// Configure the binding for LogComponent
@injectable({tags: {[ContextTags.KEY]: LogComponentBindings.COMPONENT}})
export class LogComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: LogComponentOptions = DEFAULT_LOPPBACK4_EXAMPLE_LOG_EXTENSION_OPTIONS,
  ) {}
}
