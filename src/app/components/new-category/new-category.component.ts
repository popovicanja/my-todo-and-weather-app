import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  @Output() addCategory: EventEmitter<Category> = new EventEmitter<Category>();

  backgroundColor = '#00aaff';
  categoryName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addNewCategory(): void {
    if (this.categoryName && this.backgroundColor) {
      const category = new Category(this.categoryName, this.backgroundColor);
      this.addCategory.emit(category);
    }
  }

  public setColor(color: string): void {
    this.backgroundColor = color;
  }

}
