import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlDirective } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

import * as _rollupMoment from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DevisComponent implements OnInit {

  form: FormGroup;

  constructor() { const date = new FormControl(moment()); }



  ngOnInit() {

    this.form = new FormGroup({
      departureDate: new FormControl(),
      departureTime: new FormControl(),
      departureStreet: new FormControl(),
      departureNumber: new FormControl(),
      departureBox: new FormControl(),
      departureZip: new FormControl(),
      departureCity: new FormControl(),
      departureCountry: new FormControl(),
      backDate: new FormControl(),
      backTime: new FormControl(),
      backStreet: new FormControl(),
      backNumber: new FormControl(),
      backBox: new FormControl(),
      backZip: new FormControl(),
      backCity: new FormControl(),
      backCountry: new FormControl()
    });
  }
}
