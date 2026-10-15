import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  avions : Avion[];
  avion! : Avion;
  compagnies : Compagnie[];

  constructor() {
    this.compagnies = [ {idComp : 1, nomComp : "Tunisair"},
                        {idComp : 2, nomComp : "Nouvelair"},
                        {idComp : 3, nomComp : "Air France"}];

    this.avions = [
        { idAvion : 1, modele : "Airbus A320", capacite : 180,
dateMiseEnService : new Date("03/12/2015"), compagnie : {idComp : 1, nomComp : "Tunisair"}},
        { idAvion : 2, modele : "Boeing 737", capacite : 189,
dateMiseEnService : new Date("07/01/2018"), compagnie : {idComp : 2, nomComp : "Nouvelair"}},
        { idAvion : 3, modele : "Airbus A330", capacite : 290,
dateMiseEnService : new Date("11/20/2012"), compagnie : {idComp : 3, nomComp : "Air France"}}
    ];
  }

  listeAvions() : Avion[] {
    return this.avions;
  }

  ajouterAvion( avi : Avion) {
    this.avions.push(avi);
  }

  supprimerAvion( avi : Avion) {
    const index = this.avions.indexOf(avi, 0);
    if (index > -1) {
      this.avions.splice(index, 1);
    }
  }

  consulterAvion(id : number) : Avion {
    this.avion = this.avions.find(a => a.idAvion == id)!;
    return this.avion;
  }

  trierAvions() {
    this.avions = this.avions.sort((n1, n2) => {
      if (n1.idAvion > n2.idAvion) {
        return 1;
      }
      if (n1.idAvion < n2.idAvion) {
        return -1;
      }
      return 0;
    });
  }

  updateAvion(a : Avion) {
    this.supprimerAvion(a);
    this.ajouterAvion(a);
    this.trierAvions();
  }

  listeCompagnies() : Compagnie[] {
    return this.compagnies;
  }

  consulterCompagnie(id : number) : Compagnie {
    return this.compagnies.find(comp => comp.idComp == id)!;
  }
}
