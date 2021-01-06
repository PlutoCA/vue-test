<template>
  <div>
    <template-table
      :temInput="temInput"
      :url="url"
      :temTable="temTable"
      @inputBtnClick="inputBtnClick"
      @tableBtnClick="tableBtnClick"
    />
    <el-dialog
      title="审核"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>是否{{diglogType === 'success' ? '通过' : '拒绝'}}这条内容</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button v-if="diglogType === 'success'" :loading="btnLoading" type="primary" @click="confirm">确 定</el-button>
        <el-button v-else :loading="btnLoading" type="danger" @click="confirm">拒绝</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import templateTable from "#/views/templates/templateTable";
export default {
  components: {
    "template-table": templateTable,
  },
  data() {
    return {
      dialogVisible: false,
      btnLoading: false,
      diglogType: "",
      // url: "",
      url: "/test",
      temInput: [
        {
          label: "名称", //可选参数
          type: "text", //类型
          name: "informationTitle", //参数名称
          value: "", //参数值，默认为空
        },
        {
          label: "类型", //可选参数
          type: "text", //类型
          name: "informationTitle", //参数名称
          value: "", //参数值，默认为空
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
            prop: "name",
            label: "名称",
          },
          {
            prop: "sign",
            label: "型号",
          },
          {
            prop: "show",
            label: "类型",
          },
          {
            prop: "unit",
            label: "单价",
          },
          {
            prop: "num",
            label: "数量",
          },
          {
            prop: "concat",
            label: "联系人",
          },
          {
            prop: "phone",
            label: "联系方式",
          },
          {
            prop: "type",
            label: "供应",
          },
        ],
        tableBtn: [
          {
            label: "查看",
            state: true,
            id: "detail", //表示查看详情
            type: "primary", //和element一致
            url: "",
          },
          {
            label: "通过",
            state: true,
            id: "success", //表示查看详情
            type: "primary", //和element一致
            url: "",
          },
          {
            label: "拒绝",
            state: true,
            id: "refuse", //表示查看详情
            type: "danger", //和element一致
            url: "",
          },
        ],
      },
    };
  },
  methods: {
    inputBtnClick(data, index) {
      console.log(data, index);
      if (data.id === "addss") {
        this.$router.push("/banner/edit");
      }
      // if (data.id === "")
    },
    tableBtnClick(data, item, index) {
      console.log(data, item, index);
      this.diglogType = item.id; // 控制弹出类别
      if (item.id === "success" || item.id === "refuse") {
        this.dialogVisible = true;
      }
      if (item.id === "detail") {
        this.$router.push('/supply/detail')
      }
    },
    confirm() {
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.dialogVisible = false;
      }, 1000);
    },
  },
};
</script>