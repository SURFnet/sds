import React from "react";
import {render} from "@testing-library/react";

import Table,{defaultTableProps} from "./Table";

describe("Table", () => {
    test("renders the Table component", () => {
        render(<Table entities={[]} defaultSort={"name"} columns={[]}/>);
    });
});