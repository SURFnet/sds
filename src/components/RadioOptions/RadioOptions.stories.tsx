import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import RadioOptions from './RadioOptions';
import RadioOptionsOrientation from "./RadioOptionsOrientation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/RadioOptions',
    component: RadioOptions,
    args: {
        trueLabel: "Yes",
        falseLabel: "No"
    }
} as Meta<typeof RadioOptions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof RadioOptions> = (args) => <RadioOptions {...args} />;

export const MultipleOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleOptions.args = {
    label: "SURF Organisation",
    name: "Unique",
    value: "option3",
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum",
    isMultiple: true,
    labels: ["option1", "option2", "option3", "option4"],
    labelResolver: (label: string) => label.toUpperCase(),
    required: true
};

export const MultipleOptionsColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleOptionsColumn.args = {
    label: "SURF Organisation",
    name: "Unique",
    value: "option3",
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum",
    isMultiple: true,
    labels: ["option1", "option2", "option3", "option4"],
    labelResolver: (label: string) => label.toUpperCase(),
    orientation: RadioOptionsOrientation.column
};

export const YesEnabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
YesEnabled.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: true,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const YesEnabledReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
YesEnabledReversed.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: true,
    reverse: true,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const NoEnabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoEnabled.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: false,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const EmptyState = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyState.args = {
    label: "SURF Organisation",
    name: "Checked",
    value: null,
    onChange: () => true,
    disabled: false,
    tooltip: "Lorum Ipsum"
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled",
    name: "Disabled",
    value: false,
    onChange: () => true,
    disabled: true,
    tooltip: "Lorum Ipsum"
};
