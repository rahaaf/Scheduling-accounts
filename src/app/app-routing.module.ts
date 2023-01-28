import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingTreeComponent } from './components/accounting-tree/accounting-tree.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
{path: '' ,   component:AccountingTreeComponent},
{path: 'table', component: TableComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
