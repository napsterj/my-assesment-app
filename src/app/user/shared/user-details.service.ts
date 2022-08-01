import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  baseUrl: string = "https://demo-api.now.sh/users";

  constructor(private httpClient: HttpClient) { }

  addNewUser = (user: User) : Observable<User>  => {
    return this.httpClient.post<User>(this.baseUrl, user)
  }
}
