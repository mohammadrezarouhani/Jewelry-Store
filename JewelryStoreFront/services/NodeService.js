/** @format */

export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "گرنبند",
        data: "neckless",
        children: [
          {
            key: "0-0",
            label: "سینه ریز",
            data: "Work Folder",
          },
        ],
      },
      {
        key: "1",
        label: "پابند",
        data: "ankle-jew",
        children: [
          {
            key: "1-0",
            label: "Meeting",
            icon: "pi pi-fw pi-calendar-plus",
            data: "Meeting",
          },
          {
            key: "1-1",
            label: "Product Launch",
            icon: "pi pi-fw pi-calendar-plus",
            data: "Product Launch",
          },
          {
            key: "1-2",
            label: "Report Review",
            icon: "pi pi-fw pi-calendar-plus",
            data: "Report Review",
          },
        ],
      },
      {
        key: "2",
        label: "انگشتر",
        data: "ring",
      },
      {
        key: "3",
        label: "گوشواره",
        data: "earings",
        children: [
          {
            key: "3-0",
            label: "گوشواره اطلس",
            data: "atlas-earings",
          },
        ],
      },
      {
        key: "4",
        label: "دستبند",
        data: "bracelet",
        children: [
          {
            key: "4-0",
            label: "دستبند پارامیس",
            data: "bracelet",
          },
        ],
      },
      {
        key: "5",
        label: "النگو",
        data: "bangle",
        children: [
          {
            key: "5-0",
            label: "النگو شیرازی",
            data: "shirazi",
          },
        ],
      },
    ];
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
