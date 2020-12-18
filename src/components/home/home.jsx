import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Picker, ScrollView } from '@tarojs/components'
import './home.scss'
import { a1, a2, a3 } from '../../assets'
import Hot from './hot/hot.jsx'
import Hotone from './hot/hot1.jsx'






export default class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgsrc: [a1, a2, a3],
      cates: [
        { id: 's1', name: '北京' },
        { id: 's2', name: '上海' },
        { id: 's3', name: '深圳' },
        { id: 's4', name: '杭州' },
        { id: 's5', name: '赣州' },
        { id: 's6', name: '珠海' },
        { id: 's7', name: '东莞' },
        { id: 's8', name: '南京' }

      ],
      // 定义初始id
      tid: "s1",
      tidx:0,
      dm: { name: "北京" }

    }
  }
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }
  //分类事件
  cateTap(idx, ele) {
    console.log(1111111, ele);
    this.setState({
      tid: "s" + idx,
      tidx: idx,
      dm: ele
    })
    // setTimeout(()=>{
    //   console.log("222222",this.state.dm);
    // },2000)


  }
  //时间
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value,
      dateSel2: e.detail.value

    })
  }


  render() {

    const { imgsrc } = this.state
    return (
      <View className='home'>

        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          vertical
          autoplay>
          {
            imgsrc.map((ele, idx) => {
              return (
                <SwiperItem key={idx}>
                  <View className='demo-text-1'><image src={ele}></image></View>
                </SwiperItem>
              )

            })


          }
        </Swiper>


        <View className="soso">
          <Input value="深圳市" className="put"></Input>


          {/* time 时间*/}
          <View className="time">
            <View >
              <Picker mode='date' onChange={this.onDateChange}>
                {this.state.dateSel || '2019-11-29'}
              </Picker>
            </View>

            <View className="txt">
              -1晚-
          </View>

            <View>
              <Picker mode='date' >
                {'2019-12-01'}
              </Picker>
            </View>
          </View>
          {/* 按钮 */}
          <Button hoverClass="but1" className="but">查找房源</Button>

        </View>
        <View className="kong"></View>
        <View className="img1">
          <Image src="https://z1.muscache.cn/pictures/hongbao/toolbox/original/006b25ea-9472-417b-8b48-4f3b3a1d1fca.png"> </Image>
          <Button hoverClass="but2" className="but1">点击探索</Button>

        </View>

        {/* 222222222222 */}
        <View className="txt1">
          <Text>冬季特惠房源</Text>
          <Text>特惠房源低至7折</Text>

        </View>


        <ScrollView
          className='scrollview'
          scrollWithAnimation
          scrollX
          scrollIntoView={this.state.tid}
        >
          {
            this.state.cates.map((ele, idx) => {

              return (
                <View
                  key={ele.id}
                  id={ele.id}
                  onTap={this.cateTap.bind(this, idx, ele)}
                  className={this.state.tidx === idx && "on"}

                >{ele.name}</View>
              )

            })
          }
        </ScrollView>

        <Hot  tidx={this.state.tidx} dm={this.state.dm} />
        <View className="tab_bottom">显示更多{this.props.dm.name}房源</View>

        <View className='fx'>
          发现附近好房源
        </View>
        <Hotone />






      </View>
      


    )
  }
}
