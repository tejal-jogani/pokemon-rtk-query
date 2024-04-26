import { describe, it } from "vitest";
import { http, HttpResponse } from "msw";
import { waitFor, screen } from "@testing-library/react";

import App from "../../../App";
import { server } from "../../server";
import { renderWithProviders } from "../../server/test-utils";
import PokemonJson from "../../../data/Pokemon.json";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  /* Test case for mocking pockemon get list success api response */
  it("handles pokemon list api success response", async () => {
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon", () => {
        return HttpResponse.json(PokemonJson);
      })
    );

    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const textContent = await screen.findByText("PokeReact");

    await waitFor(() => {
      expect(textContent).toBeTruthy()
    })
  });

  /* Test case for mocking pockemon get list error api response */
  it("handles pokemon list api error response", async () => {
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

    const errorText = await screen.findByTestId("error");

    await waitFor(() => {
      expect(errorText.textContent).toBe("Something went wrong!")
    })
  });
});
