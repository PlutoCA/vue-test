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
import templateTable from "#/views/templates/templateTable";

export default {
    components: {
    "template-table": templateTable
  },
  data() {
    return {
      url:'',
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
          options: []
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
        ]
      }
    }
  },
}
</script>

<style>

</style>