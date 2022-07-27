import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule    
  ],
  exports : [
    SignUpComponent
  ]
})
export class UserModule { }
