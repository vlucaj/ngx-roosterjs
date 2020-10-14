import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRoosterjsComponent } from './ngx-roosterjs.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RibbonButtonComponent } from './ribbon/ribbon-button/ribbon-button.component';

@NgModule({
  declarations: [
    NgxRoosterjsComponent, 
    RibbonComponent, 
    RibbonButtonComponent
  ],
  imports: [CommonModule],
  exports: [NgxRoosterjsComponent]
})
export class NgxRoosterjsModule {}
