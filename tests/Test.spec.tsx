import {expect, test} from "vitest";
import {render} from "vitest-browser-react";
import { Test } from "../src/Test.tsx";

test("renders name", async () => {
    const { getByText, getByRole } = render(<Test name="Vitest"/>);
    
    await expect.element(getByText("Hello Vitest x1!")).toBeInTheDocument();
    await getByRole("button", {name: "Increment"}).click();

    await expect.element(getByText("Hello Vitest x2!")).toBeInTheDocument();
})