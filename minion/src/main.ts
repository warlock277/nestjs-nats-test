import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { natsConfig } from './config/nats.config';

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(AppModule, natsConfig);
  await app.listenAsync();

  console.log('minion listening');
};
bootstrap();
