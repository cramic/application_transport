import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private restapiService: RestapiService) { }

  ngOnInit() {
    this.restapiService.isLoggedIn().subscribe(data => this.isLoggedIn = data);
  }

}
