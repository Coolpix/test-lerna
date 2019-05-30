import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-text-lib',
  template: `
    <p>{{customText}}</p>
  `,
  styles: []
})
export class TextLibComponent implements OnInit {

  @Input() customText: string;

  constructor() { }

  ngOnInit() {
  }

}
 