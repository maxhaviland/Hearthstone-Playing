import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { CardsController } from "./cards/cards.controller";
import { BlizzardController } from "./blizzard/blizzard.controller";
import { BlizzardService } from "./blizzard/blizzard.service";
import { BlizzardModule } from "./blizzard/blizzard.module";
import credential from "./config/credential";

@Module({
  imports: [
    MongooseModule.forRoot(credential),
    UserModule,
    BlizzardModule,
    HttpModule,
  ],
  controllers: [AppController, CardsController, BlizzardController],
  providers: [AppService, BlizzardService],
})
export class AppModule {}
