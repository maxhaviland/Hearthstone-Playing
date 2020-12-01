import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/common/http/http.service";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable } from "rxjs";

@Injectable()
export class BlizzardService {
  private configuration: AxiosRequestConfig;

  constructor(private httpService: HttpService) {
    this.configuration = {
      headers: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      },
    };
  }
  getCards(): Observable<AxiosResponse> {
    try {
      return this.httpService.get("/", this.configuration);
    } catch (error) {
      return error;
    }
  }
}
