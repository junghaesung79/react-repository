import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

const list = [1, 2, 3, 4, 5, 6];
function Test() {
  function btn() {
    const nextList = list.map((elem) => {
      if (elem !== 3) {
        return elem;
      } else {
      }
    })
    console.log(nextList);
  }
  return (
    <div>
      <button onClick={btn}>a</button>
    </div>
  )
}
export default Test;