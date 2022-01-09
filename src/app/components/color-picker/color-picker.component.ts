import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from 'src/app/services/color-picker.service';

interface Color {
  name: string;
  value: string;
}

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
  }
  colors: Color[] = [
    {
      name: 'Black',
      value: '#000000',
    },
    {
      name: 'Red',
      value: '#C62828',
    },
    {
      name: 'Pink',
      value: '#AD1457',
    },
    {
      name: 'Purple',
      value: '#6A1B9A',
    },
    {
      name: 'Blue',
      value: '#1565C0',
    },
    {
      name: 'Cyan',
      value: '#00838F',
    },
    {
      name: 'Green',
      value: '#2E7D32',
    },
    {
      name: 'Yellow',
      value: '#F9A825',
    },
    {
      name: 'Orange',
      value: '#EF6C00',
    },
    {
      name: 'Brown',
      value: '#4E342E',
    },
    {
      name: 'Gray',
      value: '#424242',
    },
  ];

  constructor(private colorPickerService: ColorPickerService) {}

  setColor(color: string) {
    this.colorPickerService.color = color;
  }

  setNewColor(newColor: string) {
    this.colorPickerService.color = newColor;
  }
}
