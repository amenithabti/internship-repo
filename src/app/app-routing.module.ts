import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: 'authentification', component: AuthentificationComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'home' , component: HomeComponent, canActivate: [AuthenticationGuard]},
  { path: '', component:AuthentificationComponent },
  { path: '**' , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
