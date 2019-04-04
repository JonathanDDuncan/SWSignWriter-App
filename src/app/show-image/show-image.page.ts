import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  @Input() imagebase64: string;

  constructor() { }

  ngOnInit() {
    
  }

}
