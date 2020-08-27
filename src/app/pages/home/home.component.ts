import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/category.model';
import {Task} from '../../models/task.model';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather.model';
import {CountryService} from '../../services/country.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  tasks: Task[] = [];

  filteredTasks: Task[];

  selectedCategoryId: string;

  weatherData: Weather;

  country: string;

  constructor(private weatherService: WeatherService,
              private countryService: CountryService,
              private lsService: LocalStorageService) { }

  ngOnInit(): void {
    this.populateLSWithData();
    this.initializeData();
  }

  async initializeData(): Promise<void> {
    this.fetchTasks();
    this.fetchCategories();
    console.log(this.categories)

    this.weatherData = await this.weatherService.getWeatherDate();
    this.country = await this.countryService.getCountryByCode(this.weatherData.countryCode);
    return;
  }

  fetchTasks(): void {
    this.tasks = this.lsService.getTasks();
    this.filteredTasks = [...this.tasks];
  }

  fetchCategories(): void {
    this.categories = this.lsService.getCategories();
  }

  onCategorySelected(id: string): void {
    if (this.selectedCategoryId === id) {
      this.selectedCategoryId = null;
      this.filteredTasks = [...this.tasks];
    } else {
      this.selectedCategoryId = id;
      this.filteredTasks = this.tasks.filter(task => task.categoryId === id);
    }
  }

  onTaskAdded(): void {
    this.fetchTasks();
    this.fetchCategories();
  }

  onTaskChecked(taskId: string): void {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
    this.lsService.setTasks(this.tasks);

    setTimeout(() => {
      this.fetchTasks();
    }, 350);
  }

  populateLSWithData(): void {
    const tasks = this.lsService.getTasks();
    const categories = this.lsService.getCategories();
    if ((!tasks || tasks.length === 0) && (!categories || categories.length === 0)) {

      const dummyCategories: Category[] = [
        new Category('Home', '#EF69AD'),
        new Category('New SS app', '#D0661A')
      ];
      this.lsService.setCategories(dummyCategories);

      const dummyTasks: Task[] = [
        new Task('Buy present for sister birthday', 'delta, city mall', dummyCategories[0].id),
        new Task('Define style guide', 'bem, :root, variables', dummyCategories[1].id)
      ];

      this.lsService.setTasks(dummyTasks);
    }
  }


}
