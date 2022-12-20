import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get<number>('PORT');
  /*
  const config = new DocumentBuilder()
    .setTitle('Bookings API Example')
    .setDescription('The bookings API swagger document')
    .setVersion('1.0')
    .addTag('bookings')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 
  */
  await app.listen(port, () => {
    console.log('[WEB]', configService.get<string>('BASE_URL'));
  });
}
bootstrap();
