import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import Toaster from "./Toaster";
import ToasterType from "./ToasterType";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Toaster",
  component: Toaster,
} as Meta<typeof Toaster>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Toaster> = (args) => <Toaster {...args} />;

export const ToasterDefault = Template.bind({});
ToasterDefault.args = {
  message: "Toaster default",
  toasterType: ToasterType.Default,
};

export const ToasterWithButton = Template.bind({});
ToasterWithButton.args = {
  message: "Toaster success with action",
  toasterType: ToasterType.Success,
  action: () => true,
  actionLabel: "Action",
};

export const ToasterInfo = Template.bind({});
ToasterInfo.args = {
  message: "Toaster info",
  toasterType: ToasterType.Info,
};

export const ToasterSuccessClosable = Template.bind({});
ToasterSuccessClosable.args = {
  message:
    "Toaster success with action<br/><br/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient",
  toasterType: ToasterType.Success,
  close: () => alert("success"),
};

export const ToasterWarning = Template.bind({});
ToasterWarning.args = {
  message: "Toaster warning",
  toasterType: ToasterType.Warning,
};

export const ToasterError = Template.bind({});
ToasterError.args = {
  message: "Toaster error",
  toasterType: ToasterType.Error,
};

export const ToasterFullWidth = Template.bind({});
ToasterFullWidth.args = {
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  toasterType: ToasterType.Info,
  large: true,
};

export const ToasterChildren = Template.bind({});
ToasterChildren.args = {
  toasterType: ToasterType.Info,
  children: (
    <div>
      <a href={"/"}>Toaster info</a>
      <br />
      <br />
      <p>More information</p>
    </div>
  ),
};
