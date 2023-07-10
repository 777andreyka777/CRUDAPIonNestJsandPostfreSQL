import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employe/employee.entity';
import { EmployeeModule } from './Employe/employee.module';
import { Module } from '@nestjs/common';
import { configService } from './config/config.servise';


@Module ({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    EmployeeModule,
  ]
})
export class AppModule {}