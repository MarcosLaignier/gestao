import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ],
  exports: [
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ]
})
export class AngularMaterialModule { }
