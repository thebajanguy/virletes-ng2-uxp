import { UserExperienceModule } from "./user-experience.module";

describe("UserExperienceModule", () => {
  let module: UserExperienceModule;

  beforeEach(() => {
    module = new UserExperienceModule();
  });

  it("should create an instance", () => {
    expect(UserExperienceModule).toBeTruthy();
  });
});
