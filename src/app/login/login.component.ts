import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestapiService } from './../services/restapi.service';
import { Router } from '@angular/router';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorOccurred: Boolean;
  errorMessage: String;

  constructor(private restapiService: RestapiService, private router: Router) {

    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^\S+@\S+\.\S+$/)]),
      password: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
    this.errorOccurred = false;
    this.errorMessage = '';
  }

  /**
   * Submit of login form
   */
  submitForm() {

    this.restapiService.login(this.loginForm.value).subscribe(data => {

      /* If an error occurred during login (user not found, not correct pwd,...) */
      if (data.output !== undefined) {

        this.errorOccurred = true;
        this.errorMessage = data.output.payload.message;

        setTimeout(() => {
          this.errorOccurred = false;
        }, 3000);

      } else {
        /* if data are correct */
        const user = data.user;

        this.restapiService.signin();
        this.restapiService.user = user;

        if (user.pwd_changed === false) {
          this.router.navigate(['/passwordNew']);
        } else {
          this.router.navigate(['/admin']);
        }
      }

    });
  }

}
