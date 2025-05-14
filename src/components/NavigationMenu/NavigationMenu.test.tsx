import React from "react";
import {render} from "@testing-library/react";

import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu", () => {
    test("renders the NavigationMenu component", () => {
        render(<NavigationMenu items={[]} logoLabel={"logoLabel"} title={"title"} navigate={() => true}/>);
    });
});