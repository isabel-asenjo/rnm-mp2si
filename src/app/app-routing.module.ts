import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDeetsComponent } from './pages/character-deets/character-deets.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AuthGuardGuard } from 'src/app/guards/auth-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent },
  { path: 'characters/:p', component: CharactersComponent },
  { path: 'characters/:name', component: CharacterDeetsComponent },
  { path: 'favorites', canActivate:[AuthGuardGuard], component: FavoritesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

