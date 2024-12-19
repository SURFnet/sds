import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import BreadCrumb from "./BreadCrumb";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/BreadCrumb",
  component: BreadCrumb,
} as Meta<typeof BreadCrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BreadCrumb> = (args) => <BreadCrumb {...args} />;

export const BreadCrumbTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BreadCrumbTemplate.args = {
  items: [
    { component: <a href="#">Level 1</a> },
    { component: <a href="#">Level 2</a> },
    {
      component: (
        <a href="#" aria-current="page">
          Level 3
        </a>
      ),
    },
  ],
};
