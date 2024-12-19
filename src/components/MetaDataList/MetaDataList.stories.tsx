import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import MetaDataList from "./MetaDataList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/MetaDataList",
  component: MetaDataList,
  args: {
    lessLabel: "Less...",
    moreLabel: "More...",
  },
} as Meta<typeof MetaDataList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MetaDataList> = (args) => (
  <MetaDataList {...args} />
);

export const DefaultTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultTemplate.args = {
  items: [
    {
      label: "Access",
      values: [
        <a href="https://surf.nl">Login</a>,
        <a href="https://surf.nl">Website</a>,
      ],
    },
    {
      label: "Policies",
      values: [
        <a href="https://surf.nl">Privacy policy</a>,
        <a href="https://surf.nl">Acceptable use policy</a>,
      ],
    },
    {
      label: "Administrative contact",
      values: [
        <a href="mailto:jdoe@surf.nl">jdoe@surf.nl</a>,
        <a href="mailto:mdoe@surf.nl">mdoe@surf.nl</a>,
        <a href="mailto:hdoe@surf.nl">hdoe@surf.nl</a>,
        <a href="mailto:wdoe@surf.nl">wdoe@surf.nl</a>,
        <a href="mailto:tdoe@surf.nl">tdoe@surf.nl</a>,
      ],
    },
    {
      label: "Support contact",
      values: [<a href="mailto:tdoe@surf.nl">support@surf.nl</a>],
    },
    { label: "Policy compliance", values: ["Sirtfi, CoCo and R&S"] },
  ],
  cutOffNumber: 2,
};

export const NoCutOffTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoCutOffTemplate.args = {
  items: [
    {
      label: "Access",
      values: [
        <a href="https://surf.nl">Login</a>,
        <a href="https://surf.nl">Website</a>,
      ],
    },
    {
      label: "Policies",
      values: [
        <a href="https://surf.nl">Privacy policy</a>,
        <a href="https://surf.nl">Acceptable use policy</a>,
      ],
    },
    {
      label: "Administrative contact",
      values: [
        <a href="mailto:jdoe@surf.nl">jdoe@surf.nl</a>,
        <a href="mailto:mdoe@surf.nl">mdoe@surf.nl</a>,
        <a href="mailto:hdoe@surf.nl">hdoe@surf.nl</a>,
        <a href="mailto:wdoe@surf.nl">wdoe@surf.nl</a>,
        <a href="mailto:tdoe@surf.nl">tdoe@surf.nl</a>,
      ],
    },
    {
      label: "Support contact",
      values: [<a href="mailto:tdoe@surf.nl">support@surf.nl</a>],
    },
    { label: "Policy compliance", values: ["Sirtfi, CoCo and R&S"] },
  ],
  moreLabel: undefined,
  lessLabel: undefined,
};
