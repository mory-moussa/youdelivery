import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  editForm: FormGroup;
  errorMessage: string;
  nom: string;
  ville: string;
  villes: string[] = ['dakar','thies','diourbel'];
  
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.nom = localStorage.getItem('nom');
    this.ville = localStorage.getItem('ville');
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      nom: [localStorage.getItem('nom'), [Validators.required]],
      prenom: [localStorage.getItem('prenom'), [Validators.required]],
      email: [localStorage.getItem('email'), [Validators.required, Validators.email]],
      ville: [localStorage.getItem('ville'), [Validators.required]],
      telephone: [localStorage.getItem('telephone'), [Validators.required]]
    });
  }
 get f() { return this.editForm.controls;}
  onSubmit() {
    
   }
}
