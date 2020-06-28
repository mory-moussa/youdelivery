import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes ,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { HeroComponent } from './component/hero/hero.component';
import { AboutComponent } from './component/about/about.component';
import { FactsComponent } from './component/facts/facts.component';
import { ServicesComponent } from './component/services/services.component';
import { CallComponent } from './component/call/call.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { TeamComponent } from './component/team/team.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DashbordComponent } from './client/dashbord/dashbord.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ProfilComponent } from './client/profil/profil.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { SingleClientComponent } from './client/single-client/single-client.component';
import { DemandeComponent } from './livraision/demande/demande.component';
import { SuiviComponent } from './livraision/suivi/suivi.component';
import { HistoriqueComponent } from './livraision/historique/historique.component';
const appRoutes: Routes = [

  { path: 'acceuil', component: HeroComponent},
  { path: 'about', component: AboutComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'call', component: CallComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'client/dashbord', component: DashbordComponent},
  { path: 'client/profil', component: ProfilComponent},
  { path: 'client/demande', component: DemandeComponent},
  { path: 'client/suivi', component: SuiviComponent},
  { path: 'client/historique', component: HistoriqueComponent},
  { path: '**', redirectTo: 'acceuil', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    ServicesComponent,
    CallComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    DashbordComponent,
    PrincipalComponent,
    ProfilComponent,
    ClientListComponent,
    SingleClientComponent,
    DemandeComponent,
    SuiviComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
