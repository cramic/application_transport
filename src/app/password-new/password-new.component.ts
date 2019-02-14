import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RestapiService } from '../services/restapi.service';
import { ValidValidators } from '../validators/valid.vaidator';

@Component({
  selector: 'app-password-new',
  templateUrl: './password-new.component.html',
  styleUrls: ['./password-new.component.scss']
})
export class PasswordNewComponent implements OnInit {

  formNewPassword: FormGroup;
  newPassword: string;
  errorOccurred: boolean;
  errorMessage: string;

  constructor(private restapiService: RestapiService) {

    this.formNewPassword = new FormGroup({
      password : new FormControl('', Validators.required ),
      newPassword : new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmNewPassword : new FormControl('', [Validators.required, Validators.minLength(8)])
    });

  }

  ngOnInit() {
    this.errorOccurred = false;
    this.errorMessage = '';
  }

  async submitForm() {
    const password = this.formNewPassword.controls['password'].value.trim();
    const newPassword = this.formNewPassword.controls['newPassword'].value;
    const confirmNewPassword = this.formNewPassword.controls['confirmNewPassword'].value;


    /* Compare the password with the password in DB */
    this.restapiService.comparePwd(password).subscribe(data => {

      /* If comparing passwords is true */
      if (data) {
        console.log('equals');

        this.errorOccurred = false;

      } else { /* else, display error */
        this.errorOccurred = true;
        this.errorMessage = 'Le mot de passe existant est incorrect';

        setTimeout(() => {
          this.errorOccurred = false;
        }, 3000);
      }

    });


    /* Compare the new password and the confirmation */
    if (newPassword === confirmNewPassword) {

      this.errorOccurred = false;

    } else {
      this.errorOccurred = true;
      this.errorMessage = 'Le nouveau mot de passe et la confirmation doivent être identiques';

      setTimeout(() => {
        this.errorOccurred = false;
      }, 3000);
    }

    /* If no error, call to api to change password in DB */
    if (this.errorOccurred === false) {
      console.log('if no error');
      this.restapiService.updatePassword(newPassword).subscribe(data => {
        console.log('data update', data);
      });
    }
  }

}
