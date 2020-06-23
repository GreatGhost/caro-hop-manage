import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image,Input} from '@tarojs/components';
import './login.scss'
import {weChatLogin} from '@api/getData'
import {connect} from '@tarojs/redux'
import localStorage from '../../util/localStorage'
import utilStore from '../../util/utilStore';
import userIcon from './assets/login-user.png'
import codeIcon from './assets/login-code.png'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  saveUserInfo () {
    dispatch(saveUserInfo())
  }
}))
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count:60,
      loginParam:{
        account:'',
        verCode:''
      }
    }
  }

   config = {
       navigationBarTitleText: '登录'
  }

    getWxOpenId(){
    Taro.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            let codeParam={
                jsCode:res.code,
                proType:'0'
            }
             weChatLogin(codeParam).then(res=>{
              utilStore.setItem(localStorage.loginSessionInfo,{openId:res.data.openId})
             });
        }

    }
      })
  }

  handleInput(valueType,e){
    let {loginParam}=this.state;
    loginParam[valueType]=e.detail.value;
    this.setState({
      loginParam
    })
  }

  sendLoginCode(){
    let timeId=setInterval(()=>{
      if(this.state.count<=0){clearInterval(timeId);return};
      let count=this.state.count;
      this.setState({
        count:count-1
      })
    },1000)
  }

  addCount(){
    this.setState({
      count:this.state.count+1
    })
  }
  componentWillMount () {
      
  }
  componentDidMount () {
    this.getWxOpenId()
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="login">
        <View className="login-title">欢迎登录新船帮</View>

        <View className="login-form">
          <View className="login-form-item">
            <Image className="login-input-icon" src={userIcon}></Image>
            <View className="form-value"><Input placeholderStyle="color:#ccc;" type="number" onInput={this.handleInput.bind(this,'account')} placeholder="请输入你的手机号" className="value"></Input></View>
          </View>
          <View className="login-form-item">
            <Image className="login-input-icon" src={codeIcon}></Image>
            <View className="form-value">
              <Input className="value" placeholder="请输入你的验证码" type="number" placeholderStyle="color:#ccc;" maxLength="4" onInput={this.handleInput}></Input>
                {this.state.count==60? <View className="send-code" onClick={this.sendLoginCode}>获取验证码</View>: <View className="send-code">{this.state.count}s后重新获取</View>}
              </View>
          </View>
        </View>

        <View className="login-confirm" onClick={this.addCount}>立即登录</View>
      </View>
    );
  }
}
export default Login;