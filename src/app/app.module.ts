import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { CategoryComponent } from './components/category/category.component';
import { TaskFormComponent } from './pages/home/components/task-form/task-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import {HttpClientModule} from '@angular/common/http';
import {WeekDayPipe} from './pipes/week-day.pipe';
import {TemperaturePipe} from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    WeatherInfoComponent,
    CategoryComponent,
    TaskFormComponent,
    ColorPickerComponent,
    NewCategoryComponent,
    WeekDayPipe,
    TemperaturePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
