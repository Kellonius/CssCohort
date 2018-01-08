import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-example-4',
  templateUrl: './example-4.component.html',
  styleUrls: ['./example-4.component.scss']
})
export class Example4Component implements OnInit {

  constructor(private RouterModule: Router) { }

  ngOnInit() {
  }

}
