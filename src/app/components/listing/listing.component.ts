import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URI } from 'src/app/constants/uri';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  myhobbies: any = [
    {
      name: 'Sports',
      value: 'sports'
    },
    {
      name: 'Music',
      value: 'music',
      selected: true
    },
    {
      name: 'Movie',
      value: 'movie',
      selected: true
    },
    {
      name: 'Reading',
      value: 'reading'
    },
    {
      name: 'Writing',
      value: 'writing'
    }
  ];
  constructor(private route: ActivatedRoute, private remote: ApiCallsService) { 
    this.route.queryParams.subscribe((params: any) => {
      const {id} = params;
    });
  }

  ngOnInit(): void {
    this.fetchAPICAll();
  }

  fetchAPICAll = () => {
    this.remote
      .get(URI.publicGist + '?per_page=100&page=1')
      .subscribe(response => {
        debugger;
      })
  }

}
