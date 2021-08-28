import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  async submit() {
    
    try {
      const response = await this.auth.getToken(this.user);
      this.auth.setTokenInfo(response);
      this.route.navigate(['/user']);
    } catch (error) {
      if (error.status === 500) {
        alert("An error has occured!")
      }
    }
  }
}
