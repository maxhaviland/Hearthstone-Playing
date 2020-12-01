import { Test, TestingModule } from "@nestjs/testing";
import { BlizzardService } from "./blizzard.service";

describe("BlizzardService", () => {
  let service: BlizzardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlizzardService],
    }).compile();

    service = module.get<BlizzardService>(BlizzardService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
