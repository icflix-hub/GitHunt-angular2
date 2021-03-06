import {Component, Input} from '@angular/core';

@Component({
  selector: 'info-label',
  template: `<span class="label label-info">{{label}}: {{value}}</span>`
})
export class InfoLabelComponent {
  @Input()
  public label;
  @Input()
  public value;
}
