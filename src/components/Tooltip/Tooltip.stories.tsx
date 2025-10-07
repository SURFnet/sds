import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {ReactComponent as AlarmBellIcon} from "../../icons/functional-icons/alarm-bell.svg";

import Tooltip from "./Tooltip";
import {Button} from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const TooltipTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TooltipTemplate.args = {
  tip: "<strong>Strong</strong> long tip with HTML in it. <a href='https://google.com' target='_blank'>Click me</a> please",
  clickable: true,
};

export const TooltipChildrenTemplate = Template.bind({});
TooltipChildrenTemplate.args = {
  tip: "<strong>Strong</strong> long tip with html in it. <a href='https://google.com' target='_blank'>Click me</a> please",
  clickable: true,
  children: <AlarmBellIcon />,
};

export const TooltipButtonTemplate = Template.bind({});
TooltipButtonTemplate.args = {
  tip: "Does this show",
  clickable: true,
  children: <Button onClick={() => true} txt={"Click me"} />,
};

export const TooltipRight = Template.bind({});
TooltipRight.args = {
  tip: "Placed right.",
  place: "right",
};

export const TooltipLong = Template.bind({});
TooltipLong.args = {
  tip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
