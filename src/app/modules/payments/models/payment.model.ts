export interface Payment {
  paymentId: string;
  paymentRef: string;
  createdAt: Date;
  payinMemberName: string;
  payoutMemberName: string;
  paymentAmount: PaymentAmount;
  state: string;
  payoutId: string;
}

export interface PaymentAmount {
  assetName: string;
  amount: string;
}
