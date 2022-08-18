import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.models';
import { Room } from 'src/app/models/room.models';
import { RoomService } from 'src/app/services/room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thuephong',
  templateUrl: './thuephong.component.html',
  styleUrls: ['./thuephong.component.scss']
})
export class ThuephongComponent implements OnInit {
  cart: Room[] = []
  room: Room = new Room;
  listRoom: Room[] = [];

  constructor(private RoomService: RoomService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadListRoom();
  }

  reloadPage() {
    window.location.reload();
  }

  loadListRoom() {
    this.RoomService.getRoomItem().then((res: any) => {
      this.listRoom = res;
    }).catch((err) => {
      console.log("Lỗi", err);
    })
  }

  book(item: Room) {
    let flag: boolean = true
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == item.id) {
        alert("Phòng đã có trong danh sách đặt")
        flag = false
        break;
      }
    }
    if (flag) {
      this.cart.push(item)
    }


  }

  xoaphong(i: any) {
    this.cart.splice(i, 1)
  }

  orderLuu: Order[] = []
  thanhtoan() {
    let user = localStorage.getItem('dangnhapLocal')
    if (user != null) {
      let currentUser = JSON.parse(user) // parse: JSON -> OBJECT (js)
      this.RoomService.getOrder().then((res: any) => {
        this.orderLuu = res;
        let id:any = this.orderLuu.slice(-1)[0].id + 1;
        let order: Order = new Order(id, this.cart, currentUser)
        this.http.post<any>("http://localhost:3000/listOrder", order)
          .subscribe((res) => {
            alert("Đã đặt thành công")
          }, err => {
            alert("Có lỗi !")
          })
        this.cart = []
      }).catch((err) => {
        console.log("Lỗi", err);
      })
      console.log(this.orderLuu);


    }
    else {
      alert('Đăng nhập để đặt phòng')
      this.router.navigate(['client/login'])
    }
  }

  asc() {
    this.RoomService.getRoomItemSortAsc().then((res: any) => {
      this.listRoom = res;
    }).catch(err => {
      alert("Sắp xếp không thành công!")
    })
  }


  desc() {
    this.RoomService.getRoomItemSortDesc().then((res: any) => {
      this.listRoom = res;
    }).catch(err => {
      alert("Sắp xếp không thành công!")
    })
  }




}



