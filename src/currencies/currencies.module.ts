import { Module } from '@nestjs/common';
import { CurrenciesController } from './currencies.controller';
import { CurrenciesService } from './currencies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Currency } from './currency.model';

@Module({
    imports: [SequelizeModule.forFeature([Currency])],
    controllers: [CurrenciesController],
    providers: [CurrenciesService],
})
export class CurrenciesModule {}