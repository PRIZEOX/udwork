import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LoginModule } from './auth/login/login.module';
import { AgreementsModule } from './agreements/agreements.module';
import { InvoiceModule } from './invoices/invoice.module';
import { OffersModule } from './offers/offers.module';
import { OperationModule } from './operations/operation.module';
import { RegisterModule } from './auth/register/register.module';
import { PicturesModule } from './pictures/pictures.module';
import { InvestmentModule } from './investments/investment.module';
import { MessageModule } from './messages/message.module';
import { PublicModule } from './public/public.module';
import { RegistryModule } from './registry/registry.module';
import { RavenInterceptor, RavenModule } from 'nest-raven';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskerModule } from './tasker/tasker.module';
import { PrilsModule } from './prils/prils.module';
@Module({
  imports: [
    RavenModule,
    PrilsModule,
    ScheduleModule.forRoot(),
    TaskerModule,
    InvestmentModule,
    RegistryModule,
    MessageModule,
    LoginModule,
    PicturesModule,
    RegisterModule,
    AgreementsModule,
    InvoiceModule,
    OffersModule,
    OperationModule,
    UsersModule,
    PublicModule,
    ConfigModule.forRoot(),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => [
        {
          rootPath: join(
            __dirname,
            '../../..',
            configService.get<string>('PRIVATE_PATH'),
          ),
          // serveRoot: '/personal',
        },
        {
          // rootPath: join(
          //   __dirname,
          //   '../../..',
          //   configService.get<string>('PUBLIC_PATH'),
          // ),
          // serveRoot: '/app',
        },
      ],
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useValue: new RavenInterceptor(),
    },
  ],
})
export class AppModule {}
