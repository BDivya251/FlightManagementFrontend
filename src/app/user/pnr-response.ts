export interface PnrResponse {
  pnr: string;
  email: string;
  status: string;
  seatsBooked: number;
  totalAmount: number;
  flightNumber: string;
  bookingDate: string; // ISO date-time string
}
