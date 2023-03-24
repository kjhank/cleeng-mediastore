import {
  Capture, Card, Checkout, CheckoutConsents, Consents, Login, MyAccount, Offers,
  PasswordReset, PaymentInfo, PlanDetails, Purchase, Register, Subscriptions,
  SubscriptionSwitches, ThankYouPage, TransactionList, UpdateProfile,
  // @ts-ignore
} from '@cleeng/mediastore-sdk';
import {
  cleengOfferId, cleengPublisherId, NavigationItem,
} from '@/static';

export const navigationItems: Array<NavigationItem> = [
  {
    Component: <Capture onSuccess={() => { }} />,
    path: 'Capture',
    requiresAuth: true,
  },
  {
    Component: <Card withBorder withShadow>I am a card, sue me.</Card>,
    path: 'Card',
    requiresAuth: true,
  },
  {
    Component: <Checkout offerId={cleengOfferId} onSuccess={() => { }} />,
    path: 'Checkout',
    requiresAuth: true,
  },
  {
    Component: <CheckoutConsents onSuccess={() => { }} />,
    label: 'Checkout Consents',
    path: 'CheckoutConsents',
    requiresAuth: true,
  },
  {
    Component: <Consents publisherId={cleengPublisherId} />,
    path: 'Consents',
    requiresAuth: true,
  },
  {
    Component: <Login
      onPasswordResetClick={() => { }} onRegisterClick={() => { }}
      onSuccess={() => { }}
    />,
    path: 'Login',
  },
  {
    Component: <MyAccount />,
    label: 'My Account',
    path: 'MyAccount',
    requiresAuth: true,
  },
  {
    Component: <Offers />,
    path: 'Offers',
    requiresAuth: true,
  },
  {
    Component: <PasswordReset onSuccess={() => { }} />,
    label: 'Password Reset',
    path: 'PasswordReset',
  },
  {
    Component: <PaymentInfo />,
    label: 'Payment Info!',
    path: 'PaymentInfo',
    requiresAuth: true,
  },
  {
    Component: <PlanDetails />,
    label: 'Plan Details!',
    path: 'PlanDetails',
    requiresAuth: true,
  },
  {
    Component: <Purchase offerId={cleengOfferId} onSuccess={() => { }} />,
    label: 'Purchase!',
    path: 'Purchase',
    requiresAuth: true,
  },
  {
    Component: <Register onHaveAccountClick={() => { }} onSuccess={() => { }} />,
    path: 'Register',
  },
  {
    Component: <SubscriptionSwitches offerId={cleengOfferId} />,
    label: 'Subscription Switches!',
    path: 'SubscriptionSwitches',
    requiresAuth: true,
  },
  {
    Component: <Subscriptions />,
    path: 'Subscriptions',
    requiresAuth: true,
  },
  {
    Component: <ThankYouPage />,
    label: '"Thank You" Page',
    path: 'ThankYouPage',
    requiresAuth: true,
  },
  {
    Component: <TransactionList />,
    label: 'Transaction List',
    path: 'TransactionList',
    requiresAuth: true,
  },
  {
    Component: <UpdateProfile />,
    label: 'Update Profile',
    path: 'UpdateProfile',
    requiresAuth: true,
  },
];
