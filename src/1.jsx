
/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
// import Index from './pages/index'
import home from './pages/home/home'

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

  config = {
    pages: [
      'pages/home/home',
      // 'pages/index/index',
      'pages/collection/collection',      
      'pages/news/news',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: 'black',
      selectedColor: "red",
		  borderStyle: "black",
      backgroundColor: "#ffffff",
      list: [{
          pagePath: "pages/home/home",
          iconPath: "static/icon/home.png",
          selectedIconPath: "static/icon/home-on.png",
          text: "首页"
      },
      {
        pagePath: "pages/collection/collection",
        iconPath: "static/icon/shou.png",
        selectedIconPath: "static/icon/shou-on.png",
        text: "收藏"
    },
    {
      pagePath: "pages/news/news",
      iconPath: "static/icon/news.png",
      selectedIconPath: "static/icon/news-on.png",
      text: "消息"
  },
  {
    pagePath: "pages/user/user",
    iconPath: "static/icon/user.png",
    selectedIconPath: "static/icon/user-on.png",
    text: "我的"
}]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {/* <Index /> */}
        <home></home>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
