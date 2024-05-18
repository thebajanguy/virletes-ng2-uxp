import { UserWorkspaceModule } from "./user-workspace.module";

describe("userworkspaceModule", () => {
  let module: UserWorkspaceModule;

  beforeEach(() => {
    module = new UserWorkspaceModule();
  });

  it("should create an instance", () => {
    expect(UserWorkspaceModule).toBeTruthy();
  });
});
