import { UserIdentityModule } from "./user-identity.module";

describe("UserIdentityModule", () => {
  let module: UserIdentityModule;

  beforeEach(() => {
    module = new UserIdentityModule();
  });

  it("should create an instance", () => {
    expect(module).toBeTruthy();
  });
});
