import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PessoaService} from "./shared/service/pessoa.service";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {AngularMaterialModule} from "./angular.material.module";
import {ComponentsCommonsModule} from "./shared/components-commons/components.commons.module";
import {FormsModule} from "@angular/forms";
import {ErrorInterceptor} from "./shared/utils/service/error.interceptor";
import {DocumentMaskDirective} from "./shared/utils/directives/documento.mask.directive";

@NgModule({ declarations: [
        AppComponent,
        DocumentMaskDirective
    ],
    exports: [
        DocumentMaskDirective
    ],
    bootstrap: [AppComponent], imports: [FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        ComponentsCommonsModule], providers: [
        PessoaService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
