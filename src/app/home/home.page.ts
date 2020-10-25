import { Component } from '@angular/core';
import * as Items from '../data/items';
import { ToastController } from '@ionic/angular';
import { Router } from  "@angular/router";
import { ShoppingCartService } from "../services/shopping-cart.service";
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public itemsData : any; 

  constructor( private  router:  Router,
    public toastController: ToastController,
    private scService: ShoppingCartService,
    public modalController: ModalController ) { } 

  async presentToast(toastMssg) {
    const toast = await this.toastController.create({
      message: toastMssg,
      duration: 2000
    });
    toast.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'itemList': this.itemsData,
      }
    });
    // const { data } = await modal.onWillDismiss();
    return await modal.present();
  }
  

  ngOnInit(): void {
    this.itemsData = Items.ITEMS;
  }

  addItem(item): void {
    item.selected = true;
    this.presentToast("Item añadido al carrito");
  }

  deleteItem(item): void {
    item.selected = false;
    this.presentToast("Item eliminado del carrito");
  }


  checkout(): void {
    
    this.presentModal();
  }
}

