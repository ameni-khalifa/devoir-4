import { Routes } from '@angular/router';

import { Avions } from './avions/avions';
import { AddAvion } from './add-avion/add-avion';
import { UpdateAvion } from './update-avion/update-avion';

export const routes: Routes = [
  { path: 'avions', component: Avions },
  { path: 'add-avion', component: AddAvion },
  { path: 'update-avion/:id', component: UpdateAvion },
  { path: '', redirectTo: 'avions', pathMatch: 'full' }
];
