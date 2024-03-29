import parse from 'html-react-parser';

import twigTemplate from './button.twig';
import data from './button.yml';
import './button.css';

const settings = {
  title: 'Elements/Button',
};

// Default button story.
export const Button = {
  name: 'Default button',
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

/** Primary button story */
export const Primary = {
  ...Button,
  name: 'Primary button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--primary',
      text: 'Primary button',
    },
  },
};

export const Secondary = {
  ...Button,
  name: 'Secondary button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--secondary',
      text: 'Secondary button',
    },
  },
};

export const Outlined = {
  ...Button,
  name: 'Outlined button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--outlined',
      text: 'Outlined button',
    },
  },
};

export const withIcon = {
  ...Button,
  name: 'Button with Icon',
  args: {
    ...Button.args,
    button: {
      icon: 'arrow-right',
      modifier: 'button--outlined',
      text: 'Button with Icon',
    },
  },
};

export const Link = {
  ...Button,
  name: 'Button as a link',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--link',
      text: 'Button as a link',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
