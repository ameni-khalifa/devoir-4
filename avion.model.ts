import { Compagnie } from "./compagnie.model";

export class Avion {
    idAvion! : number;
    modele! : string;
    capacite! : number;
    dateMiseEnService! : Date ;
    compagnie! : Compagnie;
}
