import { Component, OnInit } from '@angular/core';
import { IStatement } from 'src/app/constants/common-classes';
import { URI } from 'src/app/constants/uri';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {
  loader = false;
  statements: IStatement[] = [];
  constructor(private remote: ApiCallsService) { }

  ngOnInit(): void {
    this.getStatement();
  }

  getStatement = () => {
    this.loader = true;
    this.remote
      .get(URI.statement)
      .subscribe((response: any) => {
        this.loader = false;
        if (response) {
          this.statements = response;
        }
      });
  }

}
