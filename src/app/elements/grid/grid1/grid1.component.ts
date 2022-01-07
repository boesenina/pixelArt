import { DownloadService } from 'src/app/services/download.service';
import { CaptureService } from './../../../services/capture.service';
import { Component, ElementRef, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { PaintingMode, DrawingGridService, Pixel } from 'ngx-drawing-grid';
import { Subject, takeUntil, tap } from 'rxjs';
import { ColorPickerService } from 'src/app/services/color-picker.service';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'pa-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss']
})
export class Grid1Component implements OnInit {
  [x: string]: any;

  @ViewChild('screen', { static: true }) screen: any;
  @Output() newItemEvent = new EventEmitter<string>();

  private readonly destroy$: Subject<void> = new Subject<void>();

  width: number = 32;
  height: number= 32;
  pixelSize = 60;



  private paintingMode: PaintingMode;
  private color: string;


  constructor(
    private host: ElementRef,
    private gridService: DrawingGridService,
    private colorPickerService: ColorPickerService,
    private captureService:NgxCaptureService,
    private downloadService: DownloadService,
  ) {}

  ngOnInit() {
    this.gridService.paintingMode$.pipe(takeUntil(this.destroy$)).subscribe((paintingMode) => {
      this.paintingMode = paintingMode;
    });

    this.colorPickerService.color$.pipe(takeUntil(this.destroy$)).subscribe((color) => {
      this.color = color;
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

  private fillPixel(x: number, y: number) {
    if (this.paintingMode === PaintingMode.ERASE) {
      this.gridService.clearPixel(x, y);


      return;
    }

    this.gridService.fillPixel(x, y, this.color);

    this.captureService.getImage(this.screen.nativeElement, true)
      .pipe(
        tap(img => {
          console.log(img);
          this.downloadService.setData(img)
        })
      ).subscribe();
  }

  saveImage(img: string) {
    console.log(img);
  }
}
