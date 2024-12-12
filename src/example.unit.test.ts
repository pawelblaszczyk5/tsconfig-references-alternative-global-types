import type { TestContext } from "vitest";

// @ts-expect-error -- window not defined in unit tests
const x = window.document;
const y = process.env.TZ;

const z = {
  unit: {
    foo: 5,
    bar: "bla bla",
  },
} satisfies TestContext;
