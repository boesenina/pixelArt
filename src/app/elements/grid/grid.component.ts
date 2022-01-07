import { HostListener } from '@angular/core';
import { Component, ElementRef, OnInit,Input, OnDestroy } from '@angular/core';
import { PaintingMode, DrawingGridService, Pixel } from 'ngx-drawing-grid';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColorPickerService } from 'src/app/services/color-picker.service';



@Component({
  selector: 'pa-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() grid:any;



  constructor(


  ) {console.log(this.grid);}

  ngOnInit() {



  }


}


