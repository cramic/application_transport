import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PasswordNewComponent } from './password-new/password-new.component';
import { DevisComponent } from './devis/devis.component';
import { AdministrationComponent } from './administration/administration.component';
import { ContactComponent } from './contact/contact.component';
import { AgencyComponent } from './agency/agency.component';
import { FleetComponent } from './fleet/fleet.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'passwordRecovery', component: PasswordRecoveryComponent },
  { path: 'passwordNew', component: PasswordNewComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'agency', component: AgencyComponent },
  { path: 'fleet', component: FleetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['home']);
    };
  }
}
