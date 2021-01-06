import Cookies from 'js-cookie'

const mad = {
    state: {
        choseDialog: false,
        name: "libai",
        dialogFormVisible: false,
        pricesformdialogFormVisible: false,
        dataBmoney: "",
        orderdata: [],
        contractId: "",
        rolecontroll: "",
        menuCode: [],//用于接受权限目录
        bandlogo: "",//品牌图片地址
        goodsdialogTableVisible: false,//商品页显示隐藏
        categorydialogTableVisible: false,//类目页显示隐藏
        branddialogTableVisible: false,//品牌页显示隐藏
        addgoodsdialogTableVisible: false,//赠品显示隐藏
        sitedialogTableVisible:false,
        addgoodslist: [],//添加赠品
        goodslist: [],//选择促销商品
         shoplist: [],//选择门店
        categorylist: [],//选择促销类目
        brandslist: [],//选择促销品牌
        channellist:[],//选择渠道
        sltchannellist:[],//选择渠道
        shoppinglist:[],//选择渠道
        sltshoppinglist:[],//选择渠道
        sitelist:[],//选择渠道
        sltsitelist:[]//选择渠道
    },
    mutations: {
        choseDialog: (state, paylod) => { state.choseDialog = paylod },
        addgoodslistchange: (state, paylod) => state.addgoodslist = paylod,//添加赠品
        goodslistchange: (state, paylod) => state.goodslist = paylod,//选择促销商品
        shoplistchange: (state, paylod) => state.shoplist = paylod,//选择促销商品
        categorylistchange: (state, paylod) => state.categorylist = paylod,//选择促销类目
        brandslistchange: (state, paylod) => state.brandslist = paylod,//选择促销品牌
        mbt: (state, paylod) => state.name = paylod,
        mdt: (state, paylod) => state.dialogFormVisible = paylod,
        mpt: (state, paylod) => state.pricesformdialogFormVisible = paylod,
        datamoney: (state, paylod) => state.dataBmoney = paylod,
        addorderdata: (state, paylod) => state.orderdata = paylod,
        constId: (state, paylod) => state.contractId = paylod,
        addrole: (state, paylod) => state.rolecontroll = paylod,
        updatemenu: (state, paylod) => state.menuCode = paylod,
        updatebandlogo: (state, paylod) => state.bandlogo = paylod,
        goodschange: (state, paylod) => state.goodsdialogTableVisible = paylod,
        sitechange: (state, paylod) => state.sitedialogTableVisible = paylod,
        
        categorychange: (state, paylod) => state.categorydialogTableVisible = paylod,
        brandchange: (state, paylod) => state.branddialogTableVisible = paylod,
        addgoods: (state, paylod) => state.addgoodsdialogTableVisible = paylod,
        addChannelchange: (state, paylod) => state.sltchannellist = paylod,//选择渠道
        channelList:(state, paylod) => state.channellist = paylod,
        addSitechange: (state, paylod) => state.sltsitelist = paylod,//选择渠道
        siteList:(state, paylod) => state.sitelist = paylod,
        addShoppingchange: (state, paylod) => state.sltshoppinglist = paylod,//选择渠道
        shoppingList:(state, paylod) => state.shoppinglist = paylod,
    },
    actions: {
        had(state, paylod) {
            state.commit('mbt', paylod);
        }
    },
    getters: {

    }
}


export default mad;