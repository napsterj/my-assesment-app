import { UserDetailsService } from './../shared/user-details.service';
import { EmailValidator } from './../shared/email-validator';
import { NameCheckValidator } from './../shared/name-check-validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User} from './../shared/user';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {  
  user: User;
  userService: Subscription
  constructor(private userDetailsService: UserDetailsService) { }
  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.userService.unsubscribe();
  }

  userDetails = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, EmailValidator()]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])/)])
  }, NameCheckValidator())

  get firstName():any {
    return this.userDetails.controls['firstName']
  }

  get lastName(): any {
    return this.userDetails.controls['lastName']
  }

  get email(): FormControl {
    return this.userDetails.controls['email']
  }

  get password(): FormControl {
    return this.userDetails.controls['password']
  }
  
  onSubmit = () => {
    this.bindModel();
    this.userService = this.userDetailsService
                      .addNewUser(this.user)
                      .subscribe();

    
  }

  private bindModel = () => {
    return this.user = {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                email: this.email.value                
              }
  }

}
