<template>
  <div>
    <template-table
      :temInput="temInput"
      :url="url"
      :temTable="temTable"
      @inputBtnClick="inputBtnClick"
      @tableBtnClick="tableBtnClick"
      @getData="getData"
    />
  </div>
</template>
<script>
import templateTable from "#/views/templates/templateTable";
import options from './options'
export default {
  components: {
    "template-table": templateTable,
  },
  data() {
    return {
      // url: "",
      dialogVisible: false,
      url: "/web/cms/banner/getBannerList.json",
      temInput: [
        {
          label: "名称", //可选参数
          type: "text", //类型
          name: "bannerName", //参数名称
          value: "", //参数值，默认为空
        },
        {
          label: "类型", //自定义
          type: "select", //select类型包含options对象，参数label和value
          name: "bannerType", //参数名称
          value: "", //值
          options: [{
              label: "全部",
              value: "",
            }].concat(options),
        },
        {
          label: "是否展示", //自定义
          type: "select", //select类型包含options对象，参数label和value
          name: "bannerState", //参数名称
          value: "", //值
          options: [
            {
              label: "全部",
              value: "",
            },
            {
              label: "是",
              value: 1,
            },
            {
              label: "否",
              value: 2,
            },
          ],
        },
        {
          btnArray: [
            {
              type: "primary",
              id: "search",
              label: "查询",
              url: "",
            },
            {
              type: "primary",
              id: "addss",
              label: "新增",
            },
          ],
        },
      ],
      temTab: {
        tabPane: [
          {
            label: "全部",
            name: "dataOpbillstate",
            value: "",
          },
          {
            label: "已上架",
            name: "dataOpbillstate",
            value: "1",
          },
          {
            label: "已下架",
            name: "dataOpbillstate",
            value: "0",
          },
        ],
      },
      temTable: {
        tableHead: [
          {
            prop: "bannerId", //基础参数
            label: "id编号", //基础参数
            serialize: "", //是否要序号
            width: "100",
          },
          {
            prop: "bannerName",
            label: "banner名称",
          },
          {
            prop: "bannerHref",
            label: "banner链接",
          },
          // {
          //   prop: 'bannerImage',
          //   label: ''
          //   splicing: ["bannerImage"],
          //   imgType: 0,
          // },
          {
            prop: "bannerState",
            label: "是否展示",
            type: "switch",
            turnOn: 1, //表示开
            turnOff: 2, // 表示关
            // props: {
            //   dataOpbillstate: "flag", //这个存在时，表示长传参数替换,可以为多个
            //   goodsId: "goodsIdStr"
            // },
            // promptTitle: "上下架成功",
            url: "/web/rs/resourceGoods/updateAuditOrCannelPass.json", // 上下架接口
          },
          {
            prop: "bannerType",
            label: "类型",
            template: {
              1: "小程序首页",
              2: "精选页面",
              3: "供需页面",
              4: "采购流程",
            },
          },
          {
            prop: "gmtModified",
            label: "修改时间",
          },
        ],
        tableBtn: [
          {
            label: "编辑",
            state: true,
            id: "editor", //表示查看详情
            type: "primary", //和element一致
            // url: "showUrl",
          },
        ],
      },
    };
  },
  methods: {
    inputBtnClick(data, index) {
      console.log(data, index);
      if (data.id === "addss") {
        this.$router.push("/banner/edit?id=0");
      }
    },
    tableBtnClick(data, item, index) {
      console.log(data, item, index);
      if (item.id === "editor") {
        this.$router.push(`/banner/edit?id=${data.bannerId}`);
      }
    },
  },
};
</script>
<style scoped>
</style>