import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  createForm: FormGroup;
  errorMessage: string;
  alert: boolean=false;
 
  constructor(
               private formBuilder:FormBuilder,
               private router: Router,private authService: AuthService) { }
 
  ngOnInit() {
    this.initForm();
  }
 
  initForm(){
    this.createForm= this.formBuilder.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      
      telephone:['',[Validators.required,Validators.pattern(/[0-9]{9}/)]],
      adresse:['',Validators.required]
    }
    );
  }
 
  onSubmit(){
    const nom = this.createForm.get('nom').value;
    const prenom = this.createForm.get('prenom').value;
    const email = this.createForm.get('email').value;
    const telephone = this.createForm.get('telephone').value;
    const adresse = this.createForm.get('adresse').value;
    this.alert= true;
    this.authService.signup(nom,prenom,email,telephone,adresse)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
   
  }
}
