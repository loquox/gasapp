import { Injectable } from '@angular/core';
import {  createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class SupabaseService {

  public supbase!:SupabaseClient;


  constructor(){
    this.supbase = createClient(environment.supabaseConfig.url, environment.supabaseConfig.anonKey);
  }
  
  async uploadImage(path:string,file:File, nombre:string, edit:boolean){
    const filePath = path + '/' + nombre;
    const userId = this.supbase.auth.getUser();
    const data = this.supbase.storage.from('images').upload(filePath, file,{
      cacheControl: '3600',
      upsert: edit
    }
    
    );
    const urlPublic = await this.supbase.storage.from('images').getPublicUrl(filePath);
    return urlPublic;
  }

  







  async inicoSesion(){

    const res = await this.supbase.auth.signInAnonymously().then(
      data =>{ console.log(data)},
      error => {console.log(error)}
   )}
 

  pruebaPromise(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
        console.log('responde la promesa');
        return;
      }, 2000);
      
  });
}

async deleteImage(path:string,nombre:string){
  const filePath = path + '/' + nombre;
  console.log(filePath);
   const data = await this.supbase.storage.from('images').
  remove([filePath]).then(
    res => {console.log('el borrado es ', res)}
   
  )
}




  
}
