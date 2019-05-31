import { TextLibComponent } from '@atmira/text-lib';
import { NgModule } from '@angular/core';
import { FormLibComponent } from './form-lib.component';

@NgModule({
  declarations: [FormLibComponent],
  imports: [TextLibComponent],
  exports: [FormLibComponent]
})
export class FormLibModule { }
