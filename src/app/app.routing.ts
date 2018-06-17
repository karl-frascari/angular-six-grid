import { Routes } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { GridResultComponent } from './components/search-grid/search-grid.component';

export const routes: Routes = [
    {
        path: 'search',
        component: GridResultComponent
    },
    {
        path: '',
        component: SearchInputComponent
    }
];
