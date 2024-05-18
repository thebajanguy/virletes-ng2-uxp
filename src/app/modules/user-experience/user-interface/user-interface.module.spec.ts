import { UserInterfaceModule } from "./user-interface.module";

describe("UserInterfaceModule", () => {
  let module: UserInterfaceModule;

  beforeEach(() => {
    module = new UserInterfaceModule();
  });

  it("should create an instance", () => {
    expect(module).toBeTruthy();
  });
});
