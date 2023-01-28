import { Component, OnInit } from '@angular/core';
import {NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource,} from '@angular/material/tree';
import { Subscription } from 'rxjs';
import { AccountTreeService } from 'src/app/core/services/Account_Tree.service';
import { Accounts_Tree } from 'src/app/core/interface/Accounts tree';
import { AlertsService } from 'src/app/core/services/alerts.service';


@Component({
  selector: 'app-accounting-section',
  templateUrl: './accounting-tree.component.html',
  styleUrls: ['./accounting-tree.component.scss'],
})
export class AccountingTreeComponent implements OnInit {
  AccountingTree!: Subscription;
  getChild!: Subscription;
  showTable = false
  treeControl = new NestedTreeControl<Accounts_Tree>((root) => root.children);
  dataSource = new MatTreeNestedDataSource<any>();
  treeControl1 = new NestedTreeControl<Accounts_Tree>((root) => root.children);
  dataSource1 = new MatTreeNestedDataSource<Accounts_Tree>();
  TREE_DATA: Accounts_Tree[] = [];

  dataSource2: any = []

  constructor(private AccountingService: AccountTreeService,
    private alertService: AlertsService) { }





  ngOnInit(): void {
    this.getTree();
  }
  hasChild = (_: number, node: Accounts_Tree) =>
    !!node.children && node.children.length > 0;

  getTree() {
    this.AccountingTree = this.AccountingService.getAccountsIndex().subscribe((data: any) => {
      this.TREE_DATA = [data]
      this.dataSource.data = this.TREE_DATA;
    }, error => {
      console.error("error", error);
          this.alertService.openSnackBarFail("لقد حدث خطأ ما ارجو إعادة المحاولة")
    })

  }

  getChildren(id: string, type: string) {
    console.log(id);
    this.getChild = this.AccountingService.getAccounting(id).subscribe({
      next: (data: any) => {

        this.dataSource2 = data?.children
      },
      error: (err) => {
        this.alertService.openSnackBarFail("لقد حدث خطأ ما ارجو إعادة المحاولة")

      },
    });
  }
  ngOnDestroy(): void {
    if (this.getChild) this.getChild.unsubscribe()
    if (this.AccountingTree) this.AccountingTree.unsubscribe();
  }
}
