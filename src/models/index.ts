export enum TreeDataStatus {
  ACTIVE = "Активный",
  INACTIVE = "Неактивный",
  EDITING = "Редактирование",
}

export interface ICategoryListItemData {
  id: string;
  name: string;
  children?: ICategoryListItemData[];
}

export type TreeDataItem = {
  id: number;
  name: string;
  value: number;
};
export type TreeData = {
  id: number;
  name: string;
  status: TreeDataStatus;
  items: TreeDataItem[];
};
export type TreeDataList = {
  parentId: string;
  name: string;
  items: TreeData[];
};
