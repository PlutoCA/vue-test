<template>
	<div>
		<div class="magind">
			<el-row>
				<div class="lefts">
					<div class="name">商品名称：</div>
					<el-input placeholder="请输入内容" v-model="optionOne" clearable>
					</el-input>
				</div>
				<div class="lefts">
					<div class="name">商品编码：</div>
					<el-input placeholder="请输入内容" v-model="optionTwo" clearable>
					</el-input>
				</div>			
				<div class="lefts">
					<div class="name">商品条码：</div>
					<el-input placeholder="请输入内容" v-model="optionThree" clearable>
					</el-input>
				</div>				
			</el-row>
		</div>
		<div class="buttonsList">
			<div>
				<el-button type="primary" @click="getPromotion('1')">查询</el-button>
				<!--<el-button type="primary" @click="addShop">新增</el-button>
				<el-button type="primary" @click="addXl">批量导入</el-button>
				<el-button type="danger" @click="deletes">批量删除</el-button>-->
			
			</div>	
			<div>
				<el-button type="primary" @click="rePush">营销重推</el-button>			
				<span>总数：{{NtableGoodsData.length}}条</span>
			</div>
			</div>
		<el-table :data="NtableGoodsData" stripe style="width: 100%" @selection-change="handleSelectionChange">
			
			<!--<el-table-column type="selection" width="55" :selectable="checkSelectable"> </el-table-column>-->
			<el-table-column type="index" label="序号"> </el-table-column>
			<el-table-column prop="pprlOpname" label="商品名称" width="180"></el-table-column>
			<el-table-column prop="rangeCode" label="商品编码" width="180"></el-table-column>
			<el-table-column prop="pprlOpurl" label="商品条码" width="180"></el-table-column>
			<el-table-column prop="dataOpnextbillstate" label="同步状态">
				<template slot-scope="scope">
					<div v-if='scope.row.dataOpnextbillstate==1'>同步成功</div>
					<div v-else-if='scope.row.dataOpnextbillstate==0'>未同步</div>
					<div v-else-if='scope.row.dataOpnextbillstate==2'>同步失败</div>
					<div v-else-if='scope.row.dataOpnextbillstate==-1'>已删除</div>
				</template>
			</el-table-column>
			<el-table-column prop="dataState" label="状态">
				<template slot-scope="scope">
					<div v-if='scope.row.dataState==-1'>已删除</div>
					<div v-else-if='scope.row.dataState==0'>正常</div>
				</template>
			</el-table-column>
			<el-table-column prop="memo" label="失败原因" width="180">
				<template slot-scope="scope">
					<div v-if='scope.row.dataOpnextbillstate==2'>{{scope.row.memo}}</div>
				</template>
			</el-table-column>
			
			
			<!--<el-table-column prop="dataState" label="操作">
				<template slot-scope="scope">
					<el-button v-if='scope.row.dataState!=-1' type='text' @click='del(scope)'>删除</el-button>

				</template>
			</el-table-column>-->
		</el-table>

		<el-dialog title="批量导入" :visible.sync="visibles">
			<div class='padding'>
				<xlsx-com class="leadCard" buttonName="选择文件" @getData="getData"></xlsx-com>
				<el-button type="text">
					<a href="https://qjstatic.oss-cn-shanghai.aliyuncs.com/excel/promotionGoods.xlsx">下载模板</a>
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
		          <el-input
		            type="text"
		            v-model="scope.row.discountAmount1"
		            name="discountAmount1"
		            placeholder="请输入活动价格"
		          ></el-input>
		          <!--</el-form-item>-->
        			</template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="text"
                    @click="firsthandleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
			</div>
			
			<div class="dia-btn flex justify-content--center padding">
				<el-button type="info" @click="visibleShop=false">取消</el-button>
				<el-button type="primary" @click="subList">确定</el-button>
			</div>
		</el-dialog>
		<shoppinggoods @receive="goodschange" :shop='"plat"' :visible='visible'></shoppinggoods>
		
	</div>
</template>

<script>
	import xlsx from "xlsx";
	import xlsxCom from "./xlsxs";
	import shoppinggoods from "../components/shoppingGood";
	import { getPromotion, deletePromotionTargetlistState, savePromotionRangelistBatch,sendPromotionById } from "@/api/shopflist";
	import { parseTime } from "@/utils/index";
	export default {
		components: {
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
				
				visibleShop:false,
				firstdata:[],
				fileName: '',
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
				tableData: []
			}
		},
		mounted() {
			this.promotionId = this.$route.query.promotionId;
			//  		 this.getPromotion();
		},
		methods: {
			getGoods(){
				this.visible=true
			},
			firsthandleDelete(index, row) {
      			//删除商品
		      console.log(index, row);
		      this.firstdata.splice(index, 1);
		   },
			checkSelectable(row) {
				return row.dataState != '-1'
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
			addXl() { //导入
				this.subArr = [];
				this.fileName = '';
				this.visibles = true
			},
			addShop() {
				this.$store.commit("goodslistchange", '');
				this.firstdata=[]
				this.visibleShop = true
			},
			goodschange(val) {
				this.visible=false
				if(val == '1') {
					return
				}
				console.log('确定')
				this.firstdata = this.$store.state.mad.goodslist; //商品
			},			
			subList(val){
								this.shopData = this.firstdata;
				if(this.shopData && this.shopData.length > 0) { //新增
				let data = []
				let msg1=/(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/
          for (var i = 0; i < this.firstdata.length; i++) {
          	 if (
          this.shopData[i].discountAmount1 == "" ||
          this.shopData[i].discountAmount1 == null ||
          this.shopData[i].discountAmount1 == undefined
        ) {
          this.$message.error("活动价不能为空");
          return false;
        }else if(!msg1.test(this.firstdata[i].discountAmount1)){
        	 this.$message.error("活动价大于0且最多为两位小数");
          return false;
        }else{
            data.push({
              rangeCode: this.firstdata[i].skuNo,
              pprlOpname: this.firstdata[i].goodsName,
              pprlOpurl: this.firstdata[i].skuBarcode,
              discountAmount1: this.firstdata[i].discountAmount1,
            });
          }
        }
          console.log('过')

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
//					
this.visibleShop=false
				this.upDates(data)
				}else{
					this.$message.error('您还未选择商品')
				}
				
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
				savePromotionRangelistBatch("paramStr=" + encodeURI(JSON.stringify(this.getPresentDetails))).then(res => {
					if(res.success) {
						this.$message.success(res.msg)
						this.getPromotion()
					} else {
						this.$message.error(res.msg)
					}
					this.visibleShop=false
				})
			},
			handleSelectionChange(val) {
				this.addList = [];
				this.addList = val;
			},
			del(msg) {
				this.addList.push(msg.row);
				this.deletes('1')
			},
			deletes(msg) { //批量删除paramStr
				if(this.addList.length == 1) {
					this.promotionIdDet = this.addList[0].pprlId
					deletePromotionTargetlistState({
						pprlId: this.promotionIdDet
					}).then(res => {
						if(res.success) {
							this.$message.success(res.msg)
							this.getPromotion()
						} else {
							this.$message.error(res.msg)
						}
					})
				} else {
					if(msg != '1' && this.addList.length == 0) {
						this.$message.error('请选择要删除的商品')
					} else if(this.addList.length > 1) {
						this.$message.error('一次最多只能删除一条')
					}
				}
			},
			changes() {
				let arr = [],
					arrT = [],
					bool=false,
					arrs = [];
				arr = this.tableGoodsData;
				//		if(this.optionOne){
				arr && arr.map(el => {
					if(this.optionOne && this.optionOne == el.pprlOpname && !this.optionTwo && !this.optionThree) {
						arrT.push(el)
					} else if(this.optionTwo && this.optionTwo == el.rangeCode && !this.optionOne && !this.optionThree) {
						arrT.push(el)
					} else if(this.optionThree && this.optionThree == el.pprlOpurl && !this.optionOne && !this.optionTwo) {
						arrT.push(el)
					} else if(this.optionThree && this.optionTwo && this.optionThree == el.pprlOpurl && this.optionTwo == el.rangeCode && !this.optionOne) {
						arrT.push(el)
					} else if(this.optionThree && this.optionOne && this.optionThree == el.pprlOpurl && this.optionOne == el.pprlOpname && !this.optionTwo) {
						arrT.push(el)
					} else if(this.optionTwo && this.optionOne && this.optionTwo == el.rangeCode && this.optionOne == el.pprlOpname && !this.optionThree) {
						arrT.push(el)
					} else if(this.optionTwo && this.optionOne && this.optionThree && this.optionTwo == el.rangeCode && this.optionOne == el.pprlOpname && this.optionThree == el.pprlOpurl) {
						arrT.push(el)
					} else if(!this.optionTwo && !this.optionOne && !this.optionThree) {
						arrT.push(el)
						bool=true
					}else{
						
					}
				})
//				if(bool){
//					this.getPromotion();
//				}
//						console.log(arrT,'arrT') 
				this.NtableGoodsData = arrT
				//		console.log('查询')
			},
			getPromotion(val) {
				const _this = this;
				this.presentList = [];
				getPromotion({
					promotionId: this.promotionId
				}).then(res => {
					this.ssld(res,val)
				});
			},
			ssld(res,val) {
				res.promotionBegintime = res.promotionBegintime ?
					parseTime(res.promotionBegintime) :
					res.promotionBegintime;
				res.promotionEndtime = res.promotionEndtime ?
					parseTime(res.promotionEndtime) :
					res.promotionEndtime;
				res.gmtCreate = res.gmtCreate ?
					parseTime(res.gmtCreate) :
					res.gmtCreate;
				res.gmtModified = res.gmtModified ?
					parseTime(res.gmtModified) :
					res.gmtModified;
				this.promotionCode = res.promotionCode
				this.getPresentDetails = res;
				this.tableData = res.pmPromotionSupList;
				this.tableGoodsData = res.pmPromotionRangeList;
				this.NtableGoodsData = res.pmPromotionRangeList;
				if(val=='1'){
					this.changes()
				}
			},
			rePush(){
				
				sendPromotionById({promotionId:this.promotionId}).then(res=>{
					if(res.success){
						this.$message.success(res.msg)
					}else{
						this.$message.error(res.msg)
					}
				})
			},
			renderHeader (h,{column}) { // h即为cerateElement的简写，具体可看vue官方文档
        return h(
          'div',
          [
           h('i',{style:'color:#f56c6c'},['*']),
           h('span', column.label),
          ],
        );
     },

		},
		watch: {
			list(newl, old) {
				if(newl) {
					this.ssld(newl)
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	.createPost-container {
		min-height: 600px;
		padding: 20px;
		background: #fff;
		.el-row {
			padding-top: 20px;
		}
		.magind {
			margin: 0 0 20px 0;
			overflow: hidden;
		}
		.lefts {
			overflow: hidden;
			float: left;
			margin-right: 2px;
			.name {
				float: left;
				height: 32px;
				line-height: 32px;
				font-size: 14px;
				color: #666;
			}
			.el-input {
				width: 185px;
			}
		}
		.buttonsList {
			display: flex;
			margin: 0 20px 0 0;
			justify-content: space-between;
			span {
				color: #666;
			}
		}
		.padding {
			padding: 30px;
		}
	}
</style>