import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-example-1',
  templateUrl: './example-1.component.html',
  styleUrls: ['./example-1.component.scss']
})
export class Example1Component implements OnInit {

  constructor(private RouterModule: Router) { }

  ngOnInit() {
  }

}
