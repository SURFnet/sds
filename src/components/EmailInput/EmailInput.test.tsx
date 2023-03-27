import React from "react";
import {render} from "@testing-library/react";

import EmailInput from "./EmailInput";


describe("EmailInput", () => {
    test("renders the EmailInput component", () => {
        render(<EmailInput name={"email-input"}
                           emails={["john.doe@example.com", "mary.doe@example.com"]}
                           addEmails={() => true}
                           removeMail={() => true}
                           errorMessage={"Following invalid emails were removed: "}
                           inviteesMessagesTooltip={"Invite users to become member"}
                           inviteesPlaceholder={"Add emails"}
                           pinnedEmails={["john.doe@example.com"]}
                           error={false}/>
        )

    })
});