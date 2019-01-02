import { ArticleListComponent } from './article-list/article-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'news/:sourceKey', component: ArticleListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


