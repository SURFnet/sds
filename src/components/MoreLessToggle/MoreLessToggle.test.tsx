import React from "react";
import {render} from "@testing-library/react";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import MoreLessToggle from "./MoreLessToggle";

describe("MoreLessToggle", () => {
    test("renders the MoreLessToggle component", () => {
        render(<MoreLessToggle txt={"Text"}/>);
    });
});