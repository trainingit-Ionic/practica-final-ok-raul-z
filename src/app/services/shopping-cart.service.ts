import { Injectable } from '@angular/core';
import	{	Storage	}	from	'@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemList: any = [];
  constructor(
    private	storage:	Storage
  ) { }

  addItemStorage() {

  }
}
