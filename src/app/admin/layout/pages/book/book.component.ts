import { Component, OnInit } from '@angular/core';
import { ThuephongComponent } from 'src/app/client/layout/pages/thuephong/thuephong.component';
import { Order } from 'src/app/models/order.models';
import { RoomService } from 'src/app/services/room.service';

@Component({
  providers: [ThuephongComponent],
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  listOrder:Order[] = []
  constructor(private roomService: RoomService) { }

  
  ngOnInit(): void {
    this.orders()
  }

  index:number = 0

  idCount(i:any){
    this.index = i
  }

  orders(){
      this.roomService.getOrder().then((res:any) => {
          this.listOrder = res
      }).catch(err => {
        alert("Lỗi!")
      })
  }

  

}

