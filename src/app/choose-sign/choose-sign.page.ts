import { Input, Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-choose-sign',
  templateUrl: './choose-sign.page.html',
  styleUrls: ['./choose-sign.page.scss']
})
export class ChooseSignPage implements OnInit {
  // "value" passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit() {}
}
