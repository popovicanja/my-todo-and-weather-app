import {Injectable} from '@angular/core';
import {Task} from '../models/task.model';
import {LocalStorageKeys} from '../models/local-storage-keys.enum';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(LocalStorageKeys.tasks)) || [];
  }

  setTasks(tasks: Task[]): void {
    localStorage.setItem(LocalStorageKeys.tasks, JSON.stringify(tasks));
  }

  getCategories(): Category[] {
    return JSON.parse(localStorage.getItem(LocalStorageKeys.categories)) || [];
  }

  setCategories(categories: Category[]): void {
    return localStorage.setItem(LocalStorageKeys.categories, JSON.stringify(categories));
  }

}
