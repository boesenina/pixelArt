import { Component, Input } from '@angular/core';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PixelArt';
  grid:any;


  addItem(value:any){
    console.log(value);
    this.grid = value;

  }
}
