import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image,Input} from '@tarojs/components';
import './login.scss'
import {weChatLogin,loginByMobile,getLoginCode} from '@api/getData'
import {connect} from '@tarojs/redux'
import VerifyInput from '@util/verifyInput'
import localStorage from '@util/localStorage'
import utilStore from '@util/utilStore';
import * as util from '@util/util'
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
      },
      loginValid:false
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

  wechatLogin(){
    let verify=new VerifyInput();
    verify
    .data(this.state.loginParam.account).isRequired('请输入手机号').minLength(11)
    .data(this.state.loginParam.verCode).isRequired('请输入验证码').minLength(4)
    if(!verify.pass){
      Taro.showToast({title:'请输入手机号和验证码',icon:'none'})
      return;
    }
    let param=this.state.loginParam;
    param.proType='0';
    loginByMobile(param).then(res=>{
      console.log(res);
      utilStore.setItem(localStorage.loginUser,res.data)
      Taro.navigateTo({
        url:'/pages/mine/mine'
      })
    })
  }
  checkLoginValid(){
    let verify=new VerifyInput();
    verify.data(this.state.loginParam.account).isRequired('请输入手机号').minLength(11)
    .data(this.state.loginParam.verCode).isRequired('请输入验证码').minLength(4)
    this.setState({
      loginValid:verify.pass
    })
  }
  handleInput(valueType,e){
    let {loginParam}=this.state;
    loginParam[valueType]=e.detail.value;
    this.checkLoginValid();
    this.setState({
      loginParam
    })
  }

   sendLoginCode(){
    let verify=new VerifyInput();
    verify.data(this.state.loginParam.account).isRequired('请输入手机号').minLength(11)
    if(!verify.pass){
      util.taroShowToast({title:'请输入手机号'})
      return;
    }
    let param={
      account:this.state.loginParam.account
    }
    getLoginCode(param).then(res=>{
      let timeId=setInterval(()=>{
        if(this.state.count<=0){
          clearInterval(timeId);
          this.setState({
            count:60
          })
          return;
        };
        let count=this.state.count;
        this.setState({
          count:count-1
        })
      },1000)
    })

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
                <Input className="value" placeholder="请输入你的验证码" type="number" placeholderStyle="color:#ccc;" maxLength="4" onInput={this.handleInput.bind(this,'verCode')}></Input>
                {this.state.count==60? <View className="send-code" onClick={this.sendLoginCode}>获取验证码</View>: <View className="send-code">{this.state.count}s后重新获取</View>}
              </View>
          </View>
        </View>

        <View className={this.loginValid?['login-confirm','active']:['login-confirm']} onClick={this.wechatLogin}>立即登录</View>
      </View>
    );
  }
}
export default Login;