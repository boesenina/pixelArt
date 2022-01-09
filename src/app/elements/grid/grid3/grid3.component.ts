import { HostListener, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { PaintingMode, DrawingGridService, Pixel } from 'ngx-drawing-grid';
import { Subject, takeUntil, tap } from 'rxjs';
import { ColorPickerService } from 'src/app/services/color-picker.service';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'pa-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.scss'],
})
export class Grid3Component implements OnInit {
  @ViewChild('screen', { static: true }) screen: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
  }

  private readonly destroy$: Subject<void> = new Subject<void>();

  width: number = 32;
  height: number = 32;
  pixelSize = 30;

  private paintingMode: PaintingMode;
  private color: string;

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
