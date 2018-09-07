const menuList = [
  {
    name: "首页",
    route: "/home",
    icon: "home"
  },
  {
    name: "UI",
    route: "/ui",
    icon: "experiment",
    children: [
      {
        name: "按钮",
        route: "/ui/buttons"
      },
      {
        name: "弹框",
        route: "/ui/modals"
      },
      {
        name: "Loading",
        route: "/ui/loadings"
      },
      {
        name: "通知提醒",
        route: "/ui/notification"
      },
      {
        name: "全局Message",
        route: "/ui/messages"
      },
      {
        name: "Tab页签",
        route: "/ui/tabs"
      },
      {
        name: "图片画廊",
        route: "/ui/gallery"
      },
      {
        name: "轮播图",
        route: "/ui/carousel"
      }
    ]
  },
  {
    name: "表单",
    route: "/form",
    icon: "form",
    children: [
      {
        name: "登录",
        route: "/form/login"
      },
      {
        name: "注册",
        route: "/form/reg"
      }
    ]
  },
  {
    name: "表格",
    route: "/table",
    icon: "table",
    children: [
      {
        name: "基础表格",
        route: "/table/basic"
      },
      {
        name: "高级表格",
        route: "/table/high"
      }
    ]
  },
  {
    name: "富文本",
    route: "/rich",
    icon: "edit"
  },
  {
    name: "城市管理",
    route: "/city",
    icon: "reconciliation"
  },
  {
    name: "订单管理",
    route: "/order",
    icon: "file-search",
    btnList: [
      {
        name: "订单详情",
        route: "detail"
      },
      {
        name: "结束订单",
        route: "finish"
      }
    ]
  },
  {
    name: "员工管理",
    route: "/user",
    icon: "usergroup-add"
  },
  {
    name: "车辆地图",
    route: "/bikeMap",
    icon: "heat-map"
  },
  {
    name: "图标",
    route: "/charts",
    icon: "sliders",
    children: [
      {
        name: "柱形图",
        route: "/charts/bar"
      },
      {
        name: "饼图",
        route: "/charts/pie"
      },
      {
        name: "折线图",
        route: "/charts/line"
      }
    ]
  },
  {
    name: "权限设置",
    route: "/permission",
    icon: "safety-certificate"
  }
];
export default menuList;
