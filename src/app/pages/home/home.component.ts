import { Component, inject, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public menucontroller= inject(MenuController);

  constructor() { }

  ngOnInit() {}

  openMenu(){
   
    this.menucontroller.toggle('principal');
  }


}
