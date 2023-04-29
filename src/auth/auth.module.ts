import { Module } from '@nestjs/common';
import { Authcontroller } from './auth.controller';
import { Authservice } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Users', schema: UserSchema}]),
    ],
    controllers: [Authcontroller],
    providers: [Authservice]
})
export class AuthModule {}
