import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './home.scss'


export default class home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home'>
        <Text>我的1</Text>
      </View>
    )
  }
}
