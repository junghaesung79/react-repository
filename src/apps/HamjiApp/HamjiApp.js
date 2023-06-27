import React, { useState, useRef, useEffect } from 'react';
import './HamjiApp.css'

// 한기대 생활관 앱(함지관 이름을 따서 함지앱)
// 

function HamjiApp() {

  return (
    <div className='container'>
      <div className='hamji-navigation'>
        <div className='hamji-navigation-buttons'>
          <div className='hamji-navigation-buttons-logo hamji-navigation-button'>Hamji</div>
          <div className='hamji-navigation-buttons-main'>
            <div className='hamji-navigation-buttons-main-notification hamji-navigation-button'>공지사항</div>
            <div className='hamji-navigation-buttons-main-bulletin hamji-navigation-button'>게시판</div>
            <div className='hamji-navigation-buttons-main-cat hamji-navigation-button'>고양이</div>
            <div className='hamji-navigation-buttons-main-information hamji-navigation-button'>정보</div>
          </div>
          <div className='hamji-navigation-buttons-more hamji-navigation-button'>더보기</div>
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