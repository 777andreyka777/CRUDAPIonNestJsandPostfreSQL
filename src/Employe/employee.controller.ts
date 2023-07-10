import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import {Employee} from './employee.entity';
 
@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
 
    @Get('all')
    async getAll():Promise<Employee[]>{
        return await this.employeeService.findAll();
    
    }

    @Post('add')
    @HttpCode(201)
    cteateEmployee(@Body() newEmployee:any){
        this.employeeService.create(newEmployee);
    }


    @Post('update')
    @HttpCode(200)
    updateEmployee(@Body() employeeToUpdate:any){
        this.employeeService.update(employeeToUpdate);
    }


    @Delete('delete/:id')
    @HttpCode(200)
    deleteEmployee(@Param('id') id){
        this.employeeService.delete(id);
    }


}