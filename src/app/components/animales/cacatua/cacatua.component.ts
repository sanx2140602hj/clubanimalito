import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cacatua',
  templateUrl: './cacatua.component.html',
  styles: [
  ]
})
export class CacatuaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animales(){
    this.router.navigate(['/animales'])
  }
  guanaco(){
    this.router.navigate(['/guanaco'])
  }
  guacamaya(){
    this.router.navigate(['/guacamaya'])
  }
  gato(){
    this.router.navigate(['/gato'])
  }

}

