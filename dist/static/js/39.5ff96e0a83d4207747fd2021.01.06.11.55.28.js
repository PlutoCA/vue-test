webpackJsonp([39],{hQJp:function(t,e,a){var s=a("hhn5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("5088f832",s,!0)},hhn5:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.padding[data-v-3424f2f9] {\n  padding-bottom: 30px;\n}\n",""])},"zD+Z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),l=(a("uXZL"),a("7/x6")),n=a("D9vr"),o=a("Abov"),r=(a("0xDb"),{components:{"template-table":a("FR2T").default,shoppinggoods:n.default,"xlsx-com":l.default},props:{list:{type:String,default:""}},data:function(){return{fileName:"",dataState:"",visible:!1,visibles:!1,getPresentDetails:{},presentList:[],tableGoodsData:[],NtableGoodsData:[],promotionId:"",shopData:[],addList:[],promotionIdDet:"",subArr:[],promotionCode:"",page:1,rows:10,tableData:[],url:"",temInput:[{name:"promotionCode",value:""},{label:"商品名称",type:"text",name:"pprlOpname",value:"",placeholder:"请输入商品名称"},{label:"商品编码",type:"text",name:"rangeCode",value:"",placeholder:"请输入商品编码"},{label:"商品条码",type:"text",name:"pprlOpurl",value:"",placeholder:"请输入商品条码"},{label:"同步状态",type:"select",name:"dataOpnextbillstate",placeholder:"请选择同步状态",value:"",options:[{label:"未同步",value:"0"},{label:"同步成功",value:"1"},{label:"同步异常",value:"2"},{label:"已删除",value:"-1"}]},{btnArray:[{type:"primary",id:"search",label:"查询",url:""},{type:"primary",id:"addShop",label:"新增",url:""},{type:"primary",id:"addXl",label:"批量导入",url:""},{type:"danger",id:"deletes",label:"批量删除",url:""},{type:"primary",id:"rePush",label:"营销重推",url:""}]}],temTable:{reserve_selection:!1,rowKey:"pprlId",selection:{state:!0,params:[]},tableHead:[{prop:"pprlOpname",label:"商品名称"},{prop:"rangeCode",label:"商品编码"},{prop:"pprlOpurl",label:"商品条码"},{prop:"discountAmount1",label:"价格"},{prop:"discountAmount1",renderTemp:this.renderContentDates,label:"失败原因"},{prop:"dataState",label:"状态",template:{0:"进行中",4:"未开始",1:"进行中",2:"已结束","-1":"已取消",3:"已终止",5:"审核失败"}},{prop:"dataOpnextbillstate",label:"同步状态",template:{0:"未同步",1:"同步成功",2:"同步异常","-1":"已删除"}}],tableBtn:[{label:"删除",dataState:"0",id:"delete",type:"primary"},{label:"删除",dataState:"1",id:"delete",type:"primary"},{label:"删除",dataState:"2",id:"delete",type:"primary"},{label:"删除",dataState:"3",id:"delete",type:"primary"},{label:"删除",dataState:"4",id:"delete",type:"primary"},{label:"删除",dataState:"5",id:"delete",type:"primary"}]}}},mounted:function(){var t=this;this.promotionId=this.$route.query.promotionId,this.promotionCode=this.$route.query.promotionCode,this.temInput[0].value=this.promotionCode,this.promotionCode&&(this.url="/web/pm/promotionRangelist/queryPromotionRangelistPagebyCode.json",this.$refs.templateTable.clickState=!0,this.$nextTick(function(){t.$refs.templateTable.getDataList()}))},methods:{renderContentDates:function(t,e){return"2"==e.dataOpnextbillstate?t("div",null,[t("p",null,[e.memo])]):t("div",null,[])},inputBtnClick:function(t,e){var a=this;"addShop"==t.id?this.visible=!0:"addXl"==t.id?(this.subArr=[],this.fileName="",this.visibles=!0):"deletes"==t.id?this.addList.length>0?this.deletes():this.$message.error("请勾选您要删除的商品"):"rePush"==t.id&&(this.getPresentDetails.pmPromotionRangeList=null,this.getPresentDetails.delPmPromotionRangeList=null,Object(o.i)("paramStr="+encodeURI(i()(this.getPresentDetails))).then(function(t){t.success?a.$message.success(t.msg):a.$message.error(t.msg),a.$refs.templateTable.getDataList()})),console.log(t,"得到的")},tableBtnClick:function(t,e,a){"delete"===e.id&&(this.addList=[],this.addList.push(t),this.deletes())},deletes:function(){var t=this;this.getPresentDetails.pmPromotionRangeList=null,this.getPresentDetails.delPmPromotionRangeList=this.addList,Object(o.i)("paramStr="+encodeURI(i()(this.getPresentDetails))).then(function(e){e.success?t.$message.success(e.msg):t.$message.error(e.msg),t.$refs.templateTable.getDataList()})},getData:function(t,e){var a=this;this.fileName=e,this.subArr=[],t.forEach(function(t,e){a.subArr.push({rangeCode:t["*商品编码"],pprlOpurl:t["商品条码"],dataOpnextbillstate:0,pprlOpname:t["商品名称"]})})},handleSelectionChange:function(t,e){var a=this;this.addList=[],t&&t.map(function(t){"-1"!=t.dataState&&a.addList.push(t)})},goodschange:function(t){if("1"!=t){if(this.shopData=this.$store.state.mad.goodslist,this.shopData&&this.shopData.length>0){for(var e=[],a=0;a<this.shopData.length;a++)e.push({promotionCode:this.promotionCode,dataOpnextbillstate:0,rangeCode:this.shopData[a].skuNo,pprlOpname:this.shopData[a].goodsName,discountAmount1:this.shopData[a].pricesetNprice,pprlOpurl:this.shopData[a].skuBarcode});this.upDates(e)}}else this.visible=!1},submits:function(){var t=this;this.subArr&&this.subArr.length>0&&(this.subArr.map(function(e){e.promotionCode=t.promotionCode,e.dataOpnextbillstate=0}),this.upDates(this.subArr)),this.visibles=!1},upDates:function(t){var e=this;this.getPresentDetails.pmPromotionRangeList=t,Object(o.i)("paramStr="+encodeURI(i()(this.getPresentDetails))).then(function(t){t.success?e.$message.success(t.msg):e.$message.error(t.msg),e.$refs.templateTable.getDataList()})},getPromotion:function(t){var e=this;this.presentList=[],Object(o.c)({promotionId:this.promotionId}).then(function(t){e.getPresentDetails=t,e.dataState=t.dataState,e.getDate()})},getDate:function(){if(console.log(this.dataState,"this.dataState"),"-1"==this.dataState||"2"==this.dataState)for(var t=0;t<this.temInput[this.temInput.length-1].btnArray.length;t++)0!=t&&(this.temInput[this.temInput.length-1].btnArray[t].disabled=!0,console.log(this.temInput[this.temInput.length-1].btnArray,"this.temInput.btnArray"))}},watch:{list:function(t,e){t&&(this.getPresentDetails=t,this.dataState=t.dataState,this.getDate())}}}),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("template-table",{ref:"templateTable",attrs:{temInput:t.temInput,url:t.url,temTable:t.temTable},on:{inputBtnClick:t.inputBtnClick,tableBtnClick:t.tableBtnClick,toggleSelection:t.toggleSelection,handleSelectionChange:t.handleSelectionChange,btnConfirm:t.btnConfirm}}),t._v(" "),a("shoppinggoods",{attrs:{shop:"plat",visible:t.visible},on:{receive:t.goodschange}}),t._v(" "),a("el-dialog",{attrs:{title:"批量导入",visible:t.visibles},on:{"update:visible":function(e){t.visibles=e}}},[a("div",{staticClass:"padding"},[a("xlsx-com",{staticClass:"leadCard",attrs:{buttonName:"选择文件"},on:{getData:t.getData}}),t._v(" "),a("el-button",{attrs:{type:"text"}},[a("a",{attrs:{href:"https://qjstatic.oss-cn-shanghai.aliyuncs.com/excel/promotionGoods.xlsx"}},[t._v("下载模板")])]),t._v(" "),a("div",{staticClass:"showContent"},[t._v(t._s(t.fileName))])],1),t._v(" "),a("div",{staticClass:"dia-btn flex justify-content--center padding"},[a("el-button",{attrs:{type:"info"},on:{click:function(e){t.visibles=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submits}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(r,p,!1,function(t){a("hQJp")},"data-v-3424f2f9",null);e.default=d.exports}});