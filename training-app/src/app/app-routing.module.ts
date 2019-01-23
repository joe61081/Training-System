import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = [
  {path:'trainings', component:TrainingComponent},
  {path:'participants', component:ParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
