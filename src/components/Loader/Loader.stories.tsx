import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import Loader from "./Loader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Loader",
  component: Loader,
} as Meta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoaderTemplate.args = {};

export const LoaderChildren = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoaderChildren.args = {
  children: (
    <div className={"loader-msg"}>
      <span>Please wait, take some ☕️...</span>
    </div>
  ),
};
