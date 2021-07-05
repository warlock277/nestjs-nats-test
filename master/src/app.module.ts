import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { natsConfig } from './config/nats.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        ...natsConfig,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
