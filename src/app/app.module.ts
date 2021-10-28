import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { FactureComponent } from './components/facture/facture.component';
import { GrapheComponent } from './components/graphe/graphe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActusComponent } from './components/actus/actus.component';

const appRoutes: Routes = [  
  { path: 'facture', component: FactureComponent },
  { path: 'actualite', component: ActusComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    FactureComponent,
    GrapheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
