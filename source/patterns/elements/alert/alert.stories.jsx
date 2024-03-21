import parse from 'html-react-parser';

import twigTemplate from './alert.twig';
import data from './alert.yml';
import './alert.css';

const settings = {
  title: 'Elements/Alert',
};

export const Success = {
  name: 'Success alert',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export const Warning = {
  ...Success,
  name: 'Warning alert',
  args: {
    ...data,
    modifier: 'alert--warning',
  },
};

export const Error = {
  ...Success,
  name: 'Error alert',
  args: {
    ...data,
    modifier: 'alert--error',
  },
};

export default settings;
