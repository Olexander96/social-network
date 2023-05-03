import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component", () => {
    test("correct spans count", () => {
        const component = create(<Paginator portionSize = { 10 }/>);
        const root = component.root;
        const spans = root.findAllByType("span")
        expect(spans.length).toBe(10);
    })
})