import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Currency } from './currencies/currency.model';
import { CurrenciesModule } from './currencies/currencies.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "sqlite",
      storage: ":memory:",
      models: [Currency],
      synchronize: true,
      autoLoadModels: true,
    }),
    CurrenciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
