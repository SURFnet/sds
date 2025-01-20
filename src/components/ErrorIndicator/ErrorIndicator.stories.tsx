import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import ErrorIndicator from "./ErrorIndicator";
import ErrorIndicatorType from "./ErrorIndicatorType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ErrorIndicator",
  component: ErrorIndicator,
} as Meta<typeof ErrorIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ErrorIndicator> = (args) => <ErrorIndicator {...args} />;

export const ErrorIndicatorDefault = Template.bind({});
ErrorIndicatorDefault.args = {
  message: "ErrorIndicator default",
  errorIndicatorType: ErrorIndicatorType.Default,
};

export const ErrorIndicatorInfo = Template.bind({});
ErrorIndicatorInfo.args = {
  message: "ErrorIndicator info",
  errorIndicatorType: ErrorIndicatorType.Info,
};

export const ErrorIndicatorSuccessHtml = Template.bind({});
ErrorIndicatorSuccessHtml.args = {
  message:
    "ErrorIndicator success with <strong>HTML</strong>",
  errorIndicatorType: ErrorIndicatorType.Success
};

export const ErrorIndicatorWarning = Template.bind({});
ErrorIndicatorWarning.args = {
  message: "ErrorIndicator warning",
  errorIndicatorType: ErrorIndicatorType.Warning,
};

export const ErrorIndicatorError = Template.bind({});
ErrorIndicatorError.args = {
  message: "ErrorIndicator error",
  errorIndicatorType: ErrorIndicatorType.Error,
};
