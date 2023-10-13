import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentViewComponent } from "./components/payment-view/payment-view.component";
import { HeaderTableComponent } from './components/header-table/header-table.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'view/:paymentId', component: PaymentViewComponent },
  // { path: '', component: PaymentListComponent },
  { path: '', component: HeaderTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
