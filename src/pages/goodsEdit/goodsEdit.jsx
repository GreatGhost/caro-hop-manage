import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './goodsEdit.scss';
import ActionList from '@components/actionList'

 class GoodsEdit extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
      optionsList:[
          {name:'操作日志'},
          {name:'分类列表'}
      ]
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        <ActionList list={this.state.optionsList} />
      </View>
    );
  }
}
export default GoodsEdit;