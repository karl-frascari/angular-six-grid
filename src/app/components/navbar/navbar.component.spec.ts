import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule, } from '@angular/router/testing';
import { Location } from "@angular/common";
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router } from "@angular/router";
import { routes } from "../../app.routing";
import { NavbarComponent } from './navbar.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { GridResultComponent } from '../search-grid/search-grid.component'


describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let location: Location;
    let router: Router;
    
    beforeEach(() => {
        
        TestBed.configureTestingModule({
            imports: [HttpModule, RouterTestingModule.withRoutes(routes)],
            declarations: [NavbarComponent, SearchInputComponent, GridResultComponent]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(NavbarComponent);
        router.initialNavigation();        
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('navigate to "search" takes you to /search', fakeAsync(() => {
        router.navigate(['search']) .then(() => {
            expect(location.path()).toBe('/search');
        });
    }));
});
