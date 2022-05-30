import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabra',
  templateUrl: './cabra.component.html',
  styles: [
  ]
})
export class CabraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animales(){
    this.router.navigate(['/animales'])
  }
  jaguar(){
    this.router.navigate(['/jaguar'])
  }
  lemur(){
    this.router.navigate(['/lemur'])
  }
  leon(){
    this.router.navigate(['/leon'])
  }

}
