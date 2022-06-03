import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage!: Storage;

  constructor() {
    this.storage = window.localStorage;
   }

  get(key: string){
    return JSON.parse(this.storage.getItem(key)!);
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
