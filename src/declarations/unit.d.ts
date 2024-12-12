declare module "vitest" {
  export interface TestContext {
    unit: {
      foo: number;
      bar: string;
    };
  }
}
