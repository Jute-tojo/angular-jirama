import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  connexion(e:Event){
    e.preventDefault()
    this.userService.auth("tojoramaroson5@gmail.com","123450").subscribe((data: {}) => {
      this.data = data;
      if(this.data?._id){
        console.log("TRUE");        
      }else{
        console.log("FALSE");
      }      
    })
  }
  /*
  connexion(e:Event){
    e.preventDefault()
    return this.userService.getUsers().subscribe((data: {}) => {
      this.data = data;
    })
  }*/
}
