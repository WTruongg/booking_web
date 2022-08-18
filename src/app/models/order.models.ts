import { Room } from "./room.models";
import { accUser } from "./user.models";

export class Order{
    id:number = 0;
    method:string = "Trực tiếp";
    room:Room[] = []
    customer: accUser = new accUser;
    constructor (id:number, room:Room[], customer:accUser) {
        this.id = id
        this.room = room
        this.customer = customer
    }
}