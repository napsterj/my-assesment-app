import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},  
  {
    path: 'home', 
    children:[
      {
         path:'signup',
         component: SignUpComponent
      }
    ]
  },
  {path: '**', component: NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
