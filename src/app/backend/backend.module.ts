import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetProductsComponent } from './set-products/set-products.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UpploalImageComponent } from '../componets/upploal-image/upploal-image.component';
import { ListaProductosComponent } from '../componets/lista-productos/lista-productos.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    SetProductsComponent,
    
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CommonModule,
    SharedModuleModule
    
]
})
export class BackendModule { }
