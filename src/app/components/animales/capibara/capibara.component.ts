import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-capibara',
  templateUrl: './capibara.component.html',
  styles: [
  ]
})
export class CapibaraComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animales(){
    this.router.navigate(['/animales'])
  }
  ciervo(){
    this.router.navigate(['/ciervo'])
  }
  chachalaca(){
    this.router.navigate(['/chachalaca'])
  }
  caracara(){
    this.router.navigate(['/caracara'])
  }

}
