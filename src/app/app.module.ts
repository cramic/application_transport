import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DevisComponent } from './devis/devis.component';

import { PasswordNewComponent } from './password-new/password-new.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { AdministrationComponent } from './administration/administration.component';
import { MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './contact/contact.component';
import { AgencyComponent } from './agency/agency.component';
import { FleetComponent } from './fleet/fleet.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    DevisComponent,
    FooterComponent,
    LoginComponent,
    PasswordNewComponent,
    PasswordRecoveryComponent,
    LogoComponent,
    AdministrationComponent,
    ContactComponent,
    AgencyComponent,
    FleetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatMenuModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
