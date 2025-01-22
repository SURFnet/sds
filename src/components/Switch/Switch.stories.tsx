import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import Switch from "./Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Switch",
  component: Switch,
} as Meta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const EnabledTrue = Template.bind({});
EnabledTrue.args = {
  name: "EnabledTrue",
  value: true,
  onChange: () => true,
  disabled: false,
  tooltip: "Lorum Ipsum",
};

export const EnabledFalse = Template.bind({});
EnabledFalse.args = {
  name: "EnabledFalse",
  value: false,
  onChange: () => true,
  disabled: false,
};

export const DisabledFalse = Template.bind({});
DisabledFalse.args = {
  name: "DisabledFalse",
  value: false,
  onChange: () => true,
  disabled: true,
  tooltip: "They disabled me 😔",
};
