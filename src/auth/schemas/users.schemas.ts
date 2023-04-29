import * as mongoose from 'mongoose';

export const UserSchema= new mongoose.Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true},
    age: {type: Number, require: true},
    department: {type: String, require: true}
});

export interface User{
    id: Number;
    name: String;
    age: Number;
    department: String;
}