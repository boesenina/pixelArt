import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { saveFile } from '../components/download/file-download-helper';


@Injectable({
  providedIn: 'root'
})
export class DownloadService {


  private data;
  private format;
  filename = 'grid.png';

  setFormat(format){
    this.format =format;
  }

  setData(data){
    this.data = data;
  }




  constructor(
    private http: HttpClient,
  ) {
  }

  downloadFile() {
    if (this.format === 'jpg' ){
       this.filename = 'grid.jpg';
    }
    if (this.format === 'png' ){
      this.filename = 'grid.png';
   }
   if (this.format === 'gif' ){
    this.filename = 'grid.gif';
 }



    // Process the file downloaded
    this.http.get(this.data, {responseType: 'blob'}).subscribe(blob => {
      saveFile(blob, this.filename);
    });
  }

}
