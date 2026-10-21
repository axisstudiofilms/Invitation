export type Provider = 'esewa'|'khalti'|'fonepay'|'bank';
export interface CheckoutRequest { invitationId:string; amountPaisa:number; currency:'NPR'; returnUrl:string; }
export interface PaymentAdapter { createCheckout(request:CheckoutRequest):Promise<{mode:'test'|'live';url:string|null;message:string}>; verifyPayment(transactionId:string):Promise<{verified:boolean}>; }
// Replace individually with signed, server-side merchant integrations.
// Publishing in this MVP is free. Never accept browser payment success as proof.
export const paymentAdapters:Record<Provider,PaymentAdapter> = Object.fromEntries(['esewa','khalti','fonepay','bank'].map(provider=>[provider,{async createCheckout(){return {mode:'test',url:null,message:`${provider} is not connected yet. No payment has been taken.`};},async verifyPayment(){return {verified:false};}}])) as unknown as Record<Provider,PaymentAdapter>;

