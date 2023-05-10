import React from "react";
import {render} from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

describe("BreadCrumb", () => {
    test("renders the BreadCrumb component", () => {
        render(<BreadCrumb items={[]}/>);
    });
});