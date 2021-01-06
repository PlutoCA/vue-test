<template>
  <div class="detail_wrap">
    <div class="detail_content">
      <div class="box">
        <div class="title">用户信息</div>
        <div class="content">
          <div class="user_info">
            <div>
              <el-avatar
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                :size="65"
              ></el-avatar>
            </div>
            <div class="info">
              <p>昵称: {{ this.supplyInfo.supplyUserNickname }}</p>
              <p class="user_id">用户ID: {{ this.supplyInfo.supplyUserId }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">供需信息</div>
        <div class="content">
          <div class="flex">
            <div class="grid-content bg-purple">
              名称：{{ this.supplyInfo.supplyName }}
            </div>
            <div class="grid-content bg-purple">
              供需类型：{{ this.supplyInfo.supplyType }}
            </div>
            <div class="grid-content bg-purple">
              单价：{{ this.supplyInfo.supplyPrice }}
            </div>
          </div>
          <div class="flex">
            <div class="grid-content bg-purple">
              类型： {{ this.supplyInfo.supplyClass }}
            </div>
            <div class="grid-content bg-purple">
              型号： {{ this.supplyInfo.supplyModel }}
            </div>
            <div class="grid-content bg-purple">
              数量：{{ this.supplyInfo.supplyNum }}
            </div>
          </div>
          <div class="grid-content bg-purple">
            描述：{{ this.supplyInfo.supplyDesc }}
          </div>
          <div>
            <el-image
              style="width: 100px; height: 100px"
              :src="url"
              :preview-src-list="srcList"
            >
            </el-image>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">联系信息</div>
        <div class="content">
          <div class="flex">
            <div class="grid-content bg-purple">
              联系人：{{ this.supplyInfo.supplyContact }}
            </div>
            <div class="grid-content bg-purple">
              联系电话：{{ this.supplyInfo.supplyMobile }}
            </div>
            <div class="grid-content bg-purple">
              微信号：{{ this.supplyInfo.supplyWxno }}
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">其他信息</div>
        <div class="content">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                提交时间：{{ this.supplyInfo.gmtCreate }}
              </div>
            </el-col>
            <el-col :span="6" v-if="supplyInfo.dataState === 3">
              <div class="grid-content bg-purple">
                审核通过时间：{{ this.supplyInfo.applyGmtTime }}
              </div>
            </el-col>
            <el-col
              :span="6"
              v-if="this.supplyInfo.applyDesc && supplyInfo.dataState === 2"
            >
              <div class="grid-content bg-purple">
                审核拒绝理由：{{ this.supplyInfo.applyDesc }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="action" v-if="supplyInfo.dataState === 1">
        <el-button @click="agree" type="primary">通过</el-button>
        <el-button @click="refuse" type="danger" plain>拒绝</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getSupplyInfo, ApplyInfo } from "@/api/supply";
export default {
  data() {
    return {
      isCheck: true,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      supplyInfo: {
        supplyId: 1,
        supplyName: "求购名称",
        supplyType: 1,
        supplyModel: "AVC型号",
        supplyPrice: "200",
        supplyNum: 1000,
        supplyDesc: "在线求购1000个",
        supplyImg: "",
        supplyContact: "陈先生",
        supplyClass: "类型",
        supplyMobile: "15797672582",
        supplyWxno: "wxNo123456",
        supplyUserId: "500",
        supplyUserNickname: "来自陈先生",
        supplyUserHeader: "",
        applyGmtTime: "",
        applyDesc: "",
        applyState: 1,
        dataState: 2,
        applyAdminId: "",
        gmtCreate: "",
      },
    };
  },
  mounted() {
    const { id } = this.$route.query;
    if (Number(id)) {
      // { bannerId: id }
      this.getInfo()
    }
  },
  methods: {
    getInfo() {
      const { id } = this.$route.query;
      getSupplyInfo({
        supplyId: id,
      }).then((res) => {
        console.log(res);
        this.supplyInfo = res;
      });
    },
    refuse() {
      this.$prompt("请输入拒绝理由", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: "邮箱格式不正确",
      }).then(({ value }) => {
        ApplyInfo({
          supplyId: this.$route.query.id,
          applyDesc: value,
          applyState: 2,
        }).then((r) => {
          this.getInfo()
          this.$message({
            type: res.sysRecode,
            message: res.msg,
          });
        });
      });
    },
    agree() {
      ApplyInfo({
        supplyId: data.supplyId,
        applyDesc: "",
        applyState: 3,
      }).then((r) => {
        this.getInfo()
        this.$message({
          type: res.sysRecode,
          message: res.msg,
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.detail_wrap {
  background-color: #fff;
  padding: 20px;
  height: calc(100vh - 150px);
  overflow-y: scroll;
  position: relative;
  font-size: 16px;
  // .detail_content {
  //   width: 60%;
  //   margin: 0 auto;
  // }
  .box {
    margin-bottom: 30px;
    .title {
      font-weight: bold;
      font-size: 18px;
      padding-bottom: 20px;
    }
    .content {
      padding-left: 10px;
    }
  }
  .user_info {
    display: flex;
    align-items: center;

    .info {
      margin-left: 40px;
      .user_id {
        padding-bottom: 6px;
      }
    }
  }
  .flex {
    display: flex;
    div {
      flex: 1;
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
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>