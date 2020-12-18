import Taro, { Component, vibrateShort } from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
import {hoteList1} from '../../../assets/data1'
import './hot.scss'
import { AtRate } from 'taro-ui'

class hotone extends Component {
  constructor(props){
    super(props);        
};
    render() {
  
        return (

          <View className="hot">
             
            {
            hoteList1[0].map(ele=>{
              return(
                <View className="hot_one" key={ele.id}>
                <View className="hot_img"><image src={ele.img}></image></View>
                <View className="hot_text">
                  <View className="tx"><Text >
                  {
                  ele.a}
                  </Text></View>
                  <View  className="tx1"><Text>
                  {ele.name}
                  </Text></View>
                  <View  className="tx2"><Text>
                  {ele.money}
                  </Text></View>
                  <View  className="tx3">
                    <AtRate size="10" value={ele.el} />
                    </View>
  
                  
                  
                </View>
              </View>
              )
            })
              
            }

         

         </View>

        )
    }
}

export default hotone 
