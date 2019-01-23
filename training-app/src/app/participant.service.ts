import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Participant } from './participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  rootURL: string

  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/participants"
   }

   getParticipants():Observable<Participant[]>{
    return this.httpsvc.get<Participant[]>(this.rootURL+"/list")
  }

  deleteParticipants(participantId:number):Observable<Participant>{
    return this.httpsvc.request<Participant>("DELETE",this.rootURL+ "/delete",{
      headers: new HttpHeaders({'Content-Type':'text/plain'}),
      body: participantId
    })
   }

   addNewParticipant(newParticipant:Participant):Observable<Participant>{
    const httpOpts ={
      headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'})
    }
    var reqBody = "name="+newParticipant.name+"&department="+newParticipant.department
    return this.httpsvc.post<Participant>(this.rootURL+"/register", reqBody, httpOpts)
   } 
}
