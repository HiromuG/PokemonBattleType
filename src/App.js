import './App.css'
import AppBtnArea from './AppBtnArea';
import { Timeline } from 'react-twitter-widgets';
import { useEffect } from 'react';
import bgimg from'./images/pokeball.png';

function App() {
  useEffect(()=>{
    if(window.twttr){
      window.twttr.widgets.load()
    }
  },[])
  window.onscroll = ()=>{
    let topDistance = document.documentElement.scrollTop / 5;
    document.getElementById('bgimg').style.transform='rotate('+ topDistance +'deg)'
  }
  return (
    <div className="App">
      <img className='bgimg' alt='' src={bgimg} id='bgimg'/>
      <div className='App-title'>ポケモン<br />防御側タイプ相性表</div>
      <div className='twittertimeline'>
        Tweets from @Pokemon_cojp
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Pokemon_cojp'
          }}
          options={{
            id: 'profile:Pokemon_cojp',
            tweetLimit: '8',
          }}
        />
      </div>
      <AppBtnArea />
    </div>
  );
}

export default App;
