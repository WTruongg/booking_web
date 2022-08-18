import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.models';
import { RoomService } from 'src/app/services/room.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listroom',
  templateUrl: './listroom.component.html',
  styleUrls: ['./listroom.component.scss']
})
export class ListroomComponent implements OnInit {

  listRoom: Room[] = []
  public addRoomForm !: FormGroup
  constructor(private RoomService: RoomService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadListRoom()
    this.addRoomForm = this.formBuilder.group({
      img : [''],
      rating: [''],
      price: [],
      category: ['']
    })
  }

  addRoom(){
    this.http.post<any>("http://localhost:3000/rooms", this.addRoomForm.value)
    .subscribe(res => {
      alert("Thêm thành công!");
      this.addRoomForm.reset();
    }, err => {
      alert ("Có lỗi")
    })
  }

  loadListRoom() {
    this.RoomService.getRoomItem().then((res: any) => {
      this.listRoom = res;
    })
  }


}
