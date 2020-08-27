import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() color: string;
  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  public show = false;
  public defaultColors: string[] = [
    '#7192fb',
    '#EF69AD',
    '#B236D0',
    '#44D09B',
    '#D0661A',
    '#4b4fce',
    '#4e0a77',
    '#518651',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public changeColor(color: string): void {
    this.color = color;
    this.colorChanged.emit(this.color);
    this.show = false;
  }

  changeColorManual(color: string): void {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

    if (isValid) {
      this.color = color;
      this.colorChanged.emit(this.color);
    }
  }

  toggleColors(): void {
    this.show = !this.show;
  }

}
