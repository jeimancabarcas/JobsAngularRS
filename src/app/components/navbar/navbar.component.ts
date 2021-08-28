import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userInfo: UserInfo | undefined;

  constructor(private auth: AuthService, private route: Router) { 
    this.getUserInfo();
  }

  ngOnInit(): void {
  }

  async getUserInfo() {
    const userInfo = await this.auth.getUserInfo();
    this.userInfo = userInfo;
  }

  logOut() {
    this.auth.clearSession();
    this.route.navigateByUrl('/login');
  }

}
