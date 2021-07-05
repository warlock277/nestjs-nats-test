import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): number {
    console.log('MinionAppController: sum', data);
    return this.appService.sum(data);
  }

  @MessagePattern({ cmd: 'reverse' })
  reverse(message: string): string {
    console.log('MinionAppController: reverse', message);
    return this.appService.reverse(message);
  }

  @MessagePattern({ cmd: 'message' })
  receiveMessage(data: number[]): number {
    console.log('MinionAppController: message', data);
    return this.appService.message(data);
  }
}
