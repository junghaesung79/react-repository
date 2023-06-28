import React, { useState, useRef, useEffect } from 'react';
import './HamjiApp.css'
import Logo from './components/NavigationButtons/Logo'
import Notification from './components/NavigationButtons/Notification'
import Bulletin from './components/NavigationButtons/Bulletin'
import Cat from './components/NavigationButtons/Cat'
import Information from './components/NavigationButtons/Information'
import More from './components/NavigationButtons/More'

// 한기대 생활관 앱(함지관 이름을 따서 함지앱)
// 

function HamjiApp() {

  return (
    <div className='container'>
      <div className='hamji-navigation'>
        <div className='hamji-navigation-buttons'>
          <Logo />
          <div className='hamji-navigation-buttons-main'>
            <Notification />
            <Bulletin />
            <Cat />
            <Information />
          </div>
          <More />
        </div>
      </div>
      <div className='hamji-main'>  
        <div className='hamji-main-content'>
          <div className='hamji-main-content-header'></div>
          <div className='hamji-main-content-contents'></div>
        </div>
        <div className='hamji-main-sider'>
          <div className='hamji-main-sider-header'></div>
          <div className='hamji-main-sider-header'></div>
        </div>
      </div>
    </div>
  );
}

export default HamjiApp;