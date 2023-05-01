import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import BadgeNumber from './BadgeNumber';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/BadgeNumber',
    component: BadgeNumber,
} as Meta<typeof BadgeNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BadgeNumber> = (args) => <BadgeNumber {...args} />;

export const BadgeNumberTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeNumberTemplate.args = {
    value: 99,
};

export const SmallBadgeNumberTemplate = Template.bind({});
SmallBadgeNumberTemplate.args = {
    value: 99,
    small: true
};

export const SmallBadgeHighNumberTemplate = Template.bind({});
SmallBadgeHighNumberTemplate.args = {
    value: 97682,
    small: true
};

export const ColoredBadgeNumberTemplate = Template.bind({});
ColoredBadgeNumberTemplate.args = {
    value: 99,
    colored: true
};
