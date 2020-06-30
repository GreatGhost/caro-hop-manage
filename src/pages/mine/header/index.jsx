import Taro , { Component } from '@tarojs/taro';
import { View,Image} from '@tarojs/components';
import * as userConfig from '../../../util/userConfig'
import * as util from '../../../util/util'
import './index.scss';
import arrowIcon from '@assets/images/arrow.png'
class MineHeader extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    userInfo:null
  }

  componentWillMount () {
    if(!userConfig.isLogin()){
        Taro.reLaunch({
            url:'/pages/login/login'
        })
        return;
    }
    let userInfo=userConfig.getUserInfo();
    userInfo.accountStr=util.handleSpancePhone(userInfo.account)
    this.setState({
      userInfo:userInfo
    })
  }
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="mine-header">
        <View className="default-img"></View>
        <View className="user-content">
          <View className="user-name">{this.state.userInfo.userName}</View>
          <View className="accout">{this.state.userInfo.accountStr}</View>
        </View>
        <Image className="arrow" src={arrowIcon}></Image>
      </View>
    );
  }
}
export default MineHeader