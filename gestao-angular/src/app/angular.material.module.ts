import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTableModule,

  ],
  exports: [
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTableModule,
  ]
})
export class AngularMaterialModule { }
