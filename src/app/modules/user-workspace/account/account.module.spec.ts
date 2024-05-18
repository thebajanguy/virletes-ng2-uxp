import { AccountModule } from "./account.module";

describe("UserModule", () => {
  let module: AccountModule;

  beforeEach(() => {
    module = new AccountModule();
  });

  it("should create an instance", () => {
    expect(module).toBeTruthy();
  });
});
