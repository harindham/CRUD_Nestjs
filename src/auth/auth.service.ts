import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { User } from "./schemas/users.schemas";

@Injectable({})
export class Authservice{

    constructor(
    @InjectModel('Users')
    private readonly usermodel: Model<User>
    ){}
    
    async insertuser(name: string, age: Number, department: String){
        const newuser=new this.usermodel({name:name,age: age,department: department})
        const result=await newuser.save();
        return result;
    }

    async deleteuser(userid: String){
        return await this.usermodel.deleteOne({ _id: userid });
    }

    async getuserbyid(userid: String){
        return await this.usermodel.findOne({ _id: userid });
    }
    async updateuser(userid: String,name: string, age: Number, department: String){
        const newuser=await this.usermodel.findOne({ _id: userid });
        if(name){
            newuser["name"]=name
        }
        if(department){
            newuser["department"]=department
        }
        if(age){
            newuser["age"]=age
        }
        return await newuser.save();
        
    }
}