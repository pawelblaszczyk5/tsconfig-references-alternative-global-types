
declare module "vitest" {
  export interface TestContext {
    integration: {
      test: string;
    };
  }
}
