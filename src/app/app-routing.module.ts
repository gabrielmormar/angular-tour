import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/detail/hero-detail/hero-detail.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';


const routes: Routes = [
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '', redirectTo: '/form', pathMatch: 'full'
  },
  {
    path: 'detail/:id', component: HeroDetailComponent
  },
  {
    path: 'form', component: NameEditorComponent
  },
  {
    path: 'profile', component: ProfileEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
