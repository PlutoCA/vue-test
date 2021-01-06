<template>
  <div>
      <template-table
      :temInput="temInput"
      :url="url"
      :temTable="temTable"
      @inputBtnClick="inputBtnClick"
      @tableBtnClick="tableBtnClick"
      @getData='getData'
    ></template-table>
  </div>
</template>

<script>
import { parseTime } from "@/utils/index";
import templateTable from "#/views/templates/templateTable";
import { getActivityDrawCoupon,queryBiddingSourcePage} from "@/api/activity";
 var sourceLists=[];
queryBiddingSourcePage().then(res=>{
    res.list.forEach(k=>{
        let obj={};
       obj.label= k.sourceName;
       obj.value = k.sourceCode;
       sourceLists.push(obj)
    })
})
var test='hehe'
export default {
   components: {
    "template-table": templateTable
  },
  data() {
    return {
      url:'/web/pm/biddingInformation/queryBiddingInformationPage.json',
      temInput: [
        {
          label: '标题', //可选参数
          type: "text", //类型
          name: "informationTitle", //参数名称
          value: "" //参数值，默认为空
        },
        {
          label: '来源网站', //可选参数
          type: "select", //类型
          name: "sourceCode", //参数名称
          value:'',
          placeholder: "请选择",//默认提示语，可选参数
          // props:{
          //   label:'name',
          //   value:'code'
          // },
          options:sourceLists
        },
         {
          label: '时间', //可选参数
          type: "daterange", //类型
          name: "informationDateFormateQstart,informationDateFormateQend", //参数名称
          value: "" //参数值，默认为空
        },

        {
          btnArray: [
            {
              type: "primary",
              id: "search",
              label: "查询",
              url: "/web/pm/biddingInformation/queryBiddingInformationPage.json"
            },
          ]
        }
      ],
      temTable: {
        tableHead: [
          {
            prop:'index', //基础参数
            label: "序号", //基础参数
            serialize:'',//是否要序号
            width:'100'
          },
           {
            prop: "informationTitle",
            label: "标题",
          },
          {
            prop: "sourceName",
            label: "网站来源",
            
          },
          {
            prop: "informationDate",
            label: "时间",
          },

        ],
        tableBtn: [
          {
            label: "查看详情",
            state: true,
            id: "see", //表示查看详情
            type: "primary" ,//和element一致
            url:"showUrl"
          },
          // {
          //   label: "停用",
          //   state: false,
          //   dataState: "1",
          //   prompt: "true", //可选参数，为false不显示提示框
          //   promptTitle: "是否确定停用！", //提示内荣，可选参数,不填则不给提示
          //   params: {
          //     drawCouponId: ""
          //   },
          //   url: "/web/pm/activityDrawCoupon/updateActivityDrawCouponStop.json"
          // },

        ]
      }
    }
  },
  mounted() {
    
  },
  methods: {
       getData(data){
      this.couponLists=data;
    },
    inputBtnClick(data, index) {
        var drag=true;
      if (data.id === "addss") {
        // this.$router.push("/addDeratecoupon");
        this.couponLists.forEach(res=>{
            if(res.dataState==1){
                this.$message('已有活动在生效中，无法新增');
                drag=false;
                return false;
            }else{
               
            }
        })
        if(drag){
            this.$router.push("/addLimitedCoupon");
        }
      }
    },
    tableBtnClick(data, item, index) {
      
      console.log(data, "datadata");

      if (item.id === "check") {
        // console.log(data, "data");
        this.modalData = data;
        getActivityDrawCoupon(`drawCouponId=${data.drawCouponId}`).then(
          res => {
            this.modalData = res;
            this.show = true;
            this.rangCode = "rangeCode";
            this.modalData.condOnceUsenums =
              res.pmPromotionConditionList[0].condOnceUsenums;

            let disArr = res.pmPromotionDisList.map(data => {
              return {
                name: data.channelName,
                type: res.promotionDis
              };
            });
            let memArr = res.pmPromotionMemList.map(data => {
              return {
                name: data.ppmemName,
                type: res.promotionTer
              };
            });
            let terArr = res.pmPromotionTerminalList.map(data => {
              return {
                name: data.pptName,
                type: res.promotionDis
              };
            });
            this.modalData.querylist = {
              disArr: disArr,
              memArr: memArr,
              terArr: terArr
            };
          }
        );
        this.dialogVisible = true;
      } 
    },
    renderTempConent(h, item) {
    //   return (
    //     <div>
    //       {parseTime(item.promotionBegintime)}~
    //       {parseTime(item.promotionEndtime)}
    //     </div>
    //   );
     return (
        <div>
          {parseTime(item.informationDateFormateQstart)}
        
        </div>
      );
    },
    renderTempConent1(h, item) {
     return (
        <div>
          {parseTime(item.informationDateFormateQend)}
        </div>
      );
    }
  },
}
</script>
<style lang="scss" scoped>

</style>