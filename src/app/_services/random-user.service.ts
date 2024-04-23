import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RandomUser } from '../_models/random-user';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get(this.baseUrl).pipe(
      map((response: any) => {
        const user = response.results[0];
        return {
          fullname: `${user.name.first} ${user.name.last}`,
          image: user.picture.thumbnail,
          date: new Date(user.registered.date)
        } as RandomUser;
      })
    );
  }
}
