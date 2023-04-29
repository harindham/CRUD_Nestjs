import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://harindhamsharma:Harindam_18@cluster0.02f5dpa.mongodb.net/?retryWrites=true&w=majority'),AuthModule]
})
export class AppModule {}
