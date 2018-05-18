import { Component, OnInit } from '@angular/core';
import {SearchService } from '../search.service';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  constructor(private httpmodule: HttpModule,
    private dataService: SearchService) {
    const Icustomer = [];
  }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {

    });
  }
}
