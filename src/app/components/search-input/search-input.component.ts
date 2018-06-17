import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../shared/constants/constants';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Input() size: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.size = this.size || Constants.__inputClassDefaultName;
  }

  /**
  * Trigger the search by changing the route to search and sending the input value.  
  * @param {string} query - input value to search.
  */
  querySearch(query): void {
    this.router.navigate(['/search'], { queryParams: { [Constants.__searchParameterQueryString]: query } });
  }
}
