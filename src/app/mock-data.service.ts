import { Injectable } from "@angular/core";
import data from "./data.json";
@Injectable({
  providedIn: "root"
})
export class MockDataService {
  constructor() {}

  getMockData() {
    return data;
  }
}
