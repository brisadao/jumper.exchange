import { openInNewTab } from '@transferto/shared/src/utils/';
import { useTranslation } from 'react-i18next';
import { useUserTracking } from '../../../hooks/useUserTracking/useUserTracking';

export const useMainSubMenuShowcases = () => {
  const { t: translate } = useTranslation();
  const i18Path = 'navbar.';
  const { trackPageload } = useUserTracking();

  return [
    {
      label: `${translate(`${i18Path}showcases.ukraineDonation`)}`,
      onClick: () => {
        openInNewTab('https://cryptofortress.app/');
        trackPageload({
          source: 'menu',
          destination: 'showcase-ukraine',
          url: 'https://cryptofortress.app/',
          pageload: true,
        });
      },
    },
    {
      label: `${translate(`${i18Path}showcases.klimaStaking`)}`,
      onClick: () => {
        openInNewTab('https://cryptofortress.app/');
        trackPageload({
          source: 'menu',
          destination: 'showcase-klima',
          url: 'https://cryptofortress.app/',
          pageload: true,
        });
      },
    },
    {
      label: `${translate(`${i18Path}showcases.carbonOffset`)}`,
      onClick: () => {
        openInNewTab('https://cryptofortress.app/');
        trackPageload({
          source: 'menu',
          destination: 'showcase-carbon',
          url: 'https://cryptofortress.app/',
          pageload: true,
        });
      },
    },
  ];
};
