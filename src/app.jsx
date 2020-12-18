import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
// import Index from './pages/index'
import Home from './components/home/home'
import 'taro-ui/dist/style/index.scss'




import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'components/user/user',
      'components/home/home',
      // 'pages/index/index',
      'components/star/star',
      'components/msgs/msgs'
     

    ],
  
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "red",
      selectedColor: "#FF0000",
      borderStyle: "black",
      backgroundColor: "#ffffff",
      list: [{
        pagePath: 'components/home/home',
        iconPath: "static/icon/首页.png",
        selectedIconPath: "static/icon/首页 (1).png",
        text: "首页"
      }, {
        pagePath:  'components/star/star',
        iconPath: "static/icon/收藏.png",
        selectedIconPath: "static/icon/收藏 (1).png",
        text: "收藏"
      },
      {
        pagePath: 'components/msgs/msgs',
        iconPath: "static/icon/聊天.png",
        selectedIconPath: "static/icon/聊天 (1).png",
        text: "消息"
      }
      ,
      {
        pagePath: 'components/user/user',
        iconPath: "static/icon/我的.png",
        selectedIconPath: "static/icon/我的 (1).png",
        text: "我的"
      }
    ]
    }
  }


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
