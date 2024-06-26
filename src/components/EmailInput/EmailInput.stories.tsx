import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import EmailInput from './EmailInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/EmailInput',
    component: EmailInput,
    args: {
        name: "Invitees",
        emails: ["john.doe@example.com", "mary.doe@example.com", "Paul Doe <paul.doe@example.com>", "invalid.email"],
        addEmails: () => true,
        removeMail: () => true,
        validateExistingMails: true,
        errorMessage: "Following invalid emails were removed: ",
        inviteesMessagesTooltip: "Invite users to become member",
        inviteesPlaceholder: "Add emails",
        pinnedEmails: ["john.doe@example.com"],
        error: false
    }
} as Meta<typeof EmailInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EmailInput> = (args) => <EmailInput {...args} />;

export const DefaultTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultTemplate.args = {
    error: false,
    required: true
};

export const ErrorTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorTemplate.args = {
    emails: [],
    error: true
};
