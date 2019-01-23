import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Training } from './training';
import { Observable } from '../../node_modules/rxjs';
import { Participant } from './participant';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  rootURL: string

  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/trainings"
   }

   getTrainings():Observable<Training[]>{
    return this.httpsvc.get<Training[]>(this.rootURL+"/list")
  }

  getTrainingParticipants(trainingId:number):Observable<Participant[]>{
    return this.httpsvc.get<Participant[]>(this.rootURL+"/associated?trainingId="+trainingId)
  }

  addNewParticipantToTraining(newAssignment:Training):Observable<Training>{
      const http0pts ={
        headers: new HttpHeaders(
          {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'})
        }
        var reqBody="trainingId="+newAssignment.trainingId+"&participantId="+newAssignment.participantId
  
        return this.httpsvc.post<Training>(
          this.rootURL+"/assign",reqBody,http0pts)
        }


  deleteTraining(trainingId:number):Observable<Training>{
   return this.httpsvc.request<Training>("DELETE",this.rootURL+ "/delete",{
     headers: new HttpHeaders({'Content-Type':'text/plain'}),
     body: trainingId
   })
  }

  addNewTraining(newTraining:Training):Observable<Training>{
   const httpOpts ={
     headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'})
   }
   var reqBody = "title="+newTraining.title+"&location="+newTraining.location+"&date="+newTraining.date
   return this.httpsvc.post<Training>(this.rootURL+"/register", reqBody, httpOpts)
  } 
}
