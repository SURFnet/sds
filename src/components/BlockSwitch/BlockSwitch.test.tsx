import React from "react";
import {render} from "@testing-library/react";

import BlockSwitch from "./BlockSwitch";

describe("BlockSwitch", () => {
    test("renders the BlockSwitch component", () => {
        render(<BlockSwitch active={true} value={"value"}/>);
    });
});