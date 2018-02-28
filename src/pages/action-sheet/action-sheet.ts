import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  abrirActionSheet() {
    let actionsheet = this.actionSheetCtrl.create ({
      title: 'Opções',
      buttons: [
        {
          icon: 'md-create',
          text: 'Opção A',
          role: 'destructive',
          handler: () => {
            alert('Opção A clicked');
          }
        },{
          icon: 'basket',
          text: 'Archive',
          handler: () => {
            alert('Opção B clicked');
          }
        },{
          icon: 'md-exit',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert('Opção C clicked');
          }
        }
      ]
    });
    actionsheet.present();
  }

  ionViewDidLoad() {
    
  }

}
