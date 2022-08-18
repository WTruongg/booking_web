import { Component, OnInit } from '@angular/core';
import { accUser } from 'src/app/models/user.models';
import { RoomService } from 'src/app/services/room.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsers: accUser[] = []
  constructor(private RoomService: RoomService) { }

  ngOnInit(): void {
    this.loadListRoom()
  }

  loadListRoom() {
    this.RoomService.getUser().then((res: any) => {
      this.listUsers = res;
    })
  }

}
