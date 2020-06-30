import Taro , { Component, navigateTo } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './mine.scss';
import { AtButton } from 'taro-ui'
import * as util from '@util/util'
import utilStore from '@util/utilStore'
import localStorage from '@util/localStorage'

import MineHeader from './header'
import LinkItem from './link'
import navFinacialIcon from './assets/mine_nav_financial.png'
import navGoodsIcon from './assets/mine_nav_goods.png'
import navOutInIcon from './assets/mine_nav_outin.png'
import navStockIcon from './assets/mine_nav_stock.png'

import mineTabAboutIcon from './assets/mine_tab_about.png'
import mineTabBankIcon from './assets/mine_tab_bank.png'
import mineTabManageIcon from './assets/mine_tab_manage.png'
import mineTabRecordIcon from './assets/mine_tab_record.png'

 class Mine extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    mineNavList:[
      {icon:navFinacialIcon,title:'商品管理'},
      {icon:navGoodsIcon,title:'库存报表'},
      {icon:navOutInIcon,title:'财务报表'},
      {icon:navStockIcon,title:'出入库管理'},
    ]
  }


  loginOut(){
    util.taroShowModal({
      content:'确定要退出登录？',
      cb(){
        utilStore.removeItem(localStorage.loginUser);
        Taro.reLaunch({
          url:'/pages/login/login'
        })
      }
    })
  }
  componentWillMount () {

  }
  componentDidMount () {
    console.log(this);
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    const {mineNavList}=this.state;
    //我的导航列表
    const mineContent=(
      <View className="mine-tab-list"> 
        {mineNavList.map((item,index)=>{
          return <View className="mine-item">
            <Image className="tab-icon" src={item.icon}></Image>
            <View className="tab-title">{item.title}</View>
          </View>
        })}
      </View>
    )

    const shopManager=(
      <View className="shop-manager">
        <View className="mine-link">
          <LinkItem icon={mineTabBankIcon} title="我的银行卡"  />
          <LinkItem borderTop={true} icon={mineTabRecordIcon} title="体现记录"/>
        </View>
        <View className="mine-link">
          <LinkItem icon={mineTabManageIcon} title="账号管理"  />
          <LinkItem borderTop={true} icon={mineTabAboutIcon} title="关于我们"/>
        </View>
      </View>
     
    );


    return (
      <View className="mine">
        <MineHeader></MineHeader>
        {mineContent}
        {shopManager}
        <AtButton className="login-out" onClick={this.loginOut} type='primary'>退出登录</AtButton>
      </View>
    );
  }
}
export default Mine;