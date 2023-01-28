
export interface Accounts_Tree {
  accIndex_Code: any;
  accIndex_NodeType_FK: any;
  accIndex_Name_AR: any;
  accIndex_Name_EN: any;
  accIndex_Number: any;
  accIndex_Type_FK: any;
  accIndex_Form_FK?: any;
  accIndex_AppearIN_FK?: any;
  accIndex_Parent_Code_FK?: any;
  children?: Accounts_Tree[];
}
