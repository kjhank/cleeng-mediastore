import {
  Config, store,
  // @ts-ignore
} from '@cleeng/mediastore-sdk';
import { Providers } from './features';
import {
  cleengEnvironment, cleengOfferId, cleengPublisherId,
} from './static';
import { getUrl } from './utils';

const App = () => {
  Config.setEnvironment(cleengEnvironment);
  Config.setPublisher(cleengPublisherId);
  Config.setOffer(cleengOfferId);
  Config.setMyAccountUrl(getUrl('account'));
  Config.setCheckoutPayPalUrls({
    cancelUrl: getUrl('components').href,
    errorUrl: getUrl('components').href,
    successUrl: getUrl('components').href,
  });
  Config.setMyAccountPayPalUrls({
    cancelUrl: getUrl('account').href,
    errorUrl: getUrl('account').href,
    successUrl: getUrl('account').href,
  });

  return (
    <Providers store={store} />
  );
};

export default App;
