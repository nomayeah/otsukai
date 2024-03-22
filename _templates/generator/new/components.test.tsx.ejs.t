---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
// generated by hygen
import React from "react";
import { composeStories } from "@storybook/react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./<%= component_name %>.stories";

const { Default } = composeStories(stories);

describe("<%= abs_path %>", () => {

  test("<%= category %> である", () => {
    const { container } = render(<Default />);
    expect(container).toBe<%= upperSingleCategory %>();
  });

});