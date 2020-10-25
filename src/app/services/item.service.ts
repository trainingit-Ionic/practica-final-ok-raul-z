import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from 'src/app/model/item';
import { ITEMS } from 'src/app/data/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  get(): Observable<Item[]> {
    return of(ITEMS).pipe(delay(1000));
  }

  getOne(id: number): Observable<Item> {
    let users = ITEMS;
    let user = users.find( (u) => u.id == id );
    return of(user).pipe(delay(1000));
  }

  
}
