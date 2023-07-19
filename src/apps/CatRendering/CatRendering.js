import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import axios from "axios";
import useStore from './store';

const AppContainer = styled.div`
  width: 100%;
  height: 3000px;
`
const CatImageRowBox = styled.div`
  display: flex;
  flex-direction: row;
`

function CatImageRow() {
  // const [catSrc, setCatSrc] = useState([null, null, null]);
  // catSrc.map((current, index) => {
  //   axios({
  //     method: 'get',
  //     url: 'https://api.thecatapi.com/v1/images/search',
  //     responseType: 'stream'
  //   })
  //   .then((response) => {
  //     const catUrl = response.data[0].url
  //     setCatSrc(current => {
  //       const temp = current;
  //       temp[index] = catUrl;
  //       return temp;
  //     })
  //   })
  //   .catch((error) => console.log(error));
  // })  고양이 이미지 url 3개씩 배열로 생성
  const [catSrc30, setCatSrc30] = useState([]);
  async function fetchCatSrc() {
    const temp = [];
    // for (let i = 0; i < 30; i++) {
    //   let promise = (temp.push(
    //     axios({
    //       method: 'get',
    //       url: 'https://api.thecatapi.com/v1/images/search?size=full',
    //       responseType: 'stream'
    //     })
    //     .then((response) => {
    //       return response.data[0].url
    //     })
    //     .catch((error) => console.log(error))
    //   ))
    //   setCatSrc30(() => {
    //     let result = await promise;
    //     return temp
    //   })
    // }
  }
  setCatSrc30((current) => {
    const temp = current;
    
    console.log(temp);
    // return temp;
  })
  // 첫 렌더링 시 고양이 이미지 url 30개 배열에 담
  return (
    <>
      <CatImageRowBox>
        
      </CatImageRowBox>
    </>
  )
}

function CatImageContainer() {
  return (
    <>
      <CatImageRow />
    </>
  )
}

function NavigationButton() {
  return (
    <>
      sadf
    </>
  )
}

function CatRendering() {
  return (
    <>
      <AppContainer>
        <CatImageContainer />
        <NavigationButton />
      </AppContainer>
    </>
  )
}

export default CatRendering;