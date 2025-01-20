import React from "react";
import {render} from "@testing-library/react";

import ErrorIndicator from './ErrorIndicator';
import ErrorIndicatorType from "./ErrorIndicatorType";

describe("ErrorIndicator", () => {
    test("renders the ErrorIndicator component", () => {
        render(<ErrorIndicator message={"Hello world!"} errorIndicatorType={ErrorIndicatorType.Info}/>);
    });
});