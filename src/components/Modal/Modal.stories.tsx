import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import Modal from "./Modal";
import AlertType from "../Alert/AlertType";
import {ReactComponent as AlarmBellIcon} from "../../icons/functional-icons/allowance-no-talking.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Modal",
  component: Modal,
} as Meta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const ModalTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalTemplate.args = {
  confirm: () => true,
  cancel: () => true,
  title: "Title",
  question:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  alertType: AlertType.Info,
  subTitle: "subTitle",
  confirmDisabled: false,
  confirmationButtonLabel: "Confirm",
  cancelButtonLabel: "Cancel",
  full: true,
};

export const ModalTemplateConfirmDisabled = Template.bind({});
ModalTemplateConfirmDisabled.args = {
  confirm: () => true,
  cancel: () => true,
  title: "Title",
  question: "Question.",
  alertType: AlertType.Error,
  confirmDisabled: true,
  confirmationButtonLabel: "Submit",
  cancelButtonLabel: "Cancel",
};

export const ModalTemplateNoCancel = Template.bind({});
ModalTemplateNoCancel.args = {
  confirm: () => true,
  title: "Title",
  question: "Question.",
  confirmationButtonLabel: "Ok",
};

export const ModalNoTitle = Template.bind({});
ModalNoTitle.args = {
  cancel: () => true,
  confirm: () => true,
  confirmationButtonLabel: "Only one",
  cancelButtonLabel: "Cancel",
  children: <p><AlarmBellIcon /> Custom child</p>,
};

export const ModalTemplateError = Template.bind({});
ModalTemplateError.args = {
  confirm: () => true,
  isError: true,
  title: "Title",
  question: "Question.",
  confirmationButtonLabel: "Ok",
};

export const ModalTemplateNoConfirm = Template.bind({});
ModalTemplateNoConfirm.args = {
  title: "Title",
  question: "Look mom, no buttons",
};
