import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule

  ],
  exports: [
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
