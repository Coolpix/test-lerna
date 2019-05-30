import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-text-lib',
  template: `
    <div>{{customText}}</div>
  `,
  styles: []
})
export class TextLibComponent implements OnInit {

  @Input() customText: string;

  constructor() { }

  ngOnInit() {
  }

}
