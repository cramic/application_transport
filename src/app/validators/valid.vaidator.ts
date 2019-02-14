import { AbstractControl } from '@angular/forms';
import { RestapiService } from '../services/restapi.service';

export class ValidValidators {

  static pwdExists(restapiService: RestapiService) {
    return (control: AbstractControl) => {
      console.log('value: ', control.value);
    };
  }

}

