import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participants:Participant[]

  constructor(private participantService:ParticipantService) { 
    this.participants=[]
  }

  addNewParticipant(newParticipant:Participant){
    this.participantService.addNewParticipant(newParticipant).subscribe(
      res => {this.participantService.getParticipants().subscribe(
        res => {this.participants=res}
      )}
    )
  }

  deleteParticipant(index:number){
    this.participantService.deleteParticipants(index).subscribe(
     res =>{
       this.participantService.getParticipants().subscribe(
         res => {this.participants = res}
       )
     }
    )
  }

  ngOnInit() {
    this.participantService.getParticipants().subscribe(
      res=> {this.participants=res}
    )
  }

}
