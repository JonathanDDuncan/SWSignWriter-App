import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  @Input() imagebase64: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    
  }

  close() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }
}
