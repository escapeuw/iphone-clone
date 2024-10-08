import { useState } from 'react';
import './App.css';
import '../src/assets/sky.jpeg';
import Calculator from './calculator/calculator.jsx';
import Weather from './weather/weather.jsx';
import YouTube from './youtube/youtube.jsx'
import React from 'react';
import msg from "./assets/messageicon.png";
import appstore from "./assets/appstoreicon.png";
import photo from "./assets/photo.png";
import safari from "./assets/safari.png";
import calc from "./assets/calculator.png";
import notes from "./assets/notes.png";
import calender from "./assets/calender.png";
import cam from "./assets/camera.png";
import setting from "./assets/setting.png";
import map from "./assets/map.png";
import mail from "./assets/mail.png";
import weat from "./assets/weather.png";
import clock from "./assets/clock.png";
import stocks from "./assets/stock.png";
import music from "./assets/music.jpeg";
import yout from "./assets/youtube.png";
import pho from "./assets/phone.png";
import insta from "./assets/instagram.jpeg";
import wallet from "./assets/wallet.png";



const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();


function Phone() {
  const [current, setCurrent] = useState('home');
  const [homeButton, setHomeButton] = useState(false);

  // displaying time in actual format //
  function handleMinutes(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  const handleCalculator = () => {
    setCurrent('calculator');
    setHomeButton(true);
  }

  const handleYouTube = () => {
    setCurrent('youtube');
    setHomeButton(true);
  }

  const handleNotes = () => {
    setCurrent('notes');
    setHomeButton(true);
  }

  const handleWeather = () => {
    setCurrent('weather');
    setHomeButton(true);
  }


  const handleHome = () => {
      setCurrent('home');
      setHomeButton(false);
  }

    return(
      <div>
        <div className="iPhone">
          {/* change screen background depending on apps*/}
          <div className="screen" style={(current === 'calculator' || current === 'youtube') ? {background: "black"} 
          : current === 'notes' ? {background: "beige"} 
          : current === 'weather' ? {backgroundImage: 'url(https://i.pinimg.com/736x/ee/c4/16/eec4169c5e89189f59d86f21829e0454.jpg)'} : {}}>
              <div className="topBar" style={current === "notes" ? {color: "black"} : {}} onClick={homeButton ? handleHome : undefined}>
              <span className="clock">{hours}:{handleMinutes(minutes)}</span>
              <span className="icons">
                <i className="fa-solid fa-signal"></i>
                <i className="fa-solid fa-wifi"></i>
                <i className="fa-solid fa-battery-full"></i>
                </span> 
              </div>
            <div id="contentContainer">
              {current === 'home' && <Apps youtube={handleYouTube} weather={handleWeather} calculator={handleCalculator} notes={handleNotes} />}
              {current === 'calculator' && <Calculator />}
              {current === 'youtube' && <YouTube />}
              {current === 'notes' && <Notes />}
              {current === 'weather' && <Weather />}
           </div>
          </div>
         </div>
      </div>
    )
}


function Apps(props) {

    return(
      <div>
        <div className="appContainer">
              <div className="imgText"><img src={msg} />
                Messages
              </div>
              <div className="imgText">
              <img src={appstore} />
                AppStore
              </div>
              <div className="imgText">
              <img src={photo} />
                Photos
              </div>
              <div className="imgText">
            <img src={safari} />
                Safari
              </div>
              <div className="imgText">
            <img onClick={props.calculator} src={calc} />
                Calculator
              </div>
              <div className="imgText">
            <img onClick={props.notes} src={notes} />
                Notes
              </div>
              <div className="imgText">
            <img src={calender} />
                Calender
              </div>
              <div className="imgText">
            <img src={cam} />
                Camera
              </div>
              <div className="imgText">
            <img src={setting} />
                Settings
              </div>
              <div className="imgText">
            <img src={map} />
                Maps
              </div>
              <div className="imgText">
            <img src={mail} />
                Mail
              </div>
              <div className="imgText">
            <img onClick={props.weather} src={weat} />
                Weather
              </div>
              <div className="imgText">
            <img src={clock} />
                Clock
              </div>
              <div className="imgText">
            <img src={stocks} />
                Stocks
              </div>
              <div className="imgText">
                <img src={wallet} />
                Wallet
              </div>
            </div>
            <div className="dockContainer appContainer">
              <img src={music} />
              <img src={yout} onClick={props.youtube} />
              <img src={pho} onClick={props.phonecall} />
              <img src={insta} />
            </div>
      </div>)
}

export default Phone
