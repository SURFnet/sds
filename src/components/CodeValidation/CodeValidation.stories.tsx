import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import CodeValidation from "./CodeValidation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/CodeValidation",
  component: CodeValidation,
} as Meta<typeof CodeValidation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CodeValidation> = (args) => (
  <CodeValidation {...args} />
);

export const TotpCodeValidation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TotpCodeValidation.args = {
  verify: (val: any) => alert(val),
  size: 6,
  validate: (val: any) => !isNaN(val),
  info: "Only numbers allowed",
};

export const PinCodeValidation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PinCodeValidation.args = {
  verify: (val: any) => alert(val),
  size: 4,
  validate: (val: any) => /^[a-zA-Z]*$/.test(val),
  transformer: (val: any) => val.toUpperCase(),
  info: "Only characters with uppercase transformation",
};

export const DisabledCodeValidation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledCodeValidation.args = {
  verify: (val: any) => false,
  size: 6,
  disabled: true,
};
