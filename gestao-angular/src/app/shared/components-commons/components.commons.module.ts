import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../../angular.material.module";
import {ToolbarFilterComponent} from "./toolbar-filter-component/toolbar.filter.component";
import {GridColumnComponent} from "./grid-column-component/grid.column.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ToolbarFilterComponent,
    GridColumnComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,


  ],
  exports:[
    ToolbarFilterComponent,
    GridColumnComponent
  ],
  providers: [
  ],
})
export class ComponentsCommonsModule { }
