import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private hhtp: HttpClient) { }
  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }
  signup(nom: string, prenom:string, email: string,telephone:string,adresse:string){
    console.log(nom, prenom,adresse,email,telephone)
   return this.hhtp.post('http://localhost/Youdelivery/public/api/register',{nom: nom,prenom:prenom,email:email,telephone:telephone,adresse:adresse},
    {headers: new HttpHeaders({'X-Requested-With':'XMLHttpRequest'})});
  }
  signin(email: string, password:string){
    return this.hhtp.post('http://localhost/Youdelivery/public/api/login',{email:email, password: password},
    {headers: new HttpHeaders({'X-Requested-With':'XMLHttpRequest'})}
    );
  }
}
