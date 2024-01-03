import React from "react";
import {render} from "@testing-library/react";
import IconButton from "./IconButton";
import {ReactComponent as EditIcon} from "../../icons/functional-icons/edit.svg";

describe("IconButton", () => {
    test("renders the IconButton component", () => {
        render(
            <IconButton onClick={() => true}>
                <EditIcon/>
            </IconButton>
        );
    });
});