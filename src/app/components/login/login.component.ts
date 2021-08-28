import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.auth.getToken(this.user);
    console.log(this.user);
  }
}
