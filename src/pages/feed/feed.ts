import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario:string = "Paulo Cruz";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  somanumeros(): void{
    //alert("Teste de funcao");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somanumeros();
  }

}
