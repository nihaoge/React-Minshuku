import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './star.scss'


export default class star extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '收藏'
  }


  render () {
    return (
      <View className='star'>
        <Text>收藏</Text>
      </View>
    )
  }
}
