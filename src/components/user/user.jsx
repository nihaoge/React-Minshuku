import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'




export default class user extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '站南民宿'
  } 

  getInfo(res){
    console.log(res);
    
  }
  componentDidMount() {
   
    this.taro.getWeRunData(
      {
        success(res) {
            const encryptedData = res.encryptedData
        }
      }
    )
    
  }
  

  render () {

    return (
      <View className='star'>
        <View className='user'> 
        <Button open-type="getUserInfo" ongetuserinfo={this.getInfo.bind(this)}  className="text_box">注册或者登入</Button>
        <View className="img_box">  <Image src="https://z1.muscache.cn/pictures/f904acba-6811-4d87-be3e-4656a3423135.jpg"> </Image></View>
        </View>
      </View>
    )
  }
}
