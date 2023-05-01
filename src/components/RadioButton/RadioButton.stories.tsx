import React from "react";
import {Meta, StoryFn} from '@storybook/react';

import RadioButton from "./RadioButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/RadioButton",
    component: RadioButton,
} as Meta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof RadioButton> = (args) => (
    <RadioButton {...args} />
);

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
    label: "Checked",
    name: "Checked",
    checked: true,
    value: "checked",
    onChange: () => true,
    tooltip: "Lorum Ipsum",
};

export const NotChecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotChecked.args = {
    label: "Not checked",
    name: "Not checked",
    checked: false,
    value: "not-checked",
    onChange: () => true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    label: "Checked disabled",
    name: "Checked disabled",
    checked: true,
    value: "Checked diabled",
    onChange: () => true,
    disabled: true,
};

export const NotCheckedDisabled = Template.bind({});
NotCheckedDisabled.args = {
    name: "Not checked disabled",
    label: "Not checked disabled",
    checked: false,
    value: "Not checked disabled",
    onChange: () => true,
    disabled: true,
};
