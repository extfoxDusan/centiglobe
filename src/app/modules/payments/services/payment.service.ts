import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.sandbox';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  listPayments(params: any = {}): Observable<Payment[]> {
    return this.http
      .get<{ results: Payment[] }>(
        environment.gateway_endpoint + '/payment-service/payments',
        {
          params: params,
        }
      )
      .pipe(map((data: { results: Payment[] }) => data.results));
  }

  viewPayment(paymentId: string): Observable<Payment> {
    return this.http.get<Payment>(
      environment.gateway_endpoint + '/payment-service/payments/' + paymentId
    );
  }

  findLatestPayment(payments: any[]): any {
    let latestDate = new Date(0);
    let latestPayment: any;

    payments.forEach((payment) => {
      const paymentDate = new Date(payment.createdAt);
      if (paymentDate > latestDate) {
        latestDate = paymentDate;
        latestPayment = payment;
      }
    });

    return latestPayment;
  }
}
