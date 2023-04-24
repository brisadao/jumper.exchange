import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useTheme } from '@mui/material/styles';
import { openInNewTab } from '@transferto/shared/src/utils/';
import { useTranslation } from 'react-i18next';
import { useUserTracking } from '../../../hooks/useUserTracking/useUserTracking';

export const useMainSubMenuDevelopers = () => {
  const { t: translate } = useTranslation();
  const i18Path = 'navbar.';
  const { trackPageload } = useUserTracking();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return [
    {
      label: `${translate(`${i18Path}developers.github`)}`,
      prefixIcon: (
        <GitHubIcon
          sx={{
            color: !!isDarkMode
              ? theme.palette.white.main
              : theme.palette.black.main,
          }}
        />
      ),
      onClick: () => {
        openInNewTab('https://github.com/');
        trackPageload({
          source: 'menu',
          destination: 'cryptofortress-github',
          url: 'https://github.com/',
          pageload: true,
        });
      },
    },
    {
      label: `${translate(`${i18Path}developers.documentation`)}`,
      prefixIcon: <DescriptionOutlinedIcon />,
      onClick: () => {
        openInNewTab('https://cryptofortress.app/');
        trackPageload({
          source: 'menu',
          destination: 'cryptofortress-docs',
          url: 'https://cryptofortress.app/',
          pageload: true,
        });
      },
    },
    {
      label: `${translate(`${i18Path}developers.showcases`)}`,
      prefixIcon: <SlideshowIcon />,
      showMoreIcon: true,
      triggerSubMenu: 'showcases',
    },
  ];
};
