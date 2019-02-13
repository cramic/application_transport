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

  constructor(private restapiService: RestapiService) {

    this.formNewPassword = new FormGroup({
      password : new FormControl('', [Validators.required, this.pwdExists.bind(this)] ),
      newPassword : new FormControl('', Validators.required),
      confirmNewPassword : new FormControl('', Validators.required)
    });

  }

  ngOnInit() {

  }

  pwdExists(control: AbstractControl) {
    console.log('user', this.restapiService.user);
    console.log(control.value, this.restapiService.user.password, this.restapiService.user.password === control.value);
    return this.restapiService.user.password === control.value;
  }

}
