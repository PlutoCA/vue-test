<template>
	<div v-if="visibles">
	<el-dialog title="选择商品" :visible.sync="visibles" width="70%">
<div>
		<templateTable ref='template' 
			:temInput="temInput" 
			:url="urls" 
			:temTable="temTable" 
			@toggleSelection='toggleSelection'
			@handleSelectionChange="handleSelectionChange"
			></templateTable></div>
		<div class="dia-btn flex justify-content--center">
			<el-button type="info" @click="close">取消</el-button>
			<el-button type="primary" @click="submitDiaBtn">确定</el-button>
		</div>
	</el-dialog>
	</div>
</template>

<script>
	import templateTable from "#/views/templates/templateTable";
	import { queryClasstree, hubrandfen } from "@/api/shopflist";

	export default {
		components: {
			templateTable
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			shop:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				goodsData: [],
				visibles: false,
				temInput: [
					//      {
					//        label: "门店名称",
					//        type: "text",
					//        name: "ppsupName",
					//        value: "",
					//        placeholder: "请输入门店名称"
					//      },
					{
						label: "商品名称",
						type: "text",
						name: "goodsName",
						value: "",
						placeholder: "请输入商品名称"
					},
					{
						label: "商品编码",
						type: "text",
						name: "goodsShowno",
						value: "",
						placeholder: "请输入商品编码"
					},
					{
						label: "商品条码",
						type: "text",
						name: "skuBarcode",
						value: "",
						placeholder: "请输入商品条码"
					},
//					{
//						label: "商品分类",
//						name: "classtreeCode",
//						type: "cascader",
//						props: {
//							label: "classtreeName",
//							value: "classtreeCode",
//							children: "childList"
//						},
//						options: [],
//						placeholder: "请选择商品分类",
//						value: []
//					},
					{
						 label: "商品品牌",
				          type: "select",
				          filterable: true,
//				          multiple: true,
				          name: "brandCode",
				          placeholder: "请选择",
				          props: {
				            label: "brandName",
							value: "brandCode",
				          },
				          pagenation:{
				          	page:1,
				          	rows:500,
				          },
				          url: "/web/rs/brand/queryBrandPage.json",
				          options: [],
				          value: ""
					},
					{
						btnArray: [{
								type: "primary",
								id: "search",
								label: "查询",
								url: ""
						},
						]
					}
				],
				temTable: {
					reserve_selection: false,
					rowKey: "goodsCode",
					selection: {
						state: true,
						params: [] //单选的参数
					}, //表示有单选，可选参数
					tableHead: [

						{
							prop: "goodsName", //基础参数
							label: "商品名称" //基础参数
						},
						//      		{
						//          prop: "pprlOpname", //基础参数
						//          label: "商品名称" //基础参数
						//        },

						{
							prop: "goodsShowno", //基础参数
							label: "商品编码" //基础参数
						},
						{
							prop: "skuBarcode", //基础参数
							label: "商品条码" //基础参数
						},

					],
					tabBtnState: false,
				},
				urls: '/web/pm/promotionbus/querySkuPageeForPlat.json'
			}
		},
		mounted() {
//			this.queryClasstrees()
			console.log(this.shop,'得到的3')
		},
		methods: {
			toggleSelection(){
				
			},
//			queryClasstrees() {
//				queryClasstree().then(res => {
//					this.temInput[3].options = res;
//				})
//				hubrandfen().then(res => {
//					this.temInput[4].options = res.rows;
//				})
//			},
			handleSelectionChange(se, rows) {
				this.goodsData = se;
			},
			close() {
				//关闭
				this.visibles = false;
				this.$emit("receive");
				//    this.$store.commit("goodschange", false);
			},
			submitDiaBtn() {
				let data = JSON.parse(JSON.stringify(this.goodsData));
				console.log(data, 'dd ')
				//				this.$store.commit("goodschange", false);
				this.$store.commit("goodslistchange", data);
				this.visibles = false;
				this.$emit("receive");
				//				this.goodsData
			}
		},
		watch: {
			visible(val, old) {
				console.log(val, old, "45");
				this.visibles = val
			},
			visibles(val, old) {
				if(!val){
					this.$emit("receive",'1');
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dia-btn {
		padding: 20px 0 30px;
	}
</style>