import { Category } from './category.model';

export class Image {
    id: number;
    name: string;
    category: number;
    description: string;
    urlImage: string;
    created: Date;
    update: Date;
}