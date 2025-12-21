import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  standalone: true,
  template: `
    @if (active) {
      <ng-content />
    }
  `
})
export class TabComponent {
  @Input({ required: true }) title!: string;
  active = false;
}
