import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService){

    }
    @Get()
    getAll(){
        return this.userservice.getAll()
    }

  
    @Get(':id')
    getById(@Param('id',ParseIntPipe) id:number){
        return this.userservice.getById(id)
        
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return createUserDto
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() user:{}){
        return {id,...user}
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return {id}
    }
  
}
