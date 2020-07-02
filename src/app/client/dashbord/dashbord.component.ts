import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
   email: string;
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  this.email = localStorage.getItem('nom');
   console.log(this.email)
  }
  logout(){
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['../../auth/signin']);
  }

}
