import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  database= inject(AngularFirestore);

  constructor() { }

  createDoc(data: any, path: string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }

  getDoc(path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();
  }

  deleteDoc(path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).delete();

  }

  updateDocu(data:any,path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);


  }

  getId():string{
    return this.database.createId();
  }


  getCollection<tipo>(path: string):Observable<tipo[]>{
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();

  }




}
