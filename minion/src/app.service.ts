import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: 'Welcome to minion!' });
  }

  public sum(data: number[]): number {
    console.log('MinionAppService: sum', data);
    return (data || []).reduce((a, b) => a + b);
  }

  public reverse(message: string): string {
    console.log('MinionAppService: reverse', message);
    return message.split('').reverse().join('')
  }


  public message(data: any[]): any {
    console.log('MinionAppService: message', data);
    return (data || []).reduce((a, b) => a + b);
  }
}
