import {Component, OnInit} from '@angular/core';
import { Observable, map } from 'rxjs';
import { Payment } from '../../models/payment.model';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-amount',
  templateUrl: './payment-amount.component.html',
  styleUrls: ['./payment-amount.component.scss'],
})
export class PaymentAmountComponent implements OnInit {
  latestPayment$ = new Observable<Payment>();

  constructor(
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.latestPayment$ = this.paymentService
      .listPayments()
      .pipe(map((payments) => this.paymentService.findLatestPayment(payments)));
  }
}
