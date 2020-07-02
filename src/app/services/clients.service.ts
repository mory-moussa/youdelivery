import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from '../models/client.model';


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
    
  }
  getCLients(){
   
  }
  getSingleClient(id: number) {
    
  }
}
