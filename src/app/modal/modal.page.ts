import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() itemList: any;

  public modalItemList: any = [];
  constructor(
    public modalCtrl: ModalController

  ) { }

  

  ngOnInit() {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].selected) {
        this.modalItemList.push(this.itemList[i]);
      }
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  deleteItem(item) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id == item.id) {
        this.itemList[i].selected = false;
      }  
    }
    for (let i = 0; i < this.modalItemList.length; i++) {
      if (this.modalItemList[i].id == item.id) {
        this.modalItemList.splice(i, 1);
      }  
    }
    
  }

  clearList() {
    this.modalItemList = [];
    for (let i = 0; i < this.itemList.length; i++) {
      this.itemList[i].selected = false;
    }
  }
}
