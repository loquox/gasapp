import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetProductsComponent } from './set-products/set-products.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UpploalImageComponent } from '../componets/upploal-image/upploal-image.component';
import { ListaProductosComponent } from '../componets/lista-productos/lista-productos.component';



@NgModule({
  declarations: [
    SetProductsComponent,
    UpploalImageComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule, 
    FormsModule,
    CommonModule,
  ]
})
export class BackendModule { }
