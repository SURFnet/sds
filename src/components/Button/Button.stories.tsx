import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import {ReactComponent as ArrowDownIcon} from "../../icons/functional-icons/arrow-down-2.svg";
import {ReactComponent as ArrowRightIcon} from "../../icons/functional-icons/arrow-right.svg";
import Button, {defaultButtonProps} from "./Button";
import ButtonType from "./ButtonType";
import ButtonSize from "./ButtonSize";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
  args: {
    ...defaultButtonProps,
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  txt: "Default",
};

export const DefaultWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultWithIcon.args = {
  txt: "Default",
  icon: <ArrowRightIcon/>
};

export const WithChevron = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithChevron.args = {
  txt: "Default",
  children: <ArrowDownIcon />,
};

export const DefaultSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSmall.args = {
  txt: "Small",
  size: ButtonSize.Small,
};

export const DefaultFull = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultFull.args = {
  txt: "Full with a lot of text",
  size: ButtonSize.Full,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  txt: "Primary disabled",
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  txt: "Secondary",
  type: ButtonType.Secondary,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  txt: "Secondary disabled",
  type: ButtonType.Secondary,
  disabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  txt: "Tertiary",
  type: ButtonType.Tertiary,
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  txt: "Tertiary disabled",
  type: ButtonType.Tertiary,
  disabled: true,
};
export const DestructivePrimaryButton = Template.bind({});
DestructivePrimaryButton.args = {
  type: ButtonType.DestructivePrimary,
  txt: "DestructivePrimary",
};

export const DestructiveSecondaryButton = Template.bind({});
DestructiveSecondaryButton.args = {
  type: ButtonType.DestructiveSecondary,
  txt: "DestructiveSecondary",
};

export const DestructiveTertiaryButton = Template.bind({});
DestructiveTertiaryButton.args = {
  type: ButtonType.DestructiveTertiary,
  txt: "DestructiveTertiary",
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  type: ButtonType.Delete,
};

export const DeleteDisabledButton = Template.bind({});
DeleteDisabledButton.args = {
  type: ButtonType.Delete,
  disabled: true,
};

export const DeleteSecondaryButton = Template.bind({});
DeleteSecondaryButton.args = {
  type: ButtonType.DeleteSecondary,
  txt: "Delete me",
};

export const GhostLight = Template.bind({});
GhostLight.args = {
  txt: "GhostLight",
  type: ButtonType.GhostLight,
};
GhostLight.parameters = { backgrounds: { default: "blue" } };

export const GhostLightDisabled = Template.bind({});
GhostLightDisabled.args = {
  txt: "GhostLight disabled",
  type: ButtonType.GhostLight,
  disabled: true,
};
GhostLightDisabled.parameters = { backgrounds: { default: "blue" } };

export const GhostDark = Template.bind({});
GhostDark.args = {
  txt: "GhostDark",
  type: ButtonType.GhostDark,
};

export const GhostDarkDisabled = Template.bind({});
GhostDarkDisabled.args = {
  txt: "GhostDark disabled",
  type: ButtonType.GhostDark,
  disabled: true,
};
