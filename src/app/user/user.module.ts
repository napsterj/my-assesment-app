import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { UserDetailsService } from './shared/user-details.service';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,    
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    SignUpComponent
  ],
  providers: [UserDetailsService]
})
export class UserModule { }
