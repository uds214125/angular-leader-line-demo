import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MockDataService } from "./mock-data.service";

import LeaderLine from "../assets/js/leader-line.min.js";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [MockDataService]
})
export class AppComponent implements OnInit, AfterViewInit {
  tableData: any;

  constructor(public dataService: MockDataService) {}
  ngOnInit() {
    this.tableData = this.dataService.getMockData();
    setTimeout(() => {
      this.onDrawLine();
    }, 2000);
  }
  ngAfterViewInit() {}
  onDrawLine() {
    Promise.resolve(this.tableData).then(v => {
      for (let i = 0; i < this.tableData.data.length; i++) {
        const col = this.tableData.data[i].columndetails;

        for (let j = 0; j < col.length; j++) {
          if (col[j].constraints != undefined) {
            if (col[j].constraints.fk) {
              if (col[i].name && col[j].name) {
                console.log(`${col[j].name}`, " ==== ", `${col[j].name}`);
                this.leaderDraw(`${col[j].name}`, `${col[j].name}`);
              }
            }
          }
        }
      }
      // this.leaderDraw("start", "end");
    });
  }
  leaderDraw(startId: string, endId: string) {
    let start = document.getElementById(startId);
    let end = document.getElementById(endId);

    return new LeaderLine(start, end);
  }
}
