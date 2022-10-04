import {
  ICategoryListItemData,
  TreeData,
  TreeDataItem,
  TreeDataList,
  TreeDataStatus,
} from "@/models";

let treeDataIdCounter = 0;
let treeDataItemIdCounter = 0;

const createTreeDataList = (
  parentId: string,
  name: string,
  items: TreeData[]
) => ({
  parentId,
  name,
  items,
});

const createTreeData = (
  name: string,
  status: TreeDataStatus,
  items: TreeDataItem[]
) => ({
  id: treeDataIdCounter++,
  name,
  status,
  items,
});

const createTreeDataItem = (name: string, value: number) => ({
  id: treeDataItemIdCounter++,
  name,
  value,
});

const createMenuItem = (id: string, name: string) => ({
  id,
  name,
});

export const testCategoryData = (): ICategoryListItemData[] => [
  {
    id: "c1",
    name: "Main Category 1",
    children: [
      {
        id: "c1_1",
        name: "Subcategory 1",
        children: [
          createMenuItem("mi_1", "Menu Item 1"),
          createMenuItem("mi_2", "Menu Item 2"),
        ],
      },
      {
        id: "c1_2",
        name: "Subcategory 2",
        children: [
          createMenuItem("mi_3", "Menu Item 3"),
          createMenuItem("mi_4", "Menu Item 4"),
        ],
      },
      {
        id: "c1_3",
        name: "Subcategory 3",
        children: [createMenuItem("mi_5", "Menu Item 5")],
      },
    ],
  },
  {
    id: "c2",
    name: "Main Category 2",
    children: [
      {
        id: "c2_1",
        name: "Subcategory 1 (ssss)",
        children: [
          createMenuItem("mi_6", "Menu Item 6"),
          createMenuItem("mi_7", "Menu Item 7"),
        ],
      },
      {
        id: "c2_2",
        name: "Subcategory 2",
        children: [createMenuItem("mi_8", "Menu Item 8")],
      },
    ],
  },
  {
    id: "c3",
    name: "Main Category 3",
    children: [
      {
        id: "c3_1",
        name: "Subcategory 1",
        children: [
          createMenuItem("mi_9", "Menu Item 9"),
          createMenuItem("mi_10", "Menu Item 10"),
          createMenuItem("mi_11", "Menu Item 11"),
        ],
      },
    ],
  },
];

export const testTreeDataList = (): TreeDataList[] => [
  createTreeDataList("mi_1", "Tree List 1", [
    createTreeData("Tree Data 1", TreeDataStatus.ACTIVE, [
      createTreeDataItem("data1", 10),
      createTreeDataItem("data2", 50),
      createTreeDataItem("data3", 20),
    ]),
    createTreeData("Tree Data 2", TreeDataStatus.INACTIVE, [
      createTreeDataItem("data4", 10),
      createTreeDataItem("data5", 50),
      createTreeDataItem("data6", 20),
    ]),
    createTreeData("Tree Data 3", TreeDataStatus.ACTIVE, [
      createTreeDataItem("data7", 10),
      createTreeDataItem("data8", 50),
      createTreeDataItem("data9", 20),
    ]),
  ]),

  createTreeDataList("mi_2", "Tree List 2", [
    createTreeData("Tree Data 1", TreeDataStatus.ACTIVE, [
      createTreeDataItem("data1", 10),
      createTreeDataItem("data2", 50),
      createTreeDataItem("data3", 20),
    ]),
    createTreeData("Tree Data 2", TreeDataStatus.ACTIVE, [
      createTreeDataItem("data4", 10),
      createTreeDataItem("data5", 50),
      createTreeDataItem("data6", 20),
    ]),
  ]),

  createTreeDataList("mi_3", "Tree List 3", [
    createTreeData("Tree Data 1", TreeDataStatus.ACTIVE, [
      createTreeDataItem("data1", 10),
      createTreeDataItem("data2", 50),
      createTreeDataItem("data3", 20),
    ]),
  ]),
];
