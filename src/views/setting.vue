<template>
  <div class="mimi-setting">
    <div class="mini-setting-content">
      <el-form label-width="140px" :model="formLabelAlign">
        <div class="box">
          <div class="title">小程序首页配置</div>
        </div>
        <el-form-item label="进驻伙伴">
          <el-upload
            name="friends"
            class="my_upload"
            list-type="picture-card"
            :limit="9"
            :file-list="formLabelAlign.friendsFile"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :action="window.location.origin + '/web/rs/goodsFile/uploadGoodsFiles.json'"
          >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过200kb, 最多上传9张
            </div>
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="客服联系方式">
          <el-input
            v-model="formLabelAlign.concat"
            placeholder="输入联系电话"
          ></el-input>
        </el-form-item>
        <el-form-item label="客服二维码">
          <el-upload
            :with-credentials="true"
            :file-list="customerFile"
            class="my_upload"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过200kb, 最多上传1张
            </div>
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </el-form-item>
        <div class="box">
          <div class="title">注册页面配置</div>
          <el-form-item label="注册页面logo">
            <el-upload
              :with-credentials="true"
              :file-list="registerLogoFile"
              class="my_upload"
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :limit="1"
              :on-exceed="handleExceed"
            >
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过200kb, 最多上传1张
              </div>
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="注册有礼活动页">
            <el-upload
              :with-credentials="true"
              :file-list="registerActiveFile"
              class="my_upload"
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :limit="1"
              :on-exceed="handleExceed"
            >
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过1M, 最多上传1张
              </div>
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="注册协议">
            <el-upload
              class="upload-demo"
              action="#"
              :auto-upload="false"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="docFile"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传docx、doc、pdf文件，且不超过2M
              </div>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script>
import uploadDialog from "#/views/uploadDialog/index";
export default {
  data() {
    return {
      formLabelAlign: {
        concat: 11234,
        friendsFile: [{name: '', url: 'https://manage.izgl.com/paas/shop//20200211/00000063//2020-12-29/f656b11968bf421ea934b7dd18d40f41.jpg'}]
      },
      docFile: [], // 协议文件
      friendsFile: [], // 伙伴图片
      customerFile: [], // 客服二维码
      registerLogoFile: [],
      registerActiveFile: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.friendsFile);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$message.warning("上传超过数量限制～");
    },
    handleSuccess(r) {
      console.log(r);
      if (r.success) {
        console.log("上传成功", r);
        this.labelForm.bannerImage = r.fileUrl;
      } else {
        this.$message({
          message: r.msg,
          type: "error",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.mimi-setting {
  background-color: #fff;
  padding: 20px;
  height: calc(100vh - 150px);
  overflow-y: scroll;
  position: relative;
  font-size: 16px;
  .mini-setting-content {
    width: 60%;
  }
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
}
</style>
<style lang="scss">
.my_upload {
  .el-upload-list--picture-card {
    .el-upload-list__item {
      width: 120px;
      height: 120px;
    }
  }
  .el-upload--picture-card {
    width: 120px;
    height: 120px;
    line-height: 133px;
  }
}
</style>