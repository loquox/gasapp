import { Component, inject, OnInit, ViewChild} from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Env } from 'ionicons/dist/types/stencil-public-runtime';
import { UpploalImageComponent } from 'src/app/componets/upploal-image/upploal-image.component';
import { Producto } from 'src/app/model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-set-products',
  templateUrl: './set-products.component.html',
  styleUrls: ['./set-products.component.scss'],
})
export class SetProductsComponent  implements OnInit {

  firestoreService= inject(FirestoreService);

  name!:string;
  precio!:number;
  public menucontroller= inject(MenuController);
  public loadingController = inject(LoadingController);
  public toastController = inject(ToastController);
  public alertController = inject(AlertController);
  public supabaseServive = inject(SupabaseService);

  private path = 'Productos';
  producto!:Producto;
  productos:Producto[]=[];
  enableNewProducto = false;
  enableImage= false;
  loading:any;
  newImage= '';
  newFile!:File;
  editar!:boolean;

  @ViewChild(UpploalImageComponent) uploadImageComponent!: UpploalImageComponent;

  
  constructor() {}

  ngOnInit() {
    this.getProducts();
    this.enableImage=true;
    this.editar=false;
       
  }
  
  openMenu(){
    console.log('abriendo menu');
    this.menucontroller.toggle('principal');
  }

  async guardarProducto(){
    this.showLoading();
    const path = 'Productos';
    const name = this.producto.nombre;
    const res = await this.supabaseServive.uploadImage(path,this.newFile,name,this.editar).then(
      res => {
        this.producto.foto= res.data.publicUrl;
      },
      error => {console.log('El error es ', error)}
    );
       
      this.firestoreService.createDoc(this.producto,this.path,this.producto.id).then(
        res => {
          this.loading.dismiss();
          this.presentToast('guardado con exito');
          this.enableNewProducto=false;
          this.enableImage=false;
        }
      ).catch(
        error => {
          this.presentToast('No se pudo guardar ');
        }
      );

  }

  getProducts(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe(
      res => {
       this.productos = res;
      }
    )
  }

  

  nuevo(){
    this.enableNewProducto= true;
    this.editar= false;
    this.producto= {
      id:this.firestoreService.getId(),
      nombre: '',
      precio: undefined,
      precioReducido: undefined,
      foto:'',
      fecha:new Date()
    }
  }


  async showLoading() {
     this.loading = await this.loadingController.create({
      cssClass: 'normal',
      message: 'guardando...',
    });
    await this.loading.present();
  
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



  triggerNewImageUpload(event:Event){
    this.enableImage=true;
    if(this.uploadImageComponent){
      this.uploadImageComponent.newImageUpload(event);
    }
  }

  guardarImagen(event:File){
    this.newFile= event;

  }


  editarProducto(producto:Producto){
    this.producto= producto;
    console.log(producto.foto);
    this.enableNewProducto = true;
    this.enableImage=true;
    this.editar= true;
    }

}
