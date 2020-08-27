import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../models/task.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() checked: EventEmitter<string> = new EventEmitter<string>();

  isChecked = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
    this.isChecked
      .valueChanges
      .subscribe(() => {
        this.checked.emit(this.task.id);
      });
  }

}
