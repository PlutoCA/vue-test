import Cookies from 'js-cookie'
import {getResourceGoods} from '@/api/shopFbu.js'
const list = {
  state: {
    eventS:{},
    data:[],
    goods:{},
    Names:'',
    relevanList:[],
    dataState:'',
    ExpCode:'',
    shopArrlist:[],
    listTwos:[],
    skudata:{},
    formdata:[],
    priceNp:'',
    priceMake:'',
    priceAs:'',
    Skulist:[],
    arrlist:[],
    piclists:[],
    goodsNames:'',
    goodsNo:'',
    video:'',
    checkeds:'',
		  validate: true
  },
  mutations: {
    goodsData:(state,obj)=>{
      state.goods=obj;
    },
    goodsParms:(state,obj)=>{
      state.eventS=obj;
    },
    goodsName:(state,obj)=>{
      state.Names=obj
    },
    getrelevanceList:(state,obj)=>{
      state.relevanList = obj;
    },
    getDatestate:(state,obj)=>{
      state.dataState = obj
    },
    getproId:(state,obj)=>{
      state.ExpCode = obj;
    },
    getshopArr:(state,obj)=>{
      state.shopArrlist = obj
    },
    getlistTwo:(state,obj)=>{
      state.listTwos = obj;
    },
    getskudata:(state,obj)=>{
      state.skudata = obj;
    },
    getformData:(state,obj)=>{
      state.formdata = obj;
    },
    getpriceNp:(state,obj)=>{
      state.priceNp = obj;
    },
    getpriceMake:(state,obj)=>{
      state.priceMake = obj;
    },
    getpriceAs:(state,obj)=>{
      state.priceAs = obj;
    },
    getSku:(state,obj)=>{
      state.Skulist = obj;
    },
    getarrlist:(state,obj)=>{
      state.arrlist = obj;
    },
    getdatapiclist:(state,obj)=>{
      state.piclists = obj;
    },
    getgoodname:(state,obj)=>{
      state.goodsNames = obj;
    },
    getgoodNo:(state,obj)=>{
      state.goodsNo = obj;
    },
    getchecked:(state,obj)=>{
      state.checkeds = obj;
    },
		  setValidate:(state,obj)=>{
				  state.validate = obj;
		  }
    // getvideo:(state,obj)=>{
    //   state.video = obj;
    // }
  },
  actions: {
    // getResourceGoods:({commit,state},obj)=>{
    //   getResourceGoods('goodsId=' + obj).then(res=>{
    //     //console.log(res)
    //     //let a=Object.assign({},res);
    //     //console.log(a)
    //     console.log(state)
    //     console.log(res.goodsName)
    //     //commit('goodsData',res.goodsName)
    //   })
    // },
    // eventS:({commit,state},obj)=>{

    //    // commit('eventS',obj)
    // }
  }
}


export default list
