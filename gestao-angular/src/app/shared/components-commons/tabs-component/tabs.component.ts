import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    if (this.tabs.length > 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }
}
