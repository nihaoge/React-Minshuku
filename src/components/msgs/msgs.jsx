import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './msgs.scss'


export default class msgs extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '信息'
  }


  render () {
    return (
      <View className='home'>
        <Text>信息</Text>
      </View>
    )
  }
}
