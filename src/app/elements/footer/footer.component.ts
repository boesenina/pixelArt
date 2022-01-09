import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ImpressumComponent } from 'src/app/components/impressum/impressum.component';

@Component({
  selector: 'pa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ImpressumComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}





