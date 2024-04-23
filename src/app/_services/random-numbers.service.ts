import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {
  baseUrl = '/api/random-numbers'

  constructor(private http: HttpClient) { }

  getRandomNumber(min: number = 0, max: number = 100): Observable<number> {
    let params = new HttpParams();
    params = params.append('min', min.toString());
    params = params.append('max', max.toString());

    return this.http.get(this.baseUrl, { params }).pipe(
      map((response: any) => {
        return response[0] as number;
      })
    );
  }
}
