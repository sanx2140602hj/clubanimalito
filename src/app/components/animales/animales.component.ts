import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styles: [
  ]
})
export class AnimalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  aguililla(){
    this.router.navigate(['/aguililla'])
  } /* Clonar con nombre del animal correspondiente */
  antilope(){
    this.router.navigate(['/antilope'])
  }
  buitre(){
    this.router.navigate(['/buitre'])
  }
  cabra(){
    this.router.navigate(['/cabra'])
  }
  cacatua(){
    this.router.navigate(['/cacatua'])
  }
  capibara(){
    this.router.navigate(['/capibara'])
  }
  caracara(){
    this.router.navigate(['/caracara'])
  }
  chachalaca(){
    this.router.navigate(['/chachalaca'])
  }
  ciervo(){
    this.router.navigate(['/ciervo'])
  }
  gato(){
    this.router.navigate(['/gato'])
  }
  guacamaya(){
    this.router.navigate(['/guacamaya'])
  }
  guanaco(){
    this.router.navigate(['/guanaco'])
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
  liebre(){
    this.router.navigate(['/liebre'])
  }
  mono(){
    this.router.navigate(['/mono'])
  }
  oryx(){
    this.router.navigate(['/oryx'])
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
