import { HostListener, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { PaintingMode, DrawingGridService, Pixel } from 'ngx-drawing-grid';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColorPickerService } from 'src/app/services/color-picker.service';

@Component({
  selector: 'pa-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() grid: any;
  fill: boolean;
  copy: any;

  constructor() {
    console.log(this.copy);
  }

  ngOnInit() {}

  setCopy(copy) {
    this.copy = copy;
    console.log(this.copy);
  }

  addItem(filling) {
    console.log(filling);
    this.fill = filling;
  }
}
