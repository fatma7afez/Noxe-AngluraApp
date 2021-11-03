import { PeopleComponent } from './people/people.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MoviesComponent } from './movies/movies.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'tvshows', canActivate: [AuthGuard], component: TvshowsComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },

  {
    path: 'moviedetails/:id',
    canActivate: [AuthGuard],
    component: MoviesdetailsComponent,
  },
  {
    path: 'seriedetails/:id',
    canActivate: [AuthGuard],
    component: TvdetailsComponent,
  },
  {
    path: 'persondetails/:id',
    canActivate: [AuthGuard],
    component: PersondetailsComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
