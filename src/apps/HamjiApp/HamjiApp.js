import React, { useState, useRef, useEffect } from 'react';
import './HamjiApp.css'
import styled from 'styled-components';

// 한기대 생활관 앱(함지관 이름을 따서 함지앱)

// navigation styled components
const NVButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;`
const NVContainer = styled.div`
  width: 220px;
  padding: 12px 12px 20px 12px;
  position: relative;

  @media (max-width: 1280px) {
    width: 48px;
  }
  @media (max-width: 720px) {
    display: none;
  }`
const NVButtonBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  & > .NV-logo {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;  
  }
  & > .NV-more {
    height: 35px;
    position: absolute;
    bottom: 6px; 
    @media (max-height: 372px) {
      position: static;
    }
  }`
const NVMainButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > * {
    width: 100%;
    height: 35px; 
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 7px;
  }`
const NVIconImg = styled.img`
  width: 30px;
  height: 30px;`
const NVButtonWord = styled.p`
  @media (max-width: 1280px) {
    display: none;
  }`

// navigation components
function NVLinkButton({children, src, className}) {
  return(
    <NVButton className={className}>
      <NVIconImg src={src} />
      <NVButtonWord>{children}</NVButtonWord>
    </NVButton>
  )
}
function Navigation() {
  return (
    <NVContainer>
      <NVButtonBox>
        <NVLinkButton className={'NV-logo'} src={'./images/bulletin.png'}>Hamji</NVLinkButton>
        <NVMainButtonBox>
          <NVLinkButton src={'./images/bulletin.png'}>공지사항</NVLinkButton>
          <NVLinkButton src={'./images/bulletin.png'}>게시판</NVLinkButton>
          <NVLinkButton src={'./images/bulletin.png'}>고양이</NVLinkButton>
          <NVLinkButton src={'./images/bulletin.png'}>정보</NVLinkButton>
        </NVMainButtonBox>
        <NVLinkButton className={'NV-more'} src={'./images/bulletin.png'}>더보기</NVLinkButton>
      </NVButtonBox>
    </NVContainer>
  )
}

// main styled components
const MainContainer = styled.div``
const MCContainer = styled.div``
const MSContainer = styled.div``
// main components

// 앱
function HamjiApp() {

  return (
    <div className='container'>
      <Navigation />
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