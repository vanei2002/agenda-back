import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import env from './env/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(env.PORT ?? 3000);
}
bootstrap();
