import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  mail:string="";
  password:string="";
  nom:string="";
  prenom:string="";
  phone:string="";
  adresse:string="";
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  addUser() {
    return this.userService.postUser({
      '_id':"fds21",
      'mail':this.mail,
      'password':this.password,
      'nom':this.nom,
      'prenom':this.prenom,
      'phone':this.phone,
      'adresse':this.adresse
    });
  }
}