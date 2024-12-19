import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import Accordion from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Accordion",
  component: Accordion,
} as Meta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccordionTemplate.args = {
  items: [
    {
      headerText: "Header text 1",
      contentText: "Content text 1 initial open",
      open: true,
    },
    {
      headerText: "Header text 2",
      contentText: "Content text 2 ",
      open: false,
    },
    { headerText: "Header text 3", contentText: "Content text 3", open: false },
  ],
};
