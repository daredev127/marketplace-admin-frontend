import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../../dtos/Credentials';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  credentials: Credentials = new Credentials();

  showError = false;

  login() {
    this.authService.login(this.credentials).subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.router.navigate(['/dashboard']);
      } else {
        this.showError = true;
      }
    });
  }
}
