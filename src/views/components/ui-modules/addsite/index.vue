<template>
  <div class="bgwhite">
    <!-- <el-form-item >
      <el-checkbox-group v-model.trim="pmPromotionTerminalList">
        <el-checkbox
          v-for="(item,index) in siteType"
          :key="index"
          :label="item.proappCode"
          @change="selSite(item.proappCode)"
        >{{item.proappEnvName}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
     -->
    <div id="multicheck">
      <span v-for="(item,index) in siteType" class="check-item">
          <input ref='tt' type="checkbox" :value="item.proappCode" name="tt" 
          @click='selSite($event.target.proappCode)'>
          {{item.proappEnvName}}
      </span>
    </div>

  </div>
</template>
<script>
// import Bus from "../sales/fullgiving/bus.js";
import {
  queryProappEnvPageUser,
  querySaleChannel,
  queryUserMerchantPub
} from "@/api/shopflist";

export default {
  data() {
    return {
      pmPromotionTerminalList: [],
      promotionTer: "0",
      siteType: [],
      ruleForm: {
        pmPromotionTerminalList: [] //终端类型[{"terminalType":"1"}],终端类型(全部-0 PC-1 WAP-2 微信-3 小程序-4 APP-5 分享页面-6)
      }
    };
  },
  mounted() {
    let data = { proappSort: "0" };
    queryProappEnvPageUser(data).then(res => {
      this.siteType = res.list;
    });
  },
  methods: {
    // all() {
    //   this.$store.commit("siteList", this.promotionTer);
    //   this.$emit("site");
    // },
    selSite(proappCode) {
      this.siteType.filter(val => {
        if (val.proappCode == proappCode) {
          
          this.ruleForm.pmPromotionTerminalList.push({
            terminalType: proappCode,
            pptName: val.proappEnvName
          });
        }
      });
      console.log( this.ruleForm.pmPromotionTerminalList)
      this.$store.commit(
        "addSitechange",
        this.ruleForm.pmPromotionTerminalList
      );
      this.$emit("site");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.bgwhite {
  background: #fff;
  /deep/ .el-checkbox + .el-checkbox {
    margin-left: 0;
  }

  /deep/ .el-checkbox + .el-checkbox {
    margin-right: 30px;
  }
  /deep/ .el-checkbox:first-child {
    margin-right: 30px;
  }
  .box-border /deep/ .el-form-item__content {
    width: 70%;
    border: 1px solid #ededed;
    overflow: auto;
    max-height: 200px;
    padding: 10px;
  }
}
</style>




