import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  auth= inject(AngularFireAuth);

  constructor() {
    this.getUid();
    
   }

  login(email:string, password:string){
   return this.auth.signInWithEmailAndPassword(email, password);

  }

  logout(){
    return this.auth.signOut;
    console.log()
  }

  registrar(email:string, password:string){
   return  this.auth.createUserWithEmailAndPassword(email, password);
  }

  async getUid(){
    const user = await this.auth.currentUser;
    return user?.uid===null ? null  : user?.uid;
  }
  
}
