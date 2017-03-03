import { Book } from './book';
import { Ingredient } from './ingredient';
import { Tag } from './tag';

export class Recipe {
  id: number;
  title: string;
  page: number;
  notes: string;
  favorite: boolean;
  lastMade: string;
  book: Book;
  ingredients: Ingredient[];
  tags: Tag[];
}