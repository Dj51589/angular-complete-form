import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      const { id } = params;
    });

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      
    });
  }

  goBack = () => {
    this.router.navigate(['/listing'], { relativeTo: this.route, queryParams: { name: 'dj', id: '51589' } });
  }

}
