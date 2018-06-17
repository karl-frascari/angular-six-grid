import { Component, OnInit } from '@angular/core';
import { CommonServices } from '../../shared/services/common.services';
import { Constants } from '../../shared/constants/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [CommonServices]
})
export class NavbarComponent implements OnInit {

  private _showSearchInput: string;

  constructor(private commonServices: CommonServices, private route: ActivatedRoute) { }

  /* -- getter and setters -- */
  get showSearchInput() {
    return this._showSearchInput;
  }

  set showSearchInput(value: string) {
    this._showSearchInput = value;
  }


  /* -- Default methods -- */
  ngOnInit() {
    this.setSearchInputVisibility(Constants.__searchParameterQueryString);
  }


  /* -- Custom methods -- */
  setSearchInputVisibility(parameter: string) {
    this.route.queryParams.subscribe(() => {
      this.showSearchInput = this.commonServices.getQueryParameter(parameter);
    });
  }

}
