import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  favoriteSeason: string="";
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
