import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from '../../models/payment.model';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
  displayedColumns: string[] = [
    'paymentId',
    'createdAt',
    'payinMemberName',
    'payoutMemberName',
    'paymentAmount',
    'state',
    'payoutId',
  ];

  dataSource = new MatTableDataSource<Payment>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private paymentService: PaymentService,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.paymentService
      .listPayments()
      .pipe(take(1))
      .subscribe({
        next: (payments) => {
          this.dataSource.data = payments;
        },
        error: (err) => {
          this.snackBar.open(err.error.message, 'Close', {
            duration: 3000,
          });
        },
      });
  }
}
