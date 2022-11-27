import React from 'react'
import './AppBtnArea.css'
import normal from './images/normal.svg'
import fire from './images/fire.svg'
import water from './images/water.svg'
import electric from './images/electric.svg'
import grass from './images/grass.svg'
import ice from './images/ice.svg'
import fighting from './images/fighting.svg'
import poison from './images/poison.svg'
import ground from './images/ground.svg'
import flying from './images/flying.svg'
import psychic from './images/psychic.svg'
import bug from './images/bug.svg'
import rock from './images/rock.svg'
import ghost from './images/ghost.svg'
import dragon from './images/dragon.svg'
import dark from './images/dark.svg'
import steel from './images/steel.svg'
import fairy from './images/fairy.svg'

function AppBtnArea() {
  return (
    <div className='App-btn-area'>
        <>
            <button className='type-btn normal'>
                <img src={normal} className='type-icon' alt='normal'/>
                <span className='type-text'>ノーマル</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：かくとう</span><br/>
                    <span className='no-effect'>無効：ゴースト</span>
                </span>
            </div>
            <div className='hr normal'></div>
        </>
        <>
            <button className='type-btn fire'>
            <img src={fire} className='type-icon' alt='fire'/>
            <span className='type-text'>ほのお</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：みず、じめん、いわ</span>
                    <br/> 0.5倍：ほのお、くさ、こおり、むし、はがね、フェアリー
                </span>
            </div>
            <div className='hr fire'></div>
        </>
        <>
            <button className='type-btn water'>
            <img src={water} className='type-icon' alt='water'/>
            <span className='type-text'>みず</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：でんき、くさ</span><br/> 
                    0.5倍：ほのお、みず、こおり、はがね
                </span>
            </div>
            <div className='hr water'></div>
        </>
        <>
            <button className='type-btn electric'>
            <img src={electric} className='type-icon' alt='electric'/>
            <span className='type-text'>でんき</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：じめん</span><br/> 
                    0.5倍：でんき、ひこう、はがね
                </span>
            </div>
            <div className='hr electric'></div>
        </>
        <>
            <button className='type-btn grass'>
            <img src={grass} className='type-icon' alt='grass'/>
            <span className='type-text'>くさ</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：ほのお、こおり、どく、ひこう、むし</span><br/> 
                    0.5倍：みず、でんき、じめん、くさ
                </span>
            </div>
            <div className='hr grass'></div>
        </>
        <>
            <button className='type-btn ice'>
            <img src={ice} className='type-icon' alt='ice'/>
            <span className='type-text'>こおり</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：ほのお、いわ、はがね、かくとう</span><br/> 
                    0.5倍：こおり
                </span>
            </div>
            <div className='hr ice'></div>
        </>
        <>
            <button className='type-btn fighting'>
            <img src={fighting} className='type-icon' alt='fighting'/>
            <span className='type-text'>かくとう</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：フェアリー、エスパー、ひこう</span><br/> 
                    0.5倍：むし、いわ、あく
                </span>
            </div>
            <div className='hr fighting'></div>
        </>
        <>
            <button className='type-btn poison'>
            <img src={poison} className='type-icon' alt='poison'/>
            <span className='type-text'>どく</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：じめん、エスパー</span><br/> 
                    0.5倍：くさ、かくとう、どく、むし、フェアリー
                </span>
            </div>
            <div className='hr poison'></div>
        </>
        <>
            <button className='type-btn ground'>
            <img src={ground} className='type-icon' alt='ground'/>
            <span className='type-text'>じめん</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：みず、くさ、こおり</span><br/> 
                    0.5倍：どく、いわ<br/>
                    <span className='no-effect'>無効：でんき</span>
                </span>
            </div>
            <div className='hr ground'></div>
        </>
        <>
            <button className='type-btn flying'>
            <img src={flying} className='type-icon' alt='flying'/>
            <span className='type-text'>ひこう</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：でんき、こおり、いわ</span><br/> 
                    0.5倍：くさ、かくとう、むし<br/>
                    <span className='no-effect'>無効：じめん</span>
                </span>
            </div>
            <div className='hr flying'></div>
        </>
        <>
            <button className='type-btn psychic'>
            <img src={psychic} className='type-icon' alt='psychic'/>
            <span className='type-text'>エスパー</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：むし、ゴースト、あく</span><br/> 
                    0.5倍：かくとう、エスパー
                </span>
            </div>
            <div className='hr psychic'></div>
        </>
        <>
            <button className='type-btn bug'>
            <img src={bug} className='type-icon' alt='bug'/>
            <span className='type-text'>むし</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：ほのお、ひこう、いわ</span><br/> 
                    0.5倍：くさ、かくとう、じめん
                </span>
            </div>
            <div className='hr bug'></div>
        </>
        <>
            <button className='type-btn rock'>
            <img src={rock} className='type-icon' alt='rock'/>
            <span className='type-text'>いわ</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：みず、くさ、かくとう、じめん、はがね</span><br/> 
                    0.5倍：ノーマル、ほのお、どく、ひこう
                </span>
            </div>
            <div className='hr rock'></div>
        </>
        <>
            <button className='type-btn ghost'>
            <img src={ghost} className='type-icon' alt='ghost'/>
            <span className='type-text'>ゴースト</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：ゴースト、あく</span><br/> 
                    0.5倍：どく、むし<br/>
                    <span className='no-effect'>無効：ノーマル、かくとう</span>
                </span>
            </div>
            <div className='hr ghost'></div>
        </>
        <>
            <button className='type-btn dragon'>
            <img src={dragon} className='type-icon' alt='dragon'/>
            <span className='type-text'>ドラゴン</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：こおり、ドラゴン、フェアリー</span><br/> 
                    0.5倍：ほのお、みず、でんき、くさ
                </span>
            </div>
            <div className='hr dragon'></div>
        </>
        <>
            <button className='type-btn dark'>
            <img src={dark} className='type-icon' alt='dark'/>
            <span className='type-text'>あく</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：かくとう、むし、フェアリー</span><br/> 
                    0.5倍：ゴースト、あく<br/>
                    <span className='no-effect'>無効：エスパー</span>
                </span>
            </div>
            <div className='hr dark'></div>
        </>
        <>
            <button className='type-btn steel'>
            <img src={steel} className='type-icon' alt='steel'/>
            <span className='type-text'>はがね</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：ほのお、かくとう、じめん</span><br/> 
                    0.5倍：ノーマル、くさ、こおり、ひこう、エスパー、むし、いわ、ドラゴン、はがね、フェアリー<br/>
                    <span className='no-effect'>無効：どく</span>
                </span>
            </div>
            <div className='hr steel'></div>
        </>
        <>
            <button className='type-btn fairy'>
            <img src={fairy} className='type-icon' alt='fairy'/>
            <span className='type-text'>フェアリー</span>
            </button>
            <div className='result-text-area'>
                <span className='result-text'>
                    <span className='x2'>2倍：どく、はがね</span><br/> 
                    0.5倍：かくとう、むし、あく<br/>
                    <span className='no-effect'>無効：ドラゴン</span>
                </span>
            </div>
            <div className='hr fairy'></div>
        </>
      </div>
  )
}

export default AppBtnArea