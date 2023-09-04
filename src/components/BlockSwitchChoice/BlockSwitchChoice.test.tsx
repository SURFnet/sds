import React from "react";
import {render} from "@testing-library/react";
import BlockSwitchChoice from "./BlockSwitchChoice";

describe("BlockSwitchChoice", () => {
    test("renders the BlockSwitchChoice component", () => {
        render(<BlockSwitchChoice items={[]} value={"val1"}/>);
    });
});