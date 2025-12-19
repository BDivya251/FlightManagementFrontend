import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingService } from '../booking';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-cancel-booking',
  standalone:true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './cancel-booking.html',
  styleUrl: './cancel-booking.css',
})
export class CancelBooking {
  pnr=''
  errMsg=''
  confirnMsg=''
  constructor(private bookingService:BookingService,
    private cdrf:ChangeDetectorRef
  ){}
  cancelBooking(){
  this.bookingService.cancelBooking(this.pnr).subscribe({
    next:(res)=>{
      this.confirnMsg="booking cancelled"
      console.log("Booking cancelled");
      this.cdrf.detectChanges();
      
    },
    error:(err)=>{
      this.errMsg="error";
      console.log(err);
    
    }
  })
  }
}
