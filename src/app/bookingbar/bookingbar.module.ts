import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingbarComponent } from './bookingbar.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    BookingbarComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    BookingbarComponent
  ]
})
export class BookingbarModule { }
