import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class Highlight {
    id: string;
    text: string;
    order: number;
}