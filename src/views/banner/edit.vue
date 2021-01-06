<template>
  <div class="addLabel">
    <el-form
      label-width="150px"
      style="width: 50%"
      :model="labelForm"
      :rules="rules"
      ref="labelForm"
    >
      <el-form-item label="banner名称" prop="bannerName">
        <el-input v-model="labelForm.bannerName"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="bannerHref">
        <el-input
          v-model="labelForm.bannerHref"
          placeholder="跳转小程序的链接"
        ></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="bannerType">
        <el-select v-model="labelForm.bannerType" placeholder="展示页面">
          <el-option
            v-for="item in options"
            :key="item.bannerType"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="bannerSort">
        <el-input
          v-model="labelForm.bannerSort"
          @change="handleChange"
          :min="1"
          label="banner 排序"
          type="number"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="bannerState">
        <el-select v-model="labelForm.bannerState" placeholder="是否展示">
          <el-option
            v-for="item in isShow"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="bannerImage" label="banner 图片">
        <el-upload
          class="upload-demo"
          name="file"
          :action="myurl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-error="handleError"
          :on-success="handleSuccess"
          :before-upload="beforeAvatarUpload"
          :file-list="fileList"
          list-type="picture"
          :limit="1"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png/jpeg文件，且不超过2M
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('labelForm')"
          >保存</el-button
        >
        <!--<el-button @click="resetForm('labelForm')">取消</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import options from "./options";
import { getBannerDetail, saveBanner } from "@/api/banner";
export default {
  data() {
    return {
      options,
      isShow: [
        {
          value: 1,
          label: "展示",
        },
        {
          value: 2,
          label: "不展示",
        },
      ],
      fileList: [],
      labelForm: {
        bannerName: "",
        bannerHref: "",
        bannerType: 1, //  1 小程序首页 2 精选首页 3供需页面 4 采购流程
        bannerState: 1,
        bannerImage: "",
        bannerSort: 1,
      },
      rules: {
        bannerName: [
          { required: true, message: "请输入banner名称", trigger: "blur" },
        ],
        bannerHref: [
          { required: true, message: "请输入banner跳转地址", trigger: "blur" },
        ],
        bannerType: [
          { required: true, message: "请选择类型", trigger: "blur" },
        ],
        bannerSort: [
          { required: true, message: "排序不能为空", trigger: "blur" },
        ],
        bannerState: [
          { required: true, message: "请选择状态", trigger: "blur" },
        ],
        bannerImage: [
          { required: true, message: "请上传图片", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    const { id } = this.$route.query;
    if (Number(id)) {
      // { bannerId: id }
      getBannerDetail({ bannerId: id }).then((res) => {
        console.log(res);
        this.labelForm = {
          ...this.labelForm,
          ...res,
        };
        this.fileList = [
          {
            name: "file",
            url: res.bannerImage,
          },
        ];
      });
    }
  },
  methods: {
    submitForm(formName) {
      // console.log(data, this.fileList);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          delete this.labelForm.gmtCreate
          delete this.labelForm.gmtModified
          // if (this.labelForm.gmtCreate) {
          // }
          // if (this.labelForm.gmtModified) {
          // }
          saveBanner(this.labelForm).then((res) => {
            console.log(res);
            this.$message({
              type: res.sysRecode,
              message: res.msg,
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type.includes("image");
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传正确的图片格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleError(err) {
      console.log("错误", err);
    },
    handleSuccess(r) {
      console.log(r);
      if (r.success) {
        console.log("上传成功", r);
        this.labelForm.bannerImage = r.fileUrl
      } else {
        this.$message({
          message: r.msg,
          type: "error",
        });
      }
    },
  },
  computed:{
        myurl:function(){   //person.id为当前用户id
            return `${window.location.origin}/web/rs/goodsFile/uploadGoodsFiles.json`
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
/*显示标签预览*/
.addLabel {
  background: #fff;
  padding: 50px 0 100px 0;
  border: 1px solid #ededed;
}
.themeClass {
  width: 180px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  border: 1px solid #3b3b3b;
  background: #3b3b3b;
  text-align: center;
}
/*整个表单*/

.addLabel {
  .rtagFont {
    width: 180px;
    margin-right: 20px;
  }
  .el-color-picker {
    vertical-align: bottom;
  }
}
// .el-input-number {
//   line-height: 30px;
//   .el-input-number__decrease {
//     width: 30px;
//   }
// }
</style>