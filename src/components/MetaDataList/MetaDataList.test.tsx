import React from "react";
import {render} from "@testing-library/react";

import MetaDataList from "./MetaDataList";


describe("MetaDataList", () => {
    test("renders the MetaDataList component", () => {
        render(<MetaDataList items={[{label: "", values: ["v1"]}]}
                             lessLabel={"less"}
                             moreLabel={"more"}
        />);
    });
});