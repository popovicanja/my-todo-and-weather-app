import { v4 as uuid } from 'uuid';
export class Task {
  id: string;
  title: string;
  description?: string;
  checked: boolean;
  categoryId?: string;

  constructor(title: string, description: string, categoryId: string = null) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.categoryId = categoryId;
    this.checked = false;
  }
}
