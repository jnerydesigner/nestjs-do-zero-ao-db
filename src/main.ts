import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const config = new ConfigService();
  const PORT = Number(config.get('SERVER_PORT')) || 3000;

  await app.listen(PORT, () => {
    logger.log(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap();
