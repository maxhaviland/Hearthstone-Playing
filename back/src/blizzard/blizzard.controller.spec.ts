import { Test, TestingModule } from "@nestjs/testing";
import { BlizzardController } from "./blizzard.controller";

describe("BlizzardController", () => {
  let controller: BlizzardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlizzardController],
    }).compile();

    controller = module.get<BlizzardController>(BlizzardController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
