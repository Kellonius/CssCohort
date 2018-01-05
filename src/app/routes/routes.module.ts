import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

// Components //
import { AppComponent } from "../app.component"
import { Example1Component } from "../example-1/example-1.component"
import { Example2Component } from "../example-2/example-2.component"
import { Example3Component } from "../example-3/example-3.component"



@NgModule({
  imports: [
    RouterModule.forRoot([  
      {
        path: 'example1',
        component: Example1Component
      },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: "example2",
        component: Example2Component
    },
      {
        path: 'example3',
        component: Example3Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesModule { }