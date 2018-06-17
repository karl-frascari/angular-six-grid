import { Routes } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';

export const routes: Routes = [
    {
        path: 'search',
        component: SearchInputComponent
    },
    {
        path: '',
        component: SearchInputComponent
    }
];
