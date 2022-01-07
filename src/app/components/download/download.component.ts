import {Component, OnInit} from '@angular/core';

import { DownloadService } from 'src/app/services/download.service';



interface Format {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'pa-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {


  selectedValue: string ="";
  formats: Format[] = [
    {value: 'jpg', viewValue: 'JPG'},
    {value: 'png', viewValue: 'PNG'},
    {value: 'gif', viewValue: 'GIF'},
  ];


  constructor(private downloadService: DownloadService) {
  }

  ngOnInit() {
  }

  setFormat(){
    this.downloadService.setFormat(this.selectedValue)
  }

  download() {
    this.downloadService.setFormat(this.selectedValue)
    this.downloadService.downloadFile();
  }
}
