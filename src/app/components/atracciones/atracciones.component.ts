import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atracciones',
  templateUrl: './atracciones.component.html',
  styles: [
  ]
})
export class AtraccionesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  felinos(){
    this.router.navigate(['/felinos'])
  }
  taiga(){
    this.router.navigate(['/taiga'])
  }
  herpetario(){
    this.router.navigate(['/herpetario'])
  }
  estepa(){
    this.router.navigate(['/estepa'])
  }
  aviario(){
    this.router.navigate(['/aviario'])
  }
  monos(){
    this.router.navigate(['/monos'])
  }

}
