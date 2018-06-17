import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../shared/constants/constants';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  constructor(private router: Router) { }

  search(query): void {
    this.router.navigate(['/search'], { queryParams: { [Constants.__searchParameterQueryString]: query } });
  }
}
