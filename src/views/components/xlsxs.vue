<template>
  <div ref="main">
    <el-button type="primary">{{buttonName}}</el-button>
    <input
      class="hidden"
      ref="xlsx"
      type="file"
      @change="getFile"
      id="fileid"
      accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    />
  </div>
</template>

<script>
const querystring = require("querystring");
import xlsx from "xlsx";
export default {
  props: ["buttonName"],
  methods: {
    getFile() {
      const _this = this;
      let files = this.$refs.xlsx.files;
      let fileName = this.$refs.xlsx.files[0].name;
      let fileReader = new FileReader();
      fileReader.onload = function(ev) {
        try {
          var data = ev.target.result,
            workbook = xlsx.read(data, {
              type: "binary"
            }), // 以二进制流方式读取得到整份excel表格对象
            persons = []; // 存储获取到的数据
        } catch (e) {
          _this.$message.error("文件类型不正确");
          return;
        }

        // 表格的表格范围，可用于判断表头是否数量是否正确
        var fromTo = "";
        // 遍历每张表读取
        for (var sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            fromTo = workbook.Sheets[sheet]["!ref"];
            persons = persons.concat(
              xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
            );
            // break; // 如果只取第一张表，就取消注释这行
          }
        }
        const reg = /^[0-9a-zA-Z]+$/; //、货品编号只能为数字和字母
        const regNum = /^[0-9]\d*$/; //正整数
        const regs = /\S/; //空校验
        const regWeightNum = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/; //重量
        let arr = [];
        persons.forEach((item, index) => {
          index++;
          console.log(item, index, "表格数据 ");
          // console.log(regs.test(item["货品编码（富基编码）"]), "表格数据 ");
          if (item["*商品编码"] == undefined || !regs.test(item["*商品编码"])) {
            _this.$message.error("请检查第" + index + "条的商品编码");
            _this.$refs.xlsx.value = null;
            arr[index] = true;
            return false;
          }
        });
        arr = arr.splice(1, arr.length);
        if (
          !arr.some(item => {
            return item === true;
          })
        ) {
          // if (persons.length > 100) {
          //   console.log(persons);
          //   _this.$message.error("商品最多可上传100条！");
          //   return false;
          // } else {
          _this.$emit("getData", persons, fileName);
          _this.$refs.xlsx.value = null;
          // }
        }
      };
      // 以二进制方式打开文件
      fileReader.readAsBinaryString(files[0]);
    }
  }
};
</script>

<style scoped>
.hidden {
  width: 88px;
  height: 32px;
  z-index: 100;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 0;
  cursor: pointer;
}

.leadCard {
  display: inline-block;

  position: relative;
}
</style>