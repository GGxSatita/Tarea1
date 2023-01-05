import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-para-extras',
  templateUrl: './test-para-extras.page.html',
  styleUrls: ['./test-para-extras.page.scss'],
})
export class TestParaExtrasPage implements OnInit {
  public informacion: Object = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.informacion = this.router.getCurrentNavigation()?.extras.state as Object;
  }

}
