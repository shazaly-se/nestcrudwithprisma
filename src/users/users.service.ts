import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "name":"ali",
            "email":"ali@gmail.com"
        },
        {
            "id":2,
            "name":"ahmed",
            "email":"ahmed@gmail.com"
        },
        {
            "id":3,
            "name":"osman",
            "email":"osman@gmail.com"
        }
    ]

    getAll(){
        return this.users
    }

    getById(id:number){
        const user =  this.users.find(user => user.id===id)
        if(!user) throw new NotFoundException("user not found")
        return user
    }
}
