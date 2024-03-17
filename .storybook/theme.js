import { create } from '@storybook/theming/create';
import logo from '../logo.png';

export default create({
  base: 'light',

  // Branding
  brandTitle: 'Ohana',
  brandUrl: 'https://github.com/chazchumley/ohana',
  brandImage: logo,
  brandTarget: '_self',
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Fira Sans", "Droid Sans", sans-serif;',
  fontCode: 'monospace',

  // Primary, Secondary colors
  colorPrimary: 'hsl(206 63% 42%)',
  colorSecondary: 'hsl(206 63% 42%)',
});
