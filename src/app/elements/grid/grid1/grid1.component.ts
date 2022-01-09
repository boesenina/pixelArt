import { DownloadService } from 'src/app/services/download.service';

import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { PaintingMode, DrawingGridService, Pixel } from 'ngx-drawing-grid';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { ColorPickerService } from 'src/app/services/color-picker.service';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'pa-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss'],
})
export class Grid1Component implements OnInit {
  [x: string]: any;
  @Input() fill: boolean;

  @ViewChild('screen', { static: true }) screen: any;
  @Output() newItemEvent = new EventEmitter<string>();

  private readonly destroy$: Subject<void> = new Subject<void>();

  width: number;
  height: number ;
  pixelSize = 60;

  private paintingMode: PaintingMode;
  private color: string;
  private newColor: string;

  constructor(
    private host: ElementRef,
    private gridService: DrawingGridService,
    private colorPickerService: ColorPickerService,
    private captureService: NgxCaptureService,
    private downloadService: DownloadService
  ) {}

  ngOnInit() {
    this.gridService.paintingMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((paintingMode) => {
        this.paintingMode = paintingMode;
      });

    this.colorPickerService.color$
      .pipe(takeUntil(this.destroy$))
      .subscribe((color) => {
        this.color = color;
      });
    this.colorPickerService.color$
      .pipe(takeUntil(this.destroy$))
      .subscribe((newColor) => {
        this.newColor = newColor;
      });

     this.width = this.host.nativeElement.clientWidth;
     this.height = this.host.nativeElement.clientHeight - 64;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onMouseDown(pixel: Pixel) {
    this.fillPixel(pixel.x, pixel.y);
  }

  onMouseMove(pixel: Pixel) {
    this.fillPixel(pixel.x, pixel.y);
  }

  onMouseUp(pixel: Pixel) {}

  onContextMenu(pixel: Pixel) {
    this.gridService.clearPixel(pixel.x, pixel.y);
  }
  pixelArray: any[] = [];

  private fillPixel(x: number, y: number) {
    console.log(this.fill);

    if (this.pixelArray.length == 0) {
      this.gridService.fillPixel(x, y, this.color);
      console.log(this.color);

      let MyData = { x: x, y: y };

      let arrayPush = this.pixelArray.push(MyData);
      console.log(this.pixelArray);

      this.captureService
        .getImage(this.screen.nativeElement, true)
        .pipe(
          tap((img) => {
            console.log(img);
            this.downloadService.setData(img);
          })
        )
        .subscribe();

      return;
    }

    if (this.pixelArray.length >= 1) {
      let newArray = { x: x, y: y };
      console.log(newArray);
      console.log(this.pixelArray);

      //  let newArrayPush = this.pixelArray.push(newArray)

      const found = this.pixelArray.includes(newArray);
      console.log(found);

      if (found == false) {
        this.gridService.fillPixel(x, y, this.color);
        let newArrayPush = this.pixelArray.push(newArray);
        console.log(this.pixelArray);
      }
    }

    if (this.paintingMode === PaintingMode.ERASE) {
      this.gridService.clearPixel(x, y);
      return;
    }

    this.captureService
      .getImage(this.screen.nativeElement, true)
      .pipe(
        tap((img) => {
          console.log(img);
          this.downloadService.setData(img);
        })
      )
      .subscribe();
  }
}
