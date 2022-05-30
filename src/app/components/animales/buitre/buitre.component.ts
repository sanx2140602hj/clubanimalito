import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buitre',
  templateUrl: './buitre.component.html',
  styles: [
  ]
})
export class BuitreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  animales(){
    this.router.navigate(['/animales'])
  }
  liebre(){
    this.router.navigate(['/liebre'])
  }
  mono(){
    this.router.navigate(['/mono'])
  }
  oryx(){
    this.router.navigate(['/oryx'])
  }
}
