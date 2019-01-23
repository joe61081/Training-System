import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
