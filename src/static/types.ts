import React from 'react';

export type WithChildrenProps<T = {}> = {
  children?: React.ReactNode;
} & T;

export type MediastoreComponent = 'Capture' |
'Card' |
'Checkout' |
'CheckoutConsents' |
'Consents' |
'Login' |
'Offers' |
'MyAccount' |
'PasswordReset' |
'PaymentInfo' |
'PlanDetails' |
'Purchase' |
'Register' |
'SubscriptionSwitches' |
'Subscriptions' |
'ThankYouPage' |
'TransactionList' |
'UpdateProfile';

export type GetUrl = (pathname?: string) => URL;

export type NavigationItem = {
  Component: React.ReactNode;
  label?: string;
  path: MediastoreComponent;
  requiresAuth?: boolean;
};
