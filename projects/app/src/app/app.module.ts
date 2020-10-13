import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRoosterjsModule } from 'projects/ngx-roosterjs/src/lib/ngx-roosterjs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRoosterjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
