import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Currency extends Model {
    @Column
    iso: string;

    @Column
    title: string;

    @Column
    eur_rate: string;
} 