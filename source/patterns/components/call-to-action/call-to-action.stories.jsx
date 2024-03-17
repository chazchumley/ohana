import parse from 'html-react-parser';

import ctaTwig from './call-to-action.twig';
import data from './call-to-action.yml';

const settings = {
  title: 'Components/Call to action',
  args: { ...data },
  render: (args) => parse(ctaTwig(args)),
};

const cta = {
  name: 'Call to action',
  args: { ...data },
};

export default settings;
export { cta };
