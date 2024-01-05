import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './currency.model';

@Injectable()
export class CurrenciesService {
    constructor(
        @InjectModel(Currency)
        private currencyModel: typeof Currency,
    ) {}

    async create(currency: any): Promise<Currency> {
        return this.currencyModel.create(currency);
    }

    async remove(id: string): Promise<void> {
        this.currencyModel.destroy({ where: { id } });
    }

    async update(id: string, currency: UpdateCurrencyDto): Promise<void> {
        this.currencyModel.update(currency, { where: { id } });
    }

    async findAll(): Promise<Currency[]> {
        return this.currencyModel.findAll();
    }
}
