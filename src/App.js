import './App.css'
import AppBtnArea from './AppBtnArea';
import { Timeline } from 'react-twitter-widgets';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    if(window.twttr){
      window.twttr.widgets.load()
    }
  },[])
  return (
    <div className="App">
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
