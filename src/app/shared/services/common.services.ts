import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from "@angular/common/http";
import { Singer } from '../models/singer';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()

export class CommonServices {

    constructor(private http: Http, private route: ActivatedRoute) { }

    /**
    * Filter singers fetched by a emulated API.  
    * @param {string} filterQuery - string to compare.
    */
    filterRandomSingers(filterQuery: string) {
        return this.http.get('api/randomSingers').pipe(map(data => {
            return this.filterObjByString(data["_body"], filterQuery);
        }));
    }


    /**
    * Get the value of target query string. 
    * @param {string} filterQuery - string to compare.
    */
    getQueryParameter(parameter: string): string {
        return this.route.snapshot.queryParams[parameter];
    }


    /**
    * Helper to compare and match the values of some array of objects with some string.
    * @param {string} string - string to compare.
    * @param {array} array - array of objects.
    */
    filterObjByString(array, string): any {
        return array.filter(item => {
            return Object.keys(item).map(key => {
                return this.clearString(item[key]).includes(this.clearString(string));
            }).filter(found => found).length;
        });
    }


    /**
    * Helper that removes special characters and apply a pattern to compare.
    * @param {string} string - string to compare.
    */
    clearString(value): string {
        return value.toString().toLowerCase().replace(/[^a-z0-9]/g, "");
    }
}