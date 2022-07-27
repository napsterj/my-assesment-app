import { NotFoundComponent } from './../not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
 { path:'', component: SignUpComponent },
 { path:'signup', component: SignUpComponent}
]

@NgModule({        
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}