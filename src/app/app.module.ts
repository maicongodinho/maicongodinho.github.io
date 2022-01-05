import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from 'carbon-components-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
