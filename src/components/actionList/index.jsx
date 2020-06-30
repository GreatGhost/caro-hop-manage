import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import PropTypes from 'prop-types';
class ActionList extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {
    console.log(this);
  }
  componentDidMount () {
     
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  handleCancel(){

  }
   refAction=(node)=>this.refAction=node


  render() {
    const {list}=this.props;
    if(!list)return;
    const actionList=(
        <View className="action-list" ref={this.refAction}>
            {list.map((item,index)=>{
                return <View className="action-list-item" key={`action-list-key${index}`}>{item.name}</View>
            })}
        </View>
    ); 
    
    return (
      <View className="action-list-wrapper">
          <View className="title">操作</View>
          {actionList}
          <View className="cancel" onClick={this.handelCancel}>取消</View>
      </View>
    );
  }
}
ActionList.propTypes = {
    name: PropTypes.string,
    list:PropTypes.array
};

export default ActionList;
