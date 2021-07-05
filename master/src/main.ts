import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { natsConfig } from './config/nats.config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(natsConfig);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;

  await app.startAllMicroservicesAsync();
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
};
bootstrap();
