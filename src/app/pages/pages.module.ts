import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { UpploalImageComponent } from '../componets/upploal-image/upploal-image.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
   
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    SharedModuleModule
  
]
})
export class PagesModule { }
