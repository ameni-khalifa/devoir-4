import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';
import { AvionService } from '../services/avion.service';

@Component({
  imports: [FormsModule],
  selector: 'app-add-avion',
  templateUrl: './add-avion.html',
  styleUrl: './add-avion.css'
})
export class AddAvion implements OnInit {
  newAvion = new Avion();
  compagnies! : Compagnie[];
  newIdComp! : number;
  newCompagnie! : Compagnie;

  constructor(private avionService : AvionService,
              private router : Router) { }

  ngOnInit() {
    this.compagnies = this.avionService.listeCompagnies();
    this.newIdComp = this.compagnies[0].idComp;
  }

  addAvion() {
    this.newCompagnie = this.avionService.consulterCompagnie(this.newIdComp);
    this.newAvion.compagnie = this.newCompagnie;
    this.avionService.ajouterAvion(this.newAvion);
    this.router.navigate(['avions']);
  }
}
