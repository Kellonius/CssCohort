import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Example1Component } from './example-1/example-1.component';
import { Example2Component } from './example-2/example-2.component';
import { Example3Component } from './example-3/example-3.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './Routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
