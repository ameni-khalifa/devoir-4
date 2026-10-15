import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-update-avion',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-avion.html',
  styleUrl: './update-avion.css'
})
export class UpdateAvion implements OnInit {
  currentAvion = new Avion();
  compagnies! : Compagnie[];
  updatedCompId! : number;

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private avionService : AvionService) { }

  ngOnInit(): void {
    this.compagnies = this.avionService.listeCompagnies();
    this.currentAvion = this.avionService.consulterAvion(this.activatedRoute.snapshot.params['id']);
    this.updatedCompId = this.currentAvion.compagnie.idComp;
  }

  updateAvion() {
    this.currentAvion.compagnie = this.avionService.consulterCompagnie(this.updatedCompId);
    this.avionService.updateAvion(this.currentAvion);
    this.router.navigate(['avions']);
  }
}
