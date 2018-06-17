import { Component, OnInit, Input } from '@angular/core';
import { Singer } from '../../shared/models/singer';
import { CommonServices } from '../../shared/services/common.services';
import { Constants } from '../../shared/constants/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-grid',
  templateUrl: './search-grid.component.html',
  styleUrls: ['./search-grid.component.scss'],
  providers: [CommonServices]
})
export class GridResultComponent implements OnInit {

  private _queryValue: string;
  private _list: Array<Singer>;

  constructor(private commonServices: CommonServices, private route: ActivatedRoute) { }

  /* -- getter and setters -- */
  get list() {
    return this._list;
  }

  set list(value: Array<Singer>) {
    this._list = value;
  }

  get queryValue() {
    return this._queryValue;
  }

  set queryValue(value: string) {
    this._queryValue = value;
  }


  /* -- Default methods -- */
  ngOnInit() {
    this.searchByQuery(Constants.__searchParameterQueryString);
  }


  /* -- Custom methods -- */

  /**
  * Get list to fill the grid using the query value passed by the search-input.  
  * @param {string} query - input value to search.
  */
  getList() {
    this.commonServices.filterRandomSingers(this.queryValue)
      .subscribe(singersList => this.list = singersList);
  }


  /**
  * Method to listem changes on the route, to enable the user to still see the results even if he reload the pages 
  * @param {string} query - input value to search.
  */
  searchByQuery(parameter: string) {
    this.route.queryParams.subscribe(() => {
      this.queryValue = this.commonServices.getQueryParameter(parameter);
      this.getList();
    });
  }
}


