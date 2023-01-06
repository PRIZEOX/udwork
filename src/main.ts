import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { LoginModule } from './auth/login/login.module';
import { AgreementsModule } from './agreements/agreements.module';
import { OffersModule } from './offers/offers.module';
import { OperationModule } from './operations/operation.module';
import { InvoiceModule } from './invoices/invoice.module';
import { RegisterModule } from './auth/register/register.module';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
Sentry.init({
  dsn: 'https://d7e45e15182a41bd8f531bff33a5a987@o1389439.ingest.sentry.io/6711961',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.useStaticAssets('static/');
  app.useStaticAssets(
    join(__dirname, '../../..', configService.get('PRIVATE_PATH')),
    { index: false },
  );
  app.setViewEngine('pug');
  const port = +configService.get('PORT');
  const swagger = +configService.get('SWAGGER');
  if (swagger) {
    const config = new DocumentBuilder()
      .setTitle('Удалтон API')
      .setDescription('Внутренний API движка платформы')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const options: SwaggerDocumentOptions = {
      include: [
        // AppModule,
        LoginModule,
        RegisterModule,
        AgreementsModule,
        OffersModule,
        OperationModule,
        InvoiceModule,
        UsersModule,
      ],
    };
    const setupOptions = {
      customSiteTitle: 'API docs',
    };
    if (configService.get<string>('SWAGGER') === '1') {
      const document = SwaggerModule.createDocument(app, config, options);
      SwaggerModule.setup('api/v1', app, document, setupOptions);
    }
  }
  await app.listen(port);
}
bootstrap();
