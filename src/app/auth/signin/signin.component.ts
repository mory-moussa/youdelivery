import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { Login } from '../../models/login';
import { getMaxListeners } from 'process';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;
  returnUrl: string;
  model: Login = { email: "mmcamara30@gmail.com", password: "diourbel"};
  client: Client= new Client("camara","mory moussa","mmcamara30@gmail.com",477,"dakar");
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
    this.returnUrl = '../../client/dashbord';
    this.authService.logout();
  }
 get f() { return this.signinForm.controls;}
  onSubmit() {
    if (this.signinForm.invalid) {  
      return;  
   }  
   else {  
      if (this.f.email.value == this.model.email && this.f.password.value == this.model.password) {  
      console.log("Login successful");  
      //this.authService.authLogin(this.model);  
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', this.f.email.value);  
      localStorage.setItem('nom', "camara");
      localStorage.setItem('prenom',this.client.prenom);
      localStorage.setItem('email',this.client.email);
      localStorage.setItem('telephone','0845559555');
      localStorage.setItem('ville',this.client.adresse);
      this.router.navigate([this.returnUrl]);  
      }  
   else {  
      this.errorMessage = "Please check your userid and password";  
      }  
     }  
  } 
  }


