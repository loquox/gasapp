import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpploalImageComponent } from '../componets/upploal-image/upploal-image.component';



@NgModule({
  declarations: [UpploalImageComponent],
  imports: [
    CommonModule
  ],
  exports: [UpploalImageComponent]

})
export class SharedModuleModule { }
