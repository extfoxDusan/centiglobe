import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PaymentListComponent} from './components/payment-list/payment-list.component';
import {PaymentViewComponent} from './components/payment-view/payment-view.component';
import {PaymentsRoutingModule} from './payments-routing.module';
import {HeaderTableComponent} from './components/header-table/header-table.component';
import {CustomDateFormatPipe} from './pipes/custom-date-format.pipe';
import {PaymentAmountComponent} from './widgets/payment-amount/payment-amount.component';
import {MatChipsModule} from '@angular/material/chips';
import { StateClassPipe } from './pipes/state-class.pipe';

@NgModule({
  declarations: [PaymentListComponent, PaymentViewComponent,
    HeaderTableComponent,
    CustomDateFormatPipe,
    PaymentAmountComponent,
    StateClassPipe],
  imports: [CommonModule, PaymentsRoutingModule, SharedModule, MatChipsModule],
})
export class PaymentsModule {
}
