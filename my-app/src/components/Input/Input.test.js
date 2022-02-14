import React from "react";
import Input from "./Input";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

it("checks input", () => {
  const onkeypress = jest.fn();

  render(<Input onkeypress={onkeypress}/>);

  const input = screen.getByTestId("input");

  userEvent.type(input, 'Hello,{enter}World!')

  expect(onkeypress).toHaveBeenCalled()
  expect(input).toBeInTheDocument();


});
    