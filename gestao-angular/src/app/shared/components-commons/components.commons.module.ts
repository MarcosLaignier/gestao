import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../../angular.material.module";
import {ToolbarComponent} from "./toolbar-filter-component/toolbar.component";
import {GridComponent} from "./grid-column-component/grid.component";
import {CommonModule} from "@angular/common";
import {SideBarComponent} from "./side-bar-component/side.bar.component";
import {RouterLink} from "@angular/router";
import {TextBoxComponent} from "./text-box-component/text.box.component";
import {FormsModule} from "@angular/forms";
import {DateBoxComponent} from "./date-box-component/date.box.component";
import {SelectEnumComponent} from "./select-enum-component/select.enum.component";
import {AlertComponent} from "./alert-component/alert.component";

@NgModule({
  declarations: [
    ToolbarComponent,
    GridComponent,
    SideBarComponent,
    TextBoxComponent,
    DateBoxComponent,
    SelectEnumComponent,
    AlertComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterLink,
    FormsModule,

  ],
  exports:[
    ToolbarComponent,
    GridComponent,
    SideBarComponent,
    TextBoxComponent,
    DateBoxComponent,
    SelectEnumComponent,
    AlertComponent
  ],
  providers: [
  ],
})
export class ComponentsCommonsModule { }
