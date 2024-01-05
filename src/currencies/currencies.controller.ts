import { Controller, Post, Delete, Put, Get, Param, Body } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CurrenciesService } from './currencies.service';
import { Currency } from './currency.model';

@Controller('currencies')
export class CurrenciesController {
    constructor(private currenciesService: CurrenciesService) {}

    @Post()
    async create(@Body() createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
        return this.currenciesService.create(createCurrencyDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        this.currenciesService.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto): Promise<void> {
        this.currenciesService.update(id, updateCurrencyDto);
    }

    @Get() 
    async findAll(): Promise<Currency[]> {
        return this.currenciesService.findAll();
    }
}