import React from "react";
import {render} from "@testing-library/react";

import CodeValidation from "./CodeValidation";

describe("CodeValidation", () => {
    test("renders the CodeValidation component", () => {
        render(<CodeValidation verify={() => true} size={6}/>);
    });
});