/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { PrilsService } from './prils.service';

@Controller('prils')
export class PrilsController {
constructor(public service: PrilsService) {}
  @Get('first')
  async createPril1(): Promise<any>{
    return await this.service.createPrill1({id:1, number:2, from:'ud',borrowerName:23, dateGosReg:2,OGRN:2345, INN:213, registerAdres:5435, actualAdres:123, minLoanSum:25000, 
    maxLoanSum: 50000, validatyPeriod:342,percent:5,garContribution:12300,loanPeriod:7,borrowerRequisites:'none',purposeOfLoan:'donate',monitoringExpInfo:'mone', otherConditions:1,
  riskWarning:'no risk', borrowerResponsibilities:'watch', info:'investment'})
  }
  @Get('second')
  async createPril2() {
    return await this.service.createPrill2({id:2,invName:'Vasya',invPosition:'Director',invNameOfRuk:'Grigory',invOGRN:1234,invINN:4321,sumOfInvest:25000,
    percent:15,borrowerName:'Pasha',borrowerPosition:'Junior',borrowerNameOfRuk:'Ararat',borrowerOGRN:'4567',borrowerINN:'7654'}) 
  }
  @Get('test')
  async createPril() {
    return await this.service.createTest(4);
  }
  // @Get('pril2')
  // //@Render('pril1')
  // async createPril2() {
  //   return await this.service.createPrill({id: 1, username: 'pasha', age:32}); 
  // }
}
