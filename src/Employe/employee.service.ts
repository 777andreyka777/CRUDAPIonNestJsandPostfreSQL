import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
 
 
@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepo: Repository<Employee>) {}
    findAll(): Promise<Employee[]> {
        return this.employeeRepo.find(); 
}
    create(newEmploye){
        this.employeeRepo.insert(newEmploye)
    }
    update(employetoupdate){
        this.employeeRepo.update(employetoupdate.id,employetoupdate)
    }
    delete(id){
        this.employeeRepo.delete(id);
    }}