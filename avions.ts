import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  imports: [DatePipe, RouterLink],
  templateUrl: './avions.html',
  styleUrl: './avions.css'
})
export class Avions {
  avions : Avion[];

  constructor(private avionService : AvionService) {
    this.avions = avionService.listeAvions();
  }

  supprimerAvion(a : Avion) {
    this.avionService.supprimerAvion(a);
  }
}
