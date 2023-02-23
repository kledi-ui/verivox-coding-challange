import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../model/interface";

@Injectable({ providedIn: "root" })
export class AppService {
  private url: string = "../../assets/MOCK_DATA.json";
  constructor(private httpClient: HttpClient) {}

  public getProductList(): Observable<Array<IProduct>> {
    return this.httpClient.get<Array<IProduct>>(this.url);
  }
}
