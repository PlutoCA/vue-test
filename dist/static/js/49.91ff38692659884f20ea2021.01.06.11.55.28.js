webpackJsonp([49],{J8Ty:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{"template-table":l("FR2T").default},data:function(){return{dialogVisible:!1,btnLoading:!1,diglogType:"",url:"/test",temInput:[{label:"名称",type:"text",name:"informationTitle",value:""},{label:"类型",type:"text",name:"informationTitle",value:""},{btnArray:[{type:"primary",id:"search",label:"搜索",url:""}]}],temTable:{tableHead:[{prop:"index",label:"id编号",serialize:"",width:"100"},{prop:"name",label:"名称"},{prop:"sign",label:"型号"},{prop:"show",label:"类型"},{prop:"unit",label:"单价"},{prop:"num",label:"数量"},{prop:"concat",label:"联系人"},{prop:"phone",label:"联系方式"},{prop:"type",label:"供应"}],tableBtn:[{label:"查看",state:!0,id:"detail",type:"primary",url:""},{label:"通过",state:!0,id:"success",type:"primary",url:""},{label:"拒绝",state:!0,id:"refuse",type:"danger",url:""}]}}},methods:{inputBtnClick:function(e,t){console.log(e,t),"addss"===e.id&&this.$router.push("/banner/edit")},tableBtnClick:function(e,t,l){console.log(e,t,l),this.diglogType=t.id,"success"!==t.id&&"refuse"!==t.id||(this.dialogVisible=!0),"detail"===t.id&&this.$router.push("/supply/detail")},confirm:function(){var e=this;this.btnLoading=!0,setTimeout(function(){e.btnLoading=!1,e.dialogVisible=!1},1e3)}}},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("template-table",{attrs:{temInput:e.temInput,url:e.url,temTable:e.temTable},on:{inputBtnClick:e.inputBtnClick,tableBtnClick:e.tableBtnClick}}),e._v(" "),l("el-dialog",{attrs:{title:"审核",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("span",[e._v("是否"+e._s("success"===e.diglogType?"通过":"拒绝")+"这条内容")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),"success"===e.diglogType?l("el-button",{attrs:{loading:e.btnLoading,type:"primary"},on:{click:e.confirm}},[e._v("确 定")]):l("el-button",{attrs:{loading:e.btnLoading,type:"danger"},on:{click:e.confirm}},[e._v("拒绝")])],1)])],1)},staticRenderFns:[]},n=l("VU/8")(i,a,!1,null,null,null);t.default=n.exports}});