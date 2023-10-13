import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss'],
})
export class PaymentViewComponent {
  payment: Payment | undefined;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const paymentId = params['paymentId'];

      this.paymentService.viewPayment(paymentId).subscribe((payment) => {
        this.payment = payment;
      });
    });
  }
}
