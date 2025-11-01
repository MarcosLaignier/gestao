import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../../angular.material.module";
import {ToolbarFilterComponent} from "./toolbar-filter-component/toolbar.filter.component";
import {GridComponent} from "./grid-column-component/grid.component";
import {CommonModule} from "@angular/common";
import {SideBarComponent} from "./side-bar-component/side.bar.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    ToolbarFilterComponent,
    GridComponent,
    SideBarComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterLink,


  ],
  exports:[
    ToolbarFilterComponent,
    GridComponent,
    SideBarComponent,
  ],
  providers: [
  ],
})
export class ComponentsCommonsModule { }
