import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';

import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';
import {errorInterceptor} from "./app/shared/utils/service/error.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([errorInterceptor])
    ),
    provideAnimations()
  ]
}).catch(err => console.error(err));
