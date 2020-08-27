import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Task } from '../../../../models/task.model';
import {Category} from '../../../../models/category.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../../../services/local-storage.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input() task: Task;
  @Output() addTask: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('closeModal') closeModal: ElementRef;

  form: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    assignCategory: new FormControl(false),
    categoryId: new FormControl(null),
    newCategory: new FormControl(null),
  });

  get assignCategory(): AbstractControl { return this.form.controls.assignCategory; }
  get categoryId(): AbstractControl { return this.form.controls.categoryId; }
  get newCategory(): AbstractControl { return this.form.controls.newCategory; }

  showNewCategoryField = false;

  categories: Category[] = [];

  newCategoryId = '000';

  constructor(private lsService: LocalStorageService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categories = this.lsService.getCategories();
  }

  onCategorySelected(id: string): void {
    if (id && this.categoryId.value === id) {
      this.categoryId.patchValue(null);
    } else {
      this.categoryId.patchValue(id);
    }
    this.handleNewCategoryField();
  }

  handleNewCategoryField(): void {
    const { value: categoryIdValue } = this.categoryId;
    if (categoryIdValue && categoryIdValue === this.newCategoryId) {
      this.showNewCategoryField = true;
    } else {
      if (this.showNewCategoryField) {
        this.showNewCategoryField = false;
        this.newCategory.patchValue(null);
      }
    }
  }

  addNewCategory(category: Category): void {
    this.addCategoryToLS(category);
    this.fetchCategories();
    this.categoryId.patchValue(category.id);
    this.handleNewCategoryField();
  }

  addCategoryToLS(category: Category): void {
    const categories: Category[] = [...this.lsService.getCategories(), category];
    this.lsService.setCategories(categories);
  }

  saveTask(form: FormGroup): void {
    if (form.valid) {
      const { title, description, categoryId } = form.value;
      const task = new Task(title, description, categoryId);
      this.addTaskToLS(task);
      this.addTask.emit();
      this.resetForm();
      this.closeModal.nativeElement.click();
    } else {
      console.log('Populate required fields');
    }
  }

  addTaskToLS(task: Task): void {
    const tasks: Task[] = [...this.lsService.getTasks(), task];
    this.lsService.setTasks(tasks);
  }

  resetForm(): void {
    this.form.reset();
    this.showNewCategoryField = false;
  }
}
