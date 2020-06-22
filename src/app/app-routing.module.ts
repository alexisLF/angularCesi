import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { DetailsPageComponent } from './details-page/details-page.component'
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
    {
      path: '',
      component: SearchPageComponent
    },
   {
      path: 'details-page',
      component: DetailsPageComponent
   },
   {
     path: 'results-page',
     component: ResultsPageComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
