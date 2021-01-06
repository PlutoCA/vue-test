<template>
	<div>
		<template-table :temInput="temInput" ref='templateTable' :url="url" :temTable="temTable" @inputBtnClick="inputBtnClick" @tableBtnClick="tableBtnClick" @toggleSelection='toggleSelection' @handleSelectionChange="handleSelectionChange" @btnConfirm="btnConfirm"></template-table>
		<shoppinggoods @receive="goodschange" :shop='"plat"' :visible='visible'></shoppinggoods>
		<el-dialog title="批量导入" :visible.sync="visibles">
			<div class='padding'>
				<xlsx-com class="leadCard" buttonName="选择文件" @getData="getData"></xlsx-com>
				<el-button type="text">
					<a href="https://qjstatic.oss-cn-shanghai.aliyuncs.com/excel/proSecGoods.xlsx">下载模板</a>
				</el-button>
				<div class="showContent">{{fileName}}</div>
			</div>
			<div class="dia-btn flex justify-content--center padding">
				<el-button type="info" @click="visibles=false">取消</el-button>
				<el-button type="primary" @click="submits">确定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="选择商品" :visible.sync="visibleShop" width='70%'>
			<div>
				<el-button type="primary" @click="getGoods">选择商品</el-button>
				<el-table :data="firstdata" key="firstTable">
					<el-table-column label="商品条码" prop="skuBarcode"></el-table-column>
					<el-table-column label="商品编码" prop="skuNo"></el-table-column>
					<el-table-column label="商品名称" prop="goodsName"></el-table-column>
					<el-table-column label="活动价格" prop="discountAmount1" :render-header="renderHeader">
						<template slot-scope="scope">
							<!--<el-form-item >-->
							<el-input type="text" v-model="scope.row.discountAmount1" name="discountAmount1" placeholder="请输入活动价格"></el-input>
							<!--</el-form-item>-->
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" type="text" @click="firsthandleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<div class="dia-btn flex justify-content--center padding">
				<el-button type="info" @click="visibleShop=false">取消</el-button>
				<el-button type="primary" @click="subList">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import xlsx from "xlsx";
	import xlsxCom from "./xlsxs";
	import shoppinggoods from "../components/shopingGoodPlat";
	import { getPromotion,updateDelPromotionRangelist, deletePromotionTargetlistStateForPlat, savePromotionRangelistBatchForPlat, sendPromotionById, queryPromotionRangelistPage } from "@/api/shopflist";
	import { parseTime } from "@/utils/index";
	import templateTable from "#/views/templates/templateTable";

	export default {
		components: {
			"template-table": templateTable,
			shoppinggoods,
			"xlsx-com": xlsxCom
		},
		props: {
			list: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				fileName: '',
				firstdata: [],
				visibleShop: false,
				visible: false,
				visibles: false,
				getPresentDetails: {},
				presentList: [],
				tableGoodsData: [],
				NtableGoodsData: [],
				promotionId: '',
				shopData: [],
				addList: [],
				promotionIdDet: '',
				subArr: [],
				promotionCode: '',
				page: 1,
				rows: 10,
				tableData: [],
				url: "",
				temInput: [{
					name: 'promotionCode',
					value: "",
				}, {
					label: "商品名称",
					type: "text",
					name: "pprlOpname",
					value: "",
					placeholder: "请输入商品名称"
				}, {
					label: "商品编码",
					type: "text",
					name: "rangeCode",
					value: "",
					placeholder: "请输入商品编码"
				}, {
					label: "商品条码",
					type: "text",
					name: "pprlOpurl",
					value: "",
					placeholder: "请输入商品条码"
				}, {
					label: "同步状态",
					type: "select",
					name: "dataOpnextbillstate",
					placeholder: "请选择同步状态",
					value: "",
					options: [{
							label: "未同步",
							value: "0"
						},
						{
							label: "同步成功",
							value: "1"
						},
						{
							label: "同步异常",
							value: "2"
						},
						{
							label: "已删除",
							value: "-1"
						}
					]
				}, {
					btnArray: [{
							type: "primary",
							id: "search",
							label: "查询",
							url: ""
						},
//						{
//							type: "primary",
//							id: "addShop",
//							label: "新增",
//							url: ""
//						},
//						{
//							type: "primary",
//							id: "addXl",
//							label: "批量导入",
//							url: ""
//						},
//						{
//							type: "danger",
//							id: "deletes",
//							label: "批量删除",
//							url: ""
//						},
						{
							type: "primary",
							id: "rePush",
							label: "营销重推",
							url: ""
						}
					]
				}],
				temTable: {
					reserve_selection: false,
					rowKey: "pprlId",
					selection: {
						state: true,
						params: [] //单选的参数
					},
					tableHead: [{
							prop: "pprlOpname", //基础参数
							label: "商品名称" //基础参数
						},
						{
							prop: "rangeCode", //基础参数
							label: "商品编码" //基础参数
						},
						{
							prop: "pprlOpurl", //基础参数
							label: "商品条码" //基础参数
						}, //discountAmount1
						{
							prop: "discountAmount1", //基础参数
							label: "价格" //基础参数
						}, //discountAmount1
						
						{
							prop: "dataState", //基础参数
							label: "状态", //基础参数
							template: {
								'0': "进行中",
								"4": "未开始",
								"1": "进行中",
								"2": "已结束",
								"-1": "已取消",
								"3": "已终止",
								"5": "审核失败",
							} //日期类型,
						},
						{
							prop: "dataOpnextbillstate", //基础参数
							label: "同步状态", //基础参数
							template: {
								"0": "未同步",
								"1": "同步成功",
								"2": "同步异常",
								'-1': '已删除'
							} //日期类型,
						},
						{
							prop: "discountAmount1", //基础参数
							renderTemp: this.renderContentDates,
							label: "失败原因" //基础参数
						},
					],
					tabBtnState:false,
					tableBtn: [

						{
							label: "删除",
							dataState: '0',
							id: "delete",
							type: "primary" //和element一致
						},
						{
							label: "删除",
							dataState: '1',
							id: "delete",
							type: "primary" //和element一致
						},
						{
							label: "删除",
							dataState: '2',
							id: "delete",
							type: "primary" //和element一致
						},
						{
							label: "删除",
							dataState: '3',
							id: "delete",
							type: "primary" //和element一致
						},
						{
							label: "删除",
							dataState: '4',
							id: "delete",
							type: "primary" //和element一致
						},
						{
							label: "删除",
							dataState: '5',
							id: "delete",
							type: "primary" //和element一致
						},
					]
				}
			}
		},
		mounted() {
			this.promotionId = this.$route.query.promotionId;
			this.promotionCode = this.$route.query.promotionCode;
			this.temInput[0].value = this.promotionCode;
			if(this.promotionCode) {
				this.url = '/web/pm/promotionRangelist/queryPromotionRangelistPagebyCode.json'
				this.$refs.templateTable.clickState = true;
				this.$nextTick(() => {
					this.$refs.templateTable.getDataList();
				})
			}
						this.getPromotion();
		},
		methods: {
			firsthandleDelete(index, row) {
      //删除商品
      console.log(index, row);
      this.firstdata.splice(index, 1);
    },
			renderContentDates(h, item) {
				if(item.dataOpnextbillstate == '2') {

					return(<div><p>{item.memo}</p></div>);
				} else {
					return(<div></div>)
				}
			},
			inputBtnClick(item, index) {
				if(item.id == "addShop") {
					this.$store.commit("goodslistchange", '');
					this.firstdata = []
					this.visibleShop = true

				} else if(item.id == "addXl") {
					this.subArr = [];
					this.fileName = '';
					this.visibles = true

				} else if(item.id == "deletes") {
					if(this.addList.length == 1) {
						if(this.addList[0].dataState == '-1') {
							this.$message.error('该商品已删除')
						} else {
							this.deletes();
						}

					} else if(this.addList.length > 1) {
						this.$message.error('您一次只能删除一条')
					} else {
						this.$message.error('请勾选您要删除的商品')
					}

				} else if(item.id == "rePush") {
					this.getPresentDetails.pmPromotionRangeList=null
				this.getPresentDetails.delPmPromotionRangeList = null
//				this.promotionIdDet = this.addList[0].pprlId
				updateDelPromotionRangelist("paramStr=" + encodeURI(JSON.stringify(this.getPresentDetails))).then(res => {
					if(res.success) {
						this.$message.success(res.msg)
						
					} else {
						this.$message.error(res.msg)
					}
					this.$refs.templateTable.getDataList();
				})
//					sendPromotionById({
//						promotionId: this.promotionId
//					}).then(res => {
//						if(res.success) {
//							this.$message.success(res.msg)
//						} else {
//							this.$message.error(res.msg)
//						}
//					})
				}
				console.log(item, '得到的')

			},
			tableBtnClick(row, item, index) {
				if(item.id === "delete") {
					this.addList = []
					this.addList.push(row);
					this.deletes();
				}
			},
			getGoods() {
				this.visible = true
			},
			deletes() {
				this.promotionIdDet = this.addList[0].pprlId
				deletePromotionTargetlistStateForPlat({
					pprlId: this.promotionIdDet
				}).then(res => {
					if(res.success) {
						this.$message.success(res.msg)
						this.$refs.templateTable.getDataList();
					} else {
						this.$message.error(res.msg)
					}
				})
			},
			//接收子组件数据并处理
			getData(data, fileName) {
				this.fileName = fileName;
				this.subArr = [];
				data.forEach((item, index) => {
					this.subArr.push({
						rangeCode: item["*商品编码"],
						pprlOpurl: item["商品条码"],
						dataOpnextbillstate: 0,
						discountAmount1:item["*活动价格"],
						pprlOpname: item["商品名称"]
					});
				});
			},
			handleSelectionChange(se, rows) {
				this.addList = []
				this.addList = se;
			},
			goodschange(val) {
				if(val == '1') {
					this.visible = false;
					return
				}
				this.firstdata = this.$store.state.mad.goodslist; //商品
				//				if(this.shopData && this.shopData.length > 0) { //新增
				//					let data = []
				//					for(var i = 0; i < this.shopData.length; i++) {
				//						data.push({
				//							promotionCode: this.promotionCode,
				//							dataOpnextbillstate: 0,
				//							rangeCode: this.shopData[i].skuNo,
				//							pprlOpname: this.shopData[i].goodsName,
				//							discountAmount1: this.shopData[i].pricesetNprice,
				//							pprlOpurl: this.shopData[i].skuBarcode
				//						});
				//					}
				//					this.upDates(data)
				//				}
			},
			submits() {
				if(this.subArr && this.subArr.length > 0) {
					this.subArr.map(el => {
						el.promotionCode = this.promotionCode
						el.dataOpnextbillstate = 0
					})
					 let msg1=/(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/
					for(var i = 0; i < this.subArr.length; i++) {
						if(
							this.subArr[i].discountAmount1 == "" ||
							this.subArr[i].discountAmount1 == null ||
							this.subArr[i].discountAmount1 == undefined
						) {
							this.$message.error("活动价不能为空");
							return false;
						} else if(!msg1.test(this.subArr[i].discountAmount1)) {
							this.$message.error("活动价大于0且最多为两位小数");
							return false;
						} 
						}
					this.upDates(this.subArr)
					this.visibles = false;
				}
				
			},
			upDates(data) {
				this.getPresentDetails.pmPromotionRangeList = data
				savePromotionRangelistBatchForPlat("paramStr=" + encodeURI(JSON.stringify(this.getPresentDetails))).then(res => {
					if(res.success) {
						this.$message.success(res.msg)
						this.$refs.templateTable.getDataList();
					} else {
						this.$message.error(res.msg)
					}
				})
			},
			subList(val) {
				this.shopData = this.firstdata;
				if(this.shopData && this.shopData.length > 0) { //新增
					let data = []
					let msg1 = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/
					for(var i = 0; i < this.firstdata.length; i++) {
						if(
							this.firstdata[i].discountAmount1 == "" ||
							this.firstdata[i].discountAmount1 == null ||
							this.firstdata[i].discountAmount1 == undefined
						) {
							this.$message.error("活动价不能为空");
							return false;
						} else if(!msg1.test(this.firstdata[i].discountAmount1)) {
							this.$message.error("活动价大于0且最多为两位小数");
							return false;
						} else {
							data.push({
								rangeCode: this.firstdata[i].skuNo,
								pprlOpname: this.firstdata[i].goodsName,
								pprlOpurl: this.firstdata[i].skuBarcode,
								discountAmount1: this.firstdata[i].discountAmount1,
							});
						}
					}
					this.visibleShop=false
					this.upDates(data)
				} else {
					this.$message.error('您还未选择商品')
				}

			},
			getPromotion(val) {
				const _this = this;
				this.presentList = [];
				getPromotion({
					promotionId: this.promotionId
				}).then(res => {
					this.getPresentDetails = res;
				});
			},
			renderHeader(h, {
				column
			}) { // h即为cerateElement的简写，具体可看vue官方文档
				return h(
					'div', [
						h('i', {
							style: 'color:#f56c6c'
						}, ['*']),
						h('span', column.label),
					], );
			},
		},
		watch: {
			list(newl, old) {
				if(newl) {
					console.log(newl,'对的')
					this.getPresentDetails = newl
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	.padding {
		padding: 30px 0;
	}
</style>