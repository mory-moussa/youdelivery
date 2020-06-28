import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from '../models/client.model';
import *as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Client[] = [];
  clientsSubject = new Subject<Client[]>();

  constructor() {
    this.getCLients();
  }
  emitClients() {
    this.clientsSubject.next(this.clients);
  }
  saveClients(){
    firebase.database().ref('/clients').set(this.clients);
  }
  getCLients(){
    firebase.database().ref('/clients')
    .on('value',(data: DataSnapshot) =>{
        this.clients =data.val()? data.val() : [];
        this.emitClients();
    }
    );
  }
  getSingleClient(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/clients/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
