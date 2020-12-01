import { HttpModule, Module } from "@nestjs/common";
import { BlizzardService } from "./blizzard.service";

@Module({
  imports: [
    HttpModule.register({
      timeout: 45000,
      maxRedirects: 5,
    }),
  ],
  providers: [BlizzardService],
})
export class BlizzardModule {}
