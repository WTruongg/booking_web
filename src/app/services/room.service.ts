import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BaseService {


  constructor(httpClient:HttpClient) {
    super(httpClient)
  }

  getRoomItem()
  {
    return this.get("rooms");
  }

  getUser(){
    return this.get("usersRegister")
  }

  getRoomItemSortAsc(){
    return this.get("rooms?_sort=price")
  }

  getRoomItemSortDesc(){
    return this.get("rooms?_sort=price&_order=desc")
  }

  getOrder(){
    return this.get("listOrder")
  }
  
}
