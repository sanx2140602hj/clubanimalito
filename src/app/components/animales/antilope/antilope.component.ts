import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antilope',
  templateUrl: './antilope.component.html',
  styles: [
  ]
})
export class AntilopeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  animales(){
    this.router.navigate(['/animales'])
  }
  oso(){
    this.router.navigate(['/oso'])
  }
  pantera(){
    this.router.navigate(['/pantera'])
  }
  pava(){
    this.router.navigate(['/pava'])
  }

}
