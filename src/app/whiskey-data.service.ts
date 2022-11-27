import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Whiskey } from './whiskey-list/Whiskey';

const URL = 'https://638373866e6c83b7a993f621.mockapi.io/whiskeys';

@Injectable({
  providedIn: 'root'
})
export class WhiskeyDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Whiskey[]> {
    // fetch('url', {method: 'GET'})
    return this.http.get<Whiskey[]>(URL)
    .pipe(
      tap((whiskey: Whiskey[]) => whiskey.forEach(whiskey => whiskey.quantity = 0))
    );
  }
}
