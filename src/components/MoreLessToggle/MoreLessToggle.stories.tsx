import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import MoreLessToggle from "./MoreLessToggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/MoreLessToggle",
  component: MoreLessToggle,
} as Meta<typeof MoreLessToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MoreLessToggle> = (args) => (
  <MoreLessToggle {...args} />
);

export const MoreLessToggleTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MoreLessToggleTemplate.args = {
  txt: "One liner",
};

export const MoreLessToggleFullTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MoreLessToggleFullTemplate.args = {
  txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor. Id donec ultrices tincidunt arcu. Ut lectus arcu bibendum at varius. At auctor urna nunc id cursus metus aliquam. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Parturient montes nascetur ridiculus mus. Sit amet justo donec enim diam vulputate ut pharetra sit. Id semper risus in hendrerit gravida rutrum. Vitae ultricies leo integer malesuada nunc. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Quis blandit turpis cursus in. In tellus integer feugiat scelerisque varius morbi enim nunc. Cras sed felis eget velit aliquet sagittis. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
Ut tristique et egestas quis ipsum suspendisse ultrices gravida. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Et tortor at risus viverra adipiscing at. Orci nulla pellentesque dignissim enim sit. Quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae justo eget magna fermentum iaculis eu non. Vitae nunc sed velit dignissim sodales ut. Ultrices sagittis orci a scelerisque purus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Arcu non sodales neque sodales ut etiam. Risus ultricies tristique nulla aliquet enim tortor. Nulla porttitor massa id neque aliquam vestibulum morbi. Tincidunt arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Diam sollicitudin tempor id eu nisl nunc mi. Nisi scelerisque eu ultrices vitae auctor. Id aliquet risus feugiat in ante metus dictum at tempor. Amet consectetur adipiscing elit duis tristique sollicitudin. `,
};

export const MoreLessToggleCutoffTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MoreLessToggleCutoffTemplate.args = {
  txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor. Id donec ultrices tincidunt arcu. Ut lectus arcu bibendum at varius. At auctor urna nunc id cursus metus aliquam. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Parturient montes nascetur ridiculus mus. Sit amet justo donec enim diam vulputate ut pharetra sit. Id semper risus in hendrerit gravida rutrum. Vitae ultricies leo integer malesuada nunc. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Quis blandit turpis cursus in. In tellus integer feugiat scelerisque varius morbi enim nunc. Cras sed felis eget velit aliquet sagittis. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
Ut tristique et egestas quis ipsum suspendisse ultrices gravida. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Et tortor at risus viverra adipiscing at. Orci nulla pellentesque dignissim enim sit. Quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae justo eget magna fermentum iaculis eu non. Vitae nunc sed velit dignissim sodales ut. Ultrices sagittis orci a scelerisque purus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Arcu non sodales neque sodales ut etiam. Risus ultricies tristique nulla aliquet enim tortor. Nulla porttitor massa id neque aliquam vestibulum morbi. Tincidunt arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Diam sollicitudin tempor id eu nisl nunc mi. Nisi scelerisque eu ultrices vitae auctor. Id aliquet risus feugiat in ante metus dictum at tempor. Amet consectetur adipiscing elit duis tristique sollicitudin. `,
  cutoffNumber: 300,
  moreLabel: "Show me more",
  lessLabel: "Show me less",
};
