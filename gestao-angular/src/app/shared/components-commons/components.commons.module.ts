import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../../angular.material.module";
import {ToolbarFilterComponent} from "./toolbar-filter-component/toolbar.filter.component";
import {GridComponent} from "./grid-column-component/grid.component";
import {CommonModule} from "@angular/common";
import {SideBarComponent} from "./side-bar-component/side.bar.component";
import {RouterLink} from "@angular/router";
import {TextBoxComponent} from "./text-box-component/text.box.component";
import {FormsModule} from "@angular/forms";
import {DateBoxComponent} from "./date-box-component/date.box.component";

@NgModule({
  declarations: [
    ToolbarFilterComponent,
    GridComponent,
    SideBarComponent,
    TextBoxComponent,
    DateBoxComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterLink,
    FormsModule,


  ],
  exports:[
    ToolbarFilterComponent,
    GridComponent,
    SideBarComponent,
    TextBoxComponent,
    DateBoxComponent
  ],
  providers: [
  ],
})
export class ComponentsCommonsModule { }
