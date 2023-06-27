import React, { useState, useRef, useEffect } from 'react';
import './HamjiApp.css'

function HamjiApp() {

  return (
    <div className='container'>
      <div className='hamji-navigation'>
        <div className='hamji-navigation-logo'></div>
        <div className='hamji-navigation-buttons'></div>
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