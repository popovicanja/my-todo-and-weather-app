import { v4 as uuid } from 'uuid';

export class Category {
  id: string;
  title: string;
  color: string;

  constructor(title: string, color: string) {
    this.id = uuid();
    this.title = title;
    this.color = color;
  }
}
