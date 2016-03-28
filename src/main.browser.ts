/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/devtools';

/*
* Platform and Environment
* our providers/directives/pipes
*/
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';

/*
* App Component
* our top level component that holds all of our components
*/
import {App, reducer} from './app/app';



let APP_PROVIDERS = [
  provideStore({ count: reducer }),
  instrumentStore()
];

bootstrap(App, [
  ...ENV_PROVIDERS,
  ...PROVIDERS,
  ...DIRECTIVES,
  ...PIPES,
  ...APP_PROVIDERS,
])
.catch(err => console.error(err));
