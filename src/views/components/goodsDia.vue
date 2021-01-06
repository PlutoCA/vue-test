<template>
  <div>
    <!-- 选择 -->
    <el-row style="poition:absolute">
      <el-col :span="6" class="hidden">
        <el-button type="primary" @click="addAssociatedGoods">选择</el-button>
      </el-col>
      <el-col :span="6" class="hidden">
        <el-button type="primary" v-if="btnType=='priceset'">
          <a href="https://qjstatic.oss-cn-shanghai.aliyuncs.com/excel/disPrice.xlsx">下载模板</a>
        </el-button>
        <el-button type="primary" v-if="btnType=='numset'">
          <a href="https://qjstatic.oss-cn-shanghai.aliyuncs.com/excel/disNum.xlsx">下载模板</a>
        </el-button>
        <el-button type="primary" v-if="btnType=='goodset'">
          <a href="https://qjstatic.oss-cn-shanghai.aliyuncs.com/excel/disGoods.xlsx">下载模板</a>
        </el-button>
      </el-col>
      <el-col :span="6" class="hidden">
        <xlsx-com ref="xlsxs" class="leadCard" buttonName="导入商品" @getData="getData " 
        :btnType="btnType"></xlsx-com>
        <span class="showContent" v-if="showContent">已成功导入文件</span>
      </el-col>
      <el-col :span="6" class="hidden">
        <el-button type="primary" @click="release">发布商品</el-button>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="80%"
      :before-close="beforeClose"
    >
      <el-form :inline="true" :model="formInline" class="demo-form-inline form search_bar">
        <el-row>
          <el-col :span="5">
            <el-form-item label="商品名称" prop="goodsName">
              <el-input
                v-model="formInline.goodsName"
                @keyup.enter.native="searchCloce"
                placeholder="请输入商品名称"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="商品编码" prop="skuNo">
              <el-input
                v-model="formInline.skuNo"
                @keyup.enter.native="searchCloce"
                placeholder="请输入商品编码"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="条码" prop="skuBarcode">
              <el-input
                v-model="formInline.skuBarcode"
                @keyup.enter.native="searchCloce"
                placeholder="请输入商品编码"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="3">
            <el-form-item>
              <el-button type="primary" size="small" @click="searchCloce">查询</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="是否等于">
              <el-select v-model="ruleForm.include" placeholder="请选择">
                <el-option
                  v-for="item in rangOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        ref="multipleTable"
        :data="optionsTwo"
        tooltip-effect="dark"
        style="width: 100%"
        class="goods-list"
        @select-all="setSelectionAll"
        @select="setSelectionData"
      >
        <el-table-column type="selection" align="center" width="55"></el-table-column>
        <el-table-column label="商品图片" align="center" width="120">
          <template slot-scope="scope">
            <img class="table-imgs" :src="scope.row.dataPic" />
          </template>
        </el-table-column>
        <el-table-column prop="goodsName" align="center" label="商品名称" width="120">
          <template slot-scope="scope">{{ scope.row.goodsName }}</template>
        </el-table-column>
        <el-table-column prop="skuNo" align="center" label="商品编码" width="120"></el-table-column>
        <el-table-column prop="skuBarcode" align="center" label="条形码" width="120"></el-table-column>
        <el-table-column prop="skuName" align="center" label="规格" width="120"></el-table-column>
        <el-table-column
          v-if="btnType=='priceset'"
          prop="setPrice"
          align="center"
          width="170"
          :label="labelname"
          :render-header="customFieldColumn1"
        >
          <template slot-scope="scope">
            <div style="overflow:hidden">
              <el-input type="number" v-model.number="scope.row.setPrice" style="float:left"></el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="btnType=='numset'"
          prop="setPrice"
          align="center"
          width="130"
          :label="labelname"
          :render-header="customFieldColumn"
        >
          <template slot-scope="scope">
            <div style="overflow:hidden">
              <el-input type="number" v-model.number="scope.row.setPrice" style="float:left"></el-input>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="showNum" align="center" label="库存"></el-table-column> -->
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="pageNo"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Num"
        ></el-pagination>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
        style="position:relitive;letf:0;right:0;margin:0 auto;"
      >
        <el-button @click="closeDia">取 消</el-button>
        <el-button type="primary" @click="showHide">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import xlsx from "xlsx";
import xlsxCom from "./xlsxs";
const querystring = require("querystring");

export default {
  components: {
    "xlsx-com": xlsxCom
  },
  props: [
    "count",
    "getGoodsDataFun",
    "packGoodsList",
    "labelname",
    "btnType",
    "showPrice",
    "saveFun",
    "rowData"
  ],
  data() {
    return {
      count: this.count,
      showContent: false,
      labelname: this.labelname,
      btnType: this.btnType,
      showPrice: this.showPrice,
      rowData: this.rowData,
      subArr: [],
      ruleForm: {
        include: ""
      },
      rangOption: [
        {
          value: "=",
          label: "等于"
        },
        {
          value: "!=",
          label: "不等于"
        }
      ],
      props: {
        value: "classtreeCode",
        children: "childList",
        label: "classtreeName"
      },
      treeOptions: [], //分类
      brandOptions: [], //品牌
      // 关联商品显隐
      // diaVisible: false,
      dialogVisible: false,
      hide: false,
      formInline: {
        goodsName: "",
        skuNo: "",
        classtreeCode: [],
        brandCode: "",
        skuBarcode: ""
      },
      total: null,
      pageSize: 5, //条数
      pageNo: 1, //页数
      optionsTwo: [], //每页的显示条数
      Num: 10,
      goodsSelectList: [],
      multipleSelectionId: [], //选择关联商品的id集合
      multipleSelection: [], //选择的关联数据
      objs: ""
    };
  },
  mounted() {},
  methods: {
    customFieldColumn(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, ""),
        h(
          "el-popover",
          {
            props: {
              placement: "top",
              width: "200",
              trigger: "hover",
              content: "不填写按照库存比例同步，填写后按照填写库存数同步"
            }
          },
          [
            h("i", { slot: "reference", class: "font-normal" }, [
              h("span", {}, "渠道库存"),
              h("span", { class: "icon iconfont icon-wenhao reference" })
            ])
          ]
        )
      ]);
    },
    customFieldColumn1(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, ""),
        h(
          "el-popover",
          {
            props: {
              placement: "top",
              width: "200",
              trigger: "hover",
              content: "不填写按照比例或者浮动金额同步，填写后按照所填价格同步"
            }
          },
          [
            h("i", { slot: "reference", class: "font-normal" }, [
              h("span", {}, "渠道价格"),
              h("span", { class: "icon iconfont icon-wenhao reference" })
            ])
          ]
        )
      ]);
    },
    //接收子组件数据并处理
    getData(data) {
      this.subArr = [];
      let arr = [];
      if (this.btnType == "numset") {
        data.forEach((item, index) => {
          arr.push({
            dgnumListTerm: item["*是否等于（等于填=，不等于填!=）"],
            skuNo: item["*商品编码"],
            goodsName: item["商品名称"],
            setPrice: item["*库存"]
          });
        });
      } else if (this.btnType == "priceset") {
        data.forEach((item, index) => {
          arr.push({
            dpriceConfTerm: item["*是否等于（等于填=，不等于填!=）"],
            skuNo: item["*商品编码"],
            goodsName: item["商品名称"],
            setPrice: item["*销售价"]
          });
        });
      } else if (this.btnType == "goodset") {
        data.forEach((item, index) => {
          arr.push({
            dgoodsScopelistTerm: item["*是否等于（等于填=，不等于填!=）"],
            skuNo: item["*商品编码"],
            goodsName: item["商品名称"]
          });
        });
      }

      this.subArr = arr;
      if (this.subArr) {
        this.showContent = true;
      }
    },
    release() {
      if (this.subArr != 0) {
        let goodsList = [];
        if (this.btnType == "priceset") {
          goodsList = this.formatPriceData(
            this.subArr,
            "skuNo",
            "goodsName",
            "skuBarcode",
            "skuName",
            "setPrice",
            "dpriceConfTerm"
          );
        }
        if (this.btnType == "goodset") {
          goodsList = this.formatGoodsData(
            this.subArr,
            "skuNo",
            "goodsName",
            "skuBarcode",
            "skuName",
            "setPrice",
            "dgoodsScopelistTerm"
          );
        }
        if (this.btnType == "numset") {
          goodsList = this.formatNumData(
            this.subArr,
            "skuNo",
            "goodsName",
            "skuBarcode",
            "skuName",
            "setPrice",
            "dgnumListTerm"
          );
        }
        console.log(this.subArr, goodsList, "subArr");
        let oJson = {
          paramStr: JSON.stringify(goodsList)
        };
        console.log(oJson, "oJson");
        this.saveFun(querystring.stringify(oJson)).then(res => {
          if (res.success) {
            this.$message.success("保存成功");
            this.$emit("setRowGoodsData", this.dialogVisible);
            this.dialogVisible = false;
            this.count++;
          } else {
            this.$message.error(res.msg);
          }
        });
      } else {
        this.$message.error("未导入商品或导入商品为空");
      }
    },
    searchCloce() {
      //点击查询
      this.pageNo = 1;
      this.objs =
        "goodsName=" +
        (this.formInline.goodsName || "") +
        "&skuNo=" +
        (this.formInline.skuNo || "") +
        "&skuBarcode=" +
        (this.formInline.skuBarcode || "");
      this.getGoodsData();
    },

    setSelectionAll(selection) {
      console.log(selection);
      if (this.optionsTwo.length > 0) {
        if (selection.length > 0) {
          this.optionsTwo.forEach(val => {
            if (this.multipleSelectionId.indexOf(val.skuNo) === -1) {
              this.multipleSelectionId.push(val.skuNo);
              this.multipleSelection.push(val);
            }
          });
        } else {
          this.optionsTwo.forEach(val => {
            if (this.multipleSelectionId.indexOf(val.skuNo) > -1) {
              this.multipleSelectionId.splice(
                this.multipleSelectionId.indexOf(val.skuNo),
                1
              );
              this.multipleSelection = this.multipleSelection.filter(item => {
                return item.skuNo != val.skuNo;
              });
            }
          });
        }
      }
    },
    setSelectionData(selection, row) {
      if (
        this.multipleSelectionId.length > 0 &&
        this.multipleSelectionId.indexOf(row.skuNo) > -1
      ) {
        this.multipleSelectionId.splice(
          this.multipleSelectionId.indexOf(row.skuNo),
          1
        );
        this.multipleSelection = this.multipleSelection.filter(val => {
          return val.skuNo != row.skuNo;
        });
      } else {
        this.multipleSelectionId.push(row.skuNo);
        this.multipleSelection.push(row);
      }
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handleSizeChange(val) {
      //分页
      this.pageSize = val;
      this.getGoodsData();
    },
    getGoodsData() {
      let oJson = {
        rows: this.pageSize,
        page: this.pageNo
      };
      Object.assign(oJson, this.formInline);
      this.getGoodsDataFun(oJson).then(res => {
        console.log(res, "wqw");
        this.optionsTwo = res.list;
        this.Num = res.total; //总条数
      });
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.getGoodsData();
    },
    addAssociatedGoods() {
      //点击关联
      this.formInline = {};
      // this.multipleSelection = JSON.parse(JSON.stringify(this.goodsSelectList)); //数据单向赋值
      this.pageNo = 1;
      this.objs = "";
      this.dialogVisible = true;
      this.getGoodsData();
    },
    beforeClose(done) {
      this.dialogVisible = false;
      this.multipleSelection = [];
      done();
    },
    closeDia() {
      this.dialogVisible = false;
      this.multipleSelection = [];
    },
    formatPriceData(list, code, name, pic, id, price, term) {
      let dataList = [];
      list.forEach(res => {
        dataList.push({
          dpriceConfType: code, // brandCode  classtreeCode  goodsCode
          dpriceConfValue: res[code],
          dpriceConfValuen: res[name],
          dpriceCode: this.rowData.dpriceCode,
          tenantCode: this.rowData.tenantCode,
          channelCode: this.rowData.channelCode,
          channelName: this.rowData.channelName,
          channelSort: this.rowData.channelSort,
          channelType: this.rowData.channelType,
          dpriceConfPicurl: res[pic],
          dpriceConfValueno: res[id],
          dpriceConfPrice: res[price],
          dpriceConfTerm: this.ruleForm.include || res[term] || "="
        });
      });
      return dataList;
    },
    formatNumData(list, code, name, pic, id, price, term) {
      let dataList = [];
      list.forEach(res => {
        dataList.push({
          dgnumListType: code, // brandCode  classtreeCode  goodsCode
          dgnumListValue: res[code],
          dgnumListValuen: res[name],
          dgnumId: this.rowData.dgnumId,
          dgnumCode: this.rowData.dgnumCode,
          memberName: this.rowData.memberName,
          memberCode: this.rowData.memberCode,
          channelCode: this.rowData.channelCode,
          channelName: this.rowData.channelName,
          channelSort: this.rowData.channelSort,
          channelType: this.rowData.channelType,
          dgnumListPicurl: res[pic],
          dgnumListValueno: res[id],
          dgnumListTerm: this.ruleForm.include || res[term] || "=",
          dgnumListValuename: res[price]
        });
      });
      return dataList;
    },
    formatGoodsData(list, code, name, pic, no, price, term) {
      let dataList = [];
      list.forEach(res => {
        // if (arr.indexOf(res[code]) > -1) {
        dataList.push({
          dgoodsScopelistType: code, // brandCode  classtreeCode  goodsCode
          dgoodsScopelistValue: res[code],
          dgoodsScopelistValuen: res[name],
          dgoodsScopelistPicurl: res[pic],
          dgoodsScopelistDes: res[no],
          dgoodsScopelistTerm: this.ruleForm.include || res[term] || "=",
          dgoodsCode: this.rowData.dgoodsCode,
          channelCode: this.rowData.channelCode,
          channelName: this.rowData.channelName,
          channelSort: this.rowData.channelSort,
          channelType: this.rowData.channelType
        });
        // }
      });
      return dataList;
    },
    showHide() {
      this.multipleSelection.forEach(res => {
        res.setPrice = res.setPrice || "";
      });
      let arrList = JSON.parse(JSON.stringify(this.multipleSelection));
      if (arrList.length === 0) {
        this.$message.error("至少选择一个商品");
        return false;
      } else {
        let goodsList = [];
        if (this.btnType == "priceset") {
          goodsList = this.formatPriceData(
            arrList,
            "skuNo",
            "goodsName",
            "skuBarcode",
            "skuName",
            "setPrice",
            "dpriceConfTerm"
          );
        } else if (this.btnType == "numset") {
          goodsList = this.formatNumData(
            arrList,
            "skuNo",
            "goodsName",
            "skuBarcode",
            "skuName",
            "setPrice",
            "dgnumListTerm"
          );
        } else if (this.btnType == "goodset") {
          goodsList = this.formatGoodsData(
            arrList,
            "skuNo",
            "goodsName",
            "skuBarcode",
            "skuName",
            "setPrice",
            "dgoodsScopelistTerm"
          );
        }
        let oJson = {
          paramStr: JSON.stringify(goodsList)
        };
        this.saveFun(querystring.stringify(oJson)).then(res => {
          if (res.success) {
            this.$message.success("保存成功");
            this.$emit("setRowGoodsData", this.dialogVisible);
            this.dialogVisible = false;
            this.count++;
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    }
  },
  watch: {
    count(val, oldValue) {
      this.formInline = {};
      this.showContent = false;
      this.multipleSelection = [];
      this.multipleSelectionId = [];
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.demo-form-inline /deep/ .el-input .el-input__inner {
  width: 135px;
}
.table-imgs {
  max-width: 100%;
  max-height: 40px;
}
.add_goods {
  min-height: 80px;
  border: 1px solid #ebeef5;

  margin: 15px 0;
  .el-dialog {
    .el-dialog__body {
      .el-form-item {
        width: 100%;
        .el-form-item__content {
          width: 70%;
          .el-select {
            width: 100%;
          }
        }
      }
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .imgs {
    max-width: 100%;
    max-height: 200px;
  }
  .el-dialog {
    // border-radius: 10px;
  }
  .el-dialog__header {
    // background: #f2f2f2;
    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
  }
}
.el-form /deep/ .reference {
  right: 30% !important;
  left: 170px;
  font-size: 20px;
  display: inline-block;
  color: red;
}
.hidden {
  width: 88px;
  height: 1px;
  z-index: 100;
  opacity: 0;
  position: relative;
  right: 88px;
  bottom: 10px;
}
</style>

