import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-caracara',
  templateUrl: './caracara.component.html',
  styles: [
  ]
})
export class CaracaraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animales(){
    this.router.navigate(['/animales'])
  }
  cabra(){
    this.router.navigate(['/cabra'])
  }
  capibara(){
    this.router.navigate(['/capibara'])
  }
  cacatua(){
    this.router.navigate(['/cacatua'])
  }

}
