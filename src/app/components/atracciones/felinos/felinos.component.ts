import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-felinos',
  templateUrl: './felinos.component.html',
  styles: [
  ]
})
export class FelinosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  atracciones(){
    this.router.navigate(['/atracciones'])
  }

}
