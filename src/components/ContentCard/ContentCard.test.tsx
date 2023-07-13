import React from "react";
import {render} from "@testing-library/react";

import ContentCard from './ContentCard';

describe("ContentCard", () => {
    test("renders the ContentCard component", () => {
        render(<ContentCard title={"title"} description={"Some description"}/>);
    });
});