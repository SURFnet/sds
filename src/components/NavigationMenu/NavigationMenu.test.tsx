import React from "react";
import {render} from "@testing-library/react";

import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu", () => {
    test("renders the NavigationMenu component", () => {
        render(<NavigationMenu groups={[]} logoLabel={"logoLabel"} title={"title"} setActiveMenuItem={() => true}/>);
    });
});