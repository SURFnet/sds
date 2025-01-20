import React from "react";
import {render} from "@testing-library/react";

import ColorPallet from "./ColorPallet";

describe("Checkbox", () => {
    test("renders the Checkbox component", () => {
        render(<ColorPallet name={"root"} colors={[]}/>);
    });
});