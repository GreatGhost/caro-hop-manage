import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import './index.scss'
export default class TabItem extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}
  render() {
    return (
      <View className="tab-item">
        <Image className="icon" src={this.props.icon}></Image>
        <View className="title">{this.props.title}</View>
      </View>
    );
  }
}
export default TabItem;