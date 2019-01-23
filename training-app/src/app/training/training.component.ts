import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../trainings.service';
import { Training } from '../training';
import { Participant } from '../participant';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  trainings:Training[]
  participants:Participant[]
  isEditable:boolean

  constructor(private trainingService:TrainingsService) { 
    this.trainings=[]
    this.participants=[]
    this.isEditable=false
  }

  addNewTraining(newTraining:Training){
    this.trainingService.addNewTraining(newTraining).subscribe(
      res => {this.trainingService.getTrainings().subscribe(
        res => {this.trainings=res}
      )}
    )
  }

   addNewParticipantToTraining(newAssignment:Training){
     this.trainingService.addNewParticipantToTraining(newAssignment).subscribe(
       res=>{
         this.trainingService.getTrainings().subscribe(
           res=>{this.trainings=res}
         )
       }
     )
   }


  deleteTraining(index:number){
    this.trainingService.deleteTraining(index).subscribe(
     res =>{
       this.trainingService.getTrainings().subscribe(
         res => {this.trainings = res}
       )
     }
    )
  }

  getTrainingParticipants(trainingId:number){
    this.isEditable = !this.isEditable;
    this.trainingService.getTrainingParticipants(trainingId).subscribe(
      res=> {this.participants=res})
  }

  ngOnInit() {
    this.trainingService.getTrainings().subscribe(
      res=> {this.trainings=res}
    )
  }

}
