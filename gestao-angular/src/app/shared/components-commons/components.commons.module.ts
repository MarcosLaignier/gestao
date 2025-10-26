import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../../angular.material.module";
import {ToolbarFilterComponent} from "./toolbar-filter-component/toolbar.filter.component";

@NgModule({
  declarations: [
    ToolbarFilterComponent
  ],
  imports: [
    AngularMaterialModule,

  ],
  exports:[
    ToolbarFilterComponent
  ],
  providers: [
  ],
})
export class ComponentsCommonsModule { }
