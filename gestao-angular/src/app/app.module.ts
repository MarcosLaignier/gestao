import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PessoaService} from "./shared/service/pessoa.service";
import {HttpClientModule} from "@angular/common/http";
import {PessoaCrudComponent} from "../pages/pessoa-component/pessoa.crud.component";
import {AngularMaterialModule} from "./angular.material.module";

@NgModule({
  declarations: [
    AppComponent,
    PessoaCrudComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [
    PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
