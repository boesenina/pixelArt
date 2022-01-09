import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';


import { DownloadService } from 'src/app/services/download.service';

interface Format {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pa-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  @ViewChild('screen', { static: true }) screen: any;
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output() copyEvent = new EventEmitter<string>();
  filling: boolean = false;
  copy: string = 'yes';

  selectedValue: string = '';
  formats: Format[] = [
    { value: 'jpg', viewValue: 'JPG' },
    { value: 'png', viewValue: 'PNG' },
    { value: 'gif', viewValue: 'GIF' },
  ];

  constructor(
    private downloadService: DownloadService,
    private captureService: NgxCaptureService
  ) {}

  ngOnInit() {}

  setFormat() {
    this.downloadService.setFormat(this.selectedValue);
  }

  download() {
    this.downloadService.setFormat(this.selectedValue);
    this.downloadService.setCopy(this.copy);
    this.downloadService.downloadFile();
  }

  fill() {
    this.filling = true;
    console.log('klick');
    this.newItemEvent.emit(this.filling);
  }
}
