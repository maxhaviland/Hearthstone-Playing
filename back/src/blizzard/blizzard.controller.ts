import { Controller, Get } from "@nestjs/common";
import { BlizzardService } from "./blizzard.service";

@Controller("blizzard")
export class BlizzardController {
  constructor(private service: BlizzardService) {}
  @Get("/")
  getByUsername() {
    return this.service.authentication()
  }

}
