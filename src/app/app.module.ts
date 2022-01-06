import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { MenuComponent } from './elements/menu/menu.component';
import { ColorComponent } from './elements/color/color.component';
import { GridComponent } from './elements/grid/grid.component';
import { Grid1Component } from './elements/grid/grid1/grid1.component';
import { Grid2Component } from './elemets/grid/grid2/grid2.component';
import { Grid3Component } from './elemets/grid/grid3/grid3.component';
import { Grid4Component } from './elemets/grid/grid4/grid4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ColorComponent,
    GridComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid4Component,
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



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
