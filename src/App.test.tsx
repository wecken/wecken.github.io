import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

test("renders the portfolio app", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText(/About Wecken/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Settings/i)).toBeInTheDocument()
})
