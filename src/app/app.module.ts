import { ColorPickerService } from './services/color-picker.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule } from '@angular/common/http';
import { DrawingGridModule } from 'ngx-drawing-grid';
import { FileSaverModule } from 'ngx-filesaver';
import { NgxCaptureModule } from 'ngx-capture';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { MenuComponent } from './elements/menu/menu.component';
import { GridComponent } from './elements/grid/grid.component';
import { Grid1Component } from './elements/grid/grid1/grid1.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { Grid2Component } from './elements/grid/grid2/grid2.component';
import { Grid3Component } from './elements/grid/grid3/grid3.component';
import { Grid4Component } from './elements/grid/grid4/grid4.component';
import { DownloadComponent } from './components/download/download.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    GridComponent,
    Grid1Component,
    ColorPickerComponent,
    Grid2Component,
    Grid3Component,
    Grid4Component,
    DownloadComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    ScrollingModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    DrawingGridModule,
    MatIconModule,
    MatTooltipModule,
    FileSaverModule,
    NgxCaptureModule,
    MatSelectModule,
  ],
  providers: [ColorPickerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
