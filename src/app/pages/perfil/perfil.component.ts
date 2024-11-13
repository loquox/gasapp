import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { UpploalImageComponent } from 'src/app/componets/upploal-image/upploal-image.component';
import { Cliente } from 'src/app/model';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {
editar!: boolean;
public newFile!:File;



  cliente:Cliente= {
    uid:'',
    nombre:'',
    email:'',
    celular:'',
    foto:'',
    referencia: '',
    ubicacion:'',
  }

  enableImage!:boolean;
  enableNewClient!:boolean;



  @ViewChild(UpploalImageComponent) uploadImageComponent!: UpploalImageComponent;

  private menucontroller=inject(MenuController);
  private firebaseAuthService = inject(FirebaseAuthService);
  private supabaseServive = inject(SupabaseService);
  private firestoreService = inject(FirestoreService);

  enableNewProducto: any;

  constructor() { }

  async ngOnInit() {
    this.enableImage=true;

    const res = await this.firebaseAuthService.getUid()
    console.log('el id es ' , res);

  
  }

  openMenu() {
    this.menucontroller.toggle('principal');

  }


  triggerNewImageUpload(event:Event){
    this.enableImage=true;
    if(this.uploadImageComponent){
      this.uploadImageComponent.newImageUpload(event);
    }
  }


  async registrarse(){

    const credenciales = {
      email:this.cliente.email,
      password: this.cliente.celular,
    };
    const res = await this.firebaseAuthService.registrar(credenciales.email, credenciales.password).catch(
      err => {console.log('Error : ', err)}
    );
    const uid = await this.firebaseAuthService.getUid();
    this.cliente.uid = uid;
    this.guardarUser();
  }

  async guardarUser(){
    
    const path = 'Clientes';
    const name = this.cliente.nombre;
    if(this.newFile != undefined){
    const res = await this.supabaseServive.uploadImage(path,this.newFile,name,this.editar).then(
      res => {
        this.cliente.foto= res.data.publicUrl;
      },
      error => {console.log('El error es ', error)}
    );
  }
      this.firestoreService.createDoc(this.cliente,path,this.cliente.uid).then(
        res => {console.log('guardado con exito')},
        error => {console.log(error)}
      );

  }

  async salir(){
    
    const res = await this.firebaseAuthService.logout();
  }


  guardarImagen(event: File) {
    this.newFile=event;
    }

}
