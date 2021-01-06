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
import { ApplyInfo } from "@/api/supply";
export default {
  components: {
    "template-table": templateTable,
  },
  data() {
    return {
      url: "/web/cms/supply/getSupplyList.json",
      // url: "/web/pm/biddingInformation/queryBiddingInformationPage.json",
      temInput: [
        {
          label: "名称", //可选参数
          type: "text", //类型
          name: "supplyName", //参数名称
          value: "", //参数值，默认为空
        },
        {
          label: "发布用户的帐号", //可选参数
          type: "text", //类型
          name: "supplyUserAccount", //参数名称
          value: "", //参数值，默认为空
        },
        {
          label: "发布人userId", //可选参数
          type: "text", //类型
          name: "supplyUserId", //参数名称
          value: "", //参数值，默认为空
        },
        {
          label: "供需类型", //自定义
          type: "select", //select类型包含options对象，参数label和value
          name: "bannerType", //参数名称
          value: "", //值
          options: [
            {
              label: "全部",
              value: "",
            },
            {
              label: "供求",
              value: 1,
            },
            {
              label: "求购",
              value: 2,
            },
          ],
        },
        {
          label: "审核状态", //自定义
          type: "select", //select类型包含options对象，参数label和value
          name: "applyState", //参数名称
          value: "", //值
          options: [
            {
              label: "全部",
              value: "",
            },
            {
              label: "待审核",
              value: 1,
            },
            {
              label: "审核拒绝",
              value: 2,
            },
            {
              label: "审核通过/已上架",
              value: 3,
            },
            {
              label: "已下架",
              value: 4,
            },
            {
              label: "已删除",
              value: 5,
            },
          ],
        },
        {
          btnArray: [
            {
              type: "primary",
              id: "search",
              label: "搜索",
              url: "",
            },
          ],
        },
      ],
      temTable: {
        tableHead: [
          {
            prop: "index", //基础参数
            label: "id编号", //基础参数
            serialize: "", //是否要序号
            width: "100",
          },
          {
            prop: "supplyName",
            label: "名称",
          },
          {
            prop: "supplyClass",
            label: "类型",
          },
          {
            prop: "supplyModel",
            label: "型号",
          },
          {
            prop: "supplyPrice",
            label: "单价",
          },
          {
            prop: "supplyNum",
            label: "数量",
          },
          {
            prop: "supplyContact",
            label: "联系人",
          },
          {
            prop: "supplyMobile",
            label: "联系方式",
          },
          {
            prop: "supplyType",
            label: "系统类型",
            template: {
              1: "供应",
              2: "求购",
            },
          },
          {
            prop: "applyState",
            label: "状态",
            template: {
              1: "待审核",
              2: "审核拒绝",
              3: "审核通过/已上架",
              4: "已下架",
              5: "已删除",
            },
          },
          // {
          //   prop: "bannerState",
          //   label: "是否上架",
          //   type: "switch",
          //   turnOn: 1, //表示开
          //   turnOff: 2, // 表示关
          //   // props: {
          //   //   dataOpbillstate: "flag", //这个存在时，表示长传参数替换,可以为多个
          //   //   goodsId: "goodsIdStr"
          //   // },
          //   // promptTitle: "上下架成功",
          //   url: "/web/rs/resourceGoods/updateAuditOrCannelPass.json", // 上下架接口
          // },
        ],
        tableBtn: [
          {
            label: "查看",
            state: true,
            id: "detail", //表示查看详情
            type: "primary", //和element一致
          },
          {
            label: "通过",
            state: false,
            dataState: 1, //状态参数
            id: "agree",
          },
          {
            label: "拒绝",
            state: false,
            dataState: 1, //状态参数
            id: "refuse",
            type: "danger",
          },
          {
            label: "查看理由",
            state: false,
            dataState: 2, //状态参数
            id: "result",
          },
          {
            label: "下架",
            state: false,
            dataState: 3, //状态参数
            id: "down",
          },
          {
            label: "上架",
            state: false,
            dataState: 4, //状态参数
            id: "up",
          },
        ],
      },
    };
  },
  methods: {
    inputBtnClick(data, index) {
      console.log(data, index);
      if (data.id === "detail") {
        this.$router.push("/supply/detail");
      }
    },
    tableBtnClick(data, item, index) {
      console.log(data, item, index);
      if (item.id === "detail") {
        this.$router.push(`/supply/detail?id=${data.supplyId}`);
      }
      if (item.id === "result") {
        this.$alert(`理由：${data.applyDesc || '暂无理由'}`, "拒绝理由", {
          confirmButtonText: "确定",
          callback: (action) => {},
        });
      }
      if (item.id === "refuse") {
        this.$prompt("请输入拒绝理由", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: "邮箱格式不正确",
        })
          .then(({ value }) => {
            ApplyInfo({
              supplyId: data.supplyId,
              applyDesc: value,
              applyState: 2,
            }).then((r) => {
              this.$message({
                type: res.sysRecode,
                message: res.msg,
              });
            });
          })
      }
      if (item.id === "agree") {
        ApplyInfo({
          supplyId: data.supplyId,
          applyDesc: "",
          applyState: 3,
        }).then((r) => {
          this.$message({
            type: res.sysRecode,
            message: res.msg,
          });
        });
      }
      if (item.id === "down") {
        this.$confirm("此操作将下架该条内容, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            ApplyInfo({
              supplyId: data.supplyId,
              applyDesc: "",
              applyState: 4,
            }).then((r) => {
              this.$message({
                type: res.sysRecode,
                message: res.msg,
              });
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }
      if (item.id === "up") {
        this.$confirm("此操作将上架该条内容, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            ApplyInfo({
              supplyId: data.supplyId,
              applyDesc: "",
              applyState: 3,
            }).then((r) => {
              this.$message({
                type: res.sysRecode,
                message: res.msg,
              });
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }
    },
  },
};
</script>

<style lang="scss" >
.el-message-box__wrapper {
  .el-message-box {
    width: 420px !important;
    .el-message-box__message {
      margin: 0;
      text-align: left;
      font-size: 14px;
    }
    .el-message-box__content {
      padding: 10px 15px;
    }
  }
}
</style>