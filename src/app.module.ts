// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432'), // Added fallback to 5432
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD ,
      database: process.env.DATABASE_NAME,
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    AuthModule,
  ],
})
export class AppModule {}