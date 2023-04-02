import { Inject, Injectable, InjectionToken } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Userdetails } from './userdetails';
import { Products } from './products';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service'
import { Land } from './land';

export const SESSION_SESSION =
new InjectionToken<StorageService>('SESSION_SESSION');
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs:AngularFirestore, @Inject(SESSION_STORAGE) public storage:StorageService) { }
  addUser(user:Userdetails){
    user.id = this.afs.createId();
    this.afs.collection('/user/').add(user);
  }

  addProduct(product:Products){
    product.id = this.afs.createId();
    this.afs.collection('/products/').add(product);
  }

  addWholeProduct(product:Products){
    product.id = this.afs.createId();
    this.afs.collection('/wholesaleproducts/').add(product);
  }

  addLand(land:Land){
    land.id = this.afs.createId();
    this.afs.collection('/land/').add(land);
  }

  addCart(product:Products){
    product.id = this.afs.createId();
    this.afs.collection('/cart/').add(product);
  }

  placeOrder(product:Products){
    product.id = this.afs.createId();
    this.afs.collection('/orders/').add(product);
  }

  getUsers(){
    return this.afs.collection('/user/').snapshotChanges();
}
getland(){
  return this.afs.collection('/land/').snapshotChanges();
}

getOrders(){
  return this.afs.collection('/orders/').snapshotChanges();
}

getAllProductsCart(){
  return this.afs.collection('/cart/').snapshotChanges();
}

deleteProductCart(product:Products){
  return this.afs.collection('/cart/').doc(product.id).delete();
}


getWholeProducts(){
  return this.afs.collection('/wholesaleproducts/').snapshotChanges();
}

getProducts(){
  return this.afs.collection('/products/').snapshotChanges();
}

setSession(key:string, value:any){
  this.storage.set(key,value);
}
getSession(key:string){
  return this.storage.get(key);
}
}