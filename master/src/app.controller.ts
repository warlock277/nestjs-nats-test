import { Controller, Get, Query } from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('sum')
  sum(@Query('digits') digits) {
    const data = digits.split(',').map(Number);
    console.log('MasterAppController: sum', data);
    return this.appService
      .sum(data)
      .pipe(tap(result => console.log('MasterAppController: sum result', result)));
  }

  @Get('reverse')
  reverse(@Query('message') message) {
    return this.appService
      .reverse(message)
      .pipe(tap(result => console.log('MasterAppController: reverse result', result)));
  }

  @Get('message')
  sendMessage(@Query('digits') digits) {
    const data = digits.split(',').map(Number);
    console.log('MasterAppController: sum', data);
    return this.appService
      .sendMessage(data)
      .pipe(tap(result => console.log('MasterAppController: sum result', result)));
  }
}
