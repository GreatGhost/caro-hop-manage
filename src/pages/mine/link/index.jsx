import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import * as util from '@util/util';
import './index.scss';
import arrowIcon from '@assets/images/arrow.png'
class LinkItem extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  //事件
  handleItemClick(){
    const {linkPath}=this.props;

    if(!linkPath){
      util.taroShowToast({
        title:'传入路径值',
        icon:'none'
      })
      return;
    }
  }

  componentWillMount () {
    console.log(this)
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
      <View className={this.props.borderTop?['link-item','border-top']:['link-item']} onClick={this.handleItemClick.bind(this)}>
        <Image className="link-icon" src={this.props.icon}></Image>
        <View className="link-title">{this.props.title}</View>
        <Image className="arrow" src={arrowIcon}></Image>
      </View>
    );
  }
}
export default LinkItem;