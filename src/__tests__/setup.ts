import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "../__tests__/server";
import React from "react";
global.React = React;

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

process.on("unhandledRejection", (error) => {
  // eslint-disable-next-line no-undef
  fail(error);
});

process.env.NODE_ENV = "development";