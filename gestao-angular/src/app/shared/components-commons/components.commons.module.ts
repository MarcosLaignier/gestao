import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../../angular.material.module";
import {ToolbarFilterComponent} from "./toolbar-filter-component/toolbar.filter.component";
import {GridComponent} from "./grid-column-component/grid.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ToolbarFilterComponent,
    GridComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,


  ],
  exports:[
    ToolbarFilterComponent,
    GridComponent
  ],
  providers: [
  ],
})
export class ComponentsCommonsModule { }
