import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components-commons/side-bar-component/side.bar.component';
import {AlertComponent} from "./shared/components-commons/infra/alert-component/alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBarComponent,
    AlertComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestao-angular';

  sidebarOpen = true;

}
