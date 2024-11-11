import { Component, EventEmitter, Input, OnInit,Output,inject } from '@angular/core';
import { Producto } from 'src/app/model';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SupabaseService } from 'src/app/services/supabase.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent  implements OnInit {

  @Input() productos:Producto[]= [];
  public toastController = inject(ToastController);
  public alertController = inject(AlertController);
  public firestoreService= inject(FirestoreService);
  public supbaseService = inject(SupabaseService);
  private path = 'Productos';
  private producto!:Producto;
  private enableNewProducto!:boolean;
  private editar!:boolean;
  private newImage!:string;

  @Output() productEmiter = new EventEmitter<Producto>();



  constructor() { }

  ngOnInit() {}


  eliminarProducto(id:string,producto:Producto){
    this.presentAlertConfirm(id, producto);
  }

  
  editarProducto(producto:Producto){
    this.productEmiter.emit(producto);
     }


  async presentAlertConfirm(id:string, producto:Producto){
    const alert = await this.alertController.create(
      {
        cssClass:'normal',
        header: 'Advertencia',
        message: `Seguro desea eliminar`,
        buttons:[
          {
            text:'cancelar',
            role: 'Cancel',
            cssClass:'normal',
            handler:() =>{}
          },
          {
            text:'Ok',
            handler:() => {
              this.firestoreService.deleteDoc(this.path, id).then(
                res => {
                  this.presentToast('eliminado con éxito');
                }
              ).catch(
                error =>{
                  this.presentToast('No se ha podido eliminar');
                }
              );
              this.supbaseService.deleteImage(this.path,producto.nombre);
              
            }
          }
        ]
      }
    );
    await alert.present();
  }


  async presentToast(msg:string) {
    const toast = await this.toastController.create(
      {
        message: msg,
        cssClass: 'normal, custom-toast',
        duration: 2000,
        position: 'top'
      }
    );
    toast.present();
  }


}
