// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import StorybookSURF from './StorybookSURF';

addons.setConfig({
  theme: StorybookSURF,
});