const loginUser='login.user.info';//登录用户信息存储
const loginSessionInfo='login.session.info';//登录sessionKey存储
const selectHopDirector='select.hop.director';//选择补给站店长
const hopInfoListStorage='hop.info.list.storate';//添加补给站infoList在查看情况下存储
const addrJSONData='addr.json.data'; //本地存储地址json数据
const indexLocationAddr='index.location.addr'; //首页定位地址
const districtHistorySelect='district.history.select';//历史选择 省市区
const hopInputSelectDistrict='hop.input.select.district';//补给站选择地址 存储选择区域
const hopShowRefresh='hop.show.refresh';//刷新补给站详情
const hopCategoryRrefresh='hop.category.refresh';//
const hopStorageTmpData = 'hop.storage.inorout.data'//临时交换出入库分类转换返回数据
const changeCategoryTmpData = 'hop.change.Category.data'//临时交换出入库分类转换返回数据
const requestDataStorage='request.data';



/**临时交换分区内容 */
const tmpGoodsDetail = 'hop.tmp.goodsDetail.data' //临时存储编辑商品信息
const tmpEditGoodsDetail = 'hop.tmp.editGoodsDetail.data' //临时存储编辑商品信息
const tmpCategoryEditDate = 'hop.tmp.editCategory.data'//临时存储编辑分类信息

module.exports={
    loginUser,
    loginSessionInfo,
    selectHopDirector,
    hopInfoListStorage,
    addrJSONData:addrJSONData,
    indexLocationAddr:indexLocationAddr,
    districtHistorySelect:districtHistorySelect,
    hopInputSelectDistrict:hopInputSelectDistrict,
    hopShowRefresh:hopShowRefresh,
    hopCategoryRrefresh:hopCategoryRrefresh,
    hopStorageTmpData,
    changeCategoryTmpData,
    requestDataStorage,
    //交换分区内容
    tmpGoodsDetail,
    tmpEditGoodsDetail,
    tmpCategoryEditDate
}
