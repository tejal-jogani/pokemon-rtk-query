import { describe, it, vi } from "vitest";
import { http, HttpResponse } from "msw";
import { waitFor, screen } from "@testing-library/react";

import App from "../../../../App";
import { server } from "../../../server";
import { renderWithProviders } from "../../../server/test-utils";
import PokemonDetailsJson from "../../../../data/PokemonDetails.json";
import { BrowserRouter, Params } from "react-router-dom";

/* Test case for mocking router functions */
vi.mock("react-router-dom", () => ({
  BrowserRouter: vi.fn().mockImplementation((props) => props.children),
  Routes: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Route: ({ element }: { element: React.ReactNode }) => <div>{element}</div>,
  useParams: (): Readonly<Params<string>> => ({ id: "1" }),
  Link: () => vi.fn(),
}));

describe("App", () => {
  /* Test case for mocking pockemon detail success api response */
  it("handles success response", async () => {
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon/1", () => {
        return HttpResponse.json(PokemonDetailsJson);
      })
    );

    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
  });

  /* Test case for mocking pockemon detail error api response */
  it("handles error response", async () => {
    server.use(
      http.get("*", () => {
        return new HttpResponse(null, {
          status: 500,
        });
      })
    );

    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const errorText = await screen.findByTestId("d-error");

    await waitFor(() => {
      expect(errorText.textContent).toBe("Something went wrong!")
    })
  });

});
