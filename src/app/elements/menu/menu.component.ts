import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// to choose the rendering

@Component({
  selector: 'pa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  favoriteGrid: string = '8x8';
  grids: string[] = ['8 x 8', '12 x 12', '16 x 16', '32 x 32'];

  addNewItem(grid: any) {
    console.log(grid);

    this.newItemEvent.emit(grid);
  }
}
