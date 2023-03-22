import { appUrl } from '@/static';
import { GetUrl } from '@/static/types';

export const getUrl: GetUrl = (pathname = '') => {
  const url = new URL(pathname, appUrl);

  return url;
};
