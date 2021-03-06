import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./post-list/post-list.component";
import {PostCreateComponent} from "./post-create/post-create.component";

const routes: Routes = [
  {path: '', component: PostListComponent, pathMatch: 'full'},
  {path: 'create-post', component: PostCreateComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
