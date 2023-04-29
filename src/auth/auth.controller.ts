import { Controller,Post,Get,Body,Delete,Param,Patch } from "@nestjs/common";
import { Authservice } from "./auth.service";

@Controller('auth')
export class Authcontroller{
    constructor(private authService: Authservice){}

    @Get(':id')
    async getuserbyid(@Param('id') userid: String){
        return this.authService.getuserbyid(userid)
    }

    @Post('adduser')
    async adduser(@Body('name') username: string,@Body('age') userage: number,@Body('department') userdept: string){
        // return {"username":username,"age":userage,"dept":userdept};
        return await this.authService.insertuser(username,userage,userdept);
    }

    @Delete('deleteuser')
    async deleteuser(@Body("_id") userid: String){
        return await this.authService.deleteuser(userid);
    }

    @Patch('updateuser/:id')
    async updateuser(@Param('id') userid: string,@Body('name') username: string,@Body('age') userage: number,@Body('department') userdept: string){
        return await this.authService.updateuser(userid,username,userage,userdept)
    }


}