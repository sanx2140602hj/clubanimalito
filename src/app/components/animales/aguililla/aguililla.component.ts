import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aguililla',
  templateUrl: './aguililla.component.html',
  styles: [
  ]
})
export class AguilillaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  animales(){
    this.router.navigate(['/animales'])
  }
  tigreblanco(){
    this.router.navigate(['/tigreblanco'])
  }
  tigrillo(){
    this.router.navigate(['/tigrillo'])
  }
  tortuga(){
    this.router.navigate(['/tortuga'])
  }
  


}
