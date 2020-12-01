import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/common/http/http.service";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable } from "rxjs";
import simpleOauth2, { ModuleOptions } from 'simple-oauth2';

import passport, { PassportStatic } from 'passport'
import { Strategy } from 'passport-bnet'

@Injectable()
export class BlizzardService {
  private credentials: ModuleOptions;
  private passportBNet: PassportStatic;

  constructor(private httpService: HttpService) {

    this.credentials = {
      client: {
        id: process.env.CLIENT_ID, 
        secret: process.env.CLIENT_SECRET
      },
      auth: {
        tokenHost: "https://us.battle.net"
      }
    }
    this.passportBNet = passport?.use(
      new Strategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        region: "us",
      }, (acessToken, refreshToken, profile, done) => done(null, acessToken))
    );
  }
  authentication() {
    try {
      return this.passportBNet.authorize('bnet')
    } catch (error) {
      return error;
    }
  }
}
