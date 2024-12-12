import type { TestContext } from "vitest";

const x = window.document;
// @ts-expect-error -- process not defined in integration tests
const y = process.env.TZ;

const z = {
  integration: {
    test: "bla bla",
  },
} satisfies TestContext;
