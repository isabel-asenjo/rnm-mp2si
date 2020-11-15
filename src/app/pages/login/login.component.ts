import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }


  ngOnInit(): void {
  }

  googleLogin(): void{
    this.authService.googleLogin().then(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['']);
      }
    }).catch((err) => console.log(err));
  }

}
