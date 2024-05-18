import { MarketingModule } from "./marketing.module";

describe("MarketingModuleModule", () => {
  let module: MarketingModule;

  beforeEach(() => {
    module = new MarketingModule();
  });

  it("should create an instance", () => {
    expect(module).toBeTruthy();
  });
});
