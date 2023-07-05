import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

function Testt() {
  return (
    <div>
    something test
    </div>
  )
}

const Button = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: red;
  background-color: white;
  border: 1px solid red;
  `
function Test() {
  const [list, setList] = useState([
    {id: 0, checked: false, content: '체크리스트'}, 
    {id: 1, checked: true, content: 'index, check, content'},
  ])
  const tempList = list
  const divRef = useRef();
  function handleCheckbox(e) {
    const listIndex = e.target.value;
    tempList[listIndex].checked = !tempList[listIndex].checked
    setList(tempList);
  }
  function handleRemove(e) {
    e.preventDefault();
    const target = e.target.parentNode;
    for (let i = 0; i < target.parentNode.childNodes.length; i++) {
      if(target.parentNode.childNodes[i] === target) {
        tempList.splice(i, 1)
        target.parentNode.removeChild(target);
        break;
      }
    }
    arrangeId();
  }
  function arrangeId() {
    divRef.current.childNodes.forEach((node, index)=>{
      tempList[index].id = index;
      divRef.current.childNodes[index].key = index;
    });
  }

  const inputRef = useRef();
  function handleAdd(e) {
    e.preventDefault();
    const contentToAdd = inputRef.current.value;
    tempList.push({id: tempList.length, checked: false, content: contentToAdd});
    setList(tempList);
    divRef.current.append(
    
    
    <div key={tempList.length}>
      <input type="checkbox" value={tempList.length} onClick={(e)=>handleCheckbox(e)}/>
      {contentToAdd}
      <Button type="button" onClick={(e)=>handleRemove(e)}>x</Button>
    </div>
    
    
    )
    console.log(tempList);
    console.log(list);
  }
  useEffect(() => {
    divRef.current.childNodes.forEach((node, index)=>{
      node.childNodes[0].checked = list[index].checked;
    })
  }, []);
  return (
    <div>
      <div ref={divRef} style={{margin: '10px'}}>
        {list.map((element, index) => {
          return (
            <div key={index}>
              <input type="checkbox" value={index} onClick={(e)=>handleCheckbox(e)}/>
              {element.content}
              <Button type="button" onClick={(e)=>handleRemove(e)}>x</Button>
            </div>
          )
        })}
      </div>
      <form>
        <input ref={inputRef} style={{width: '230px'}}/>
        <button type="submit" onClick={(e)=>handleAdd(e)}>add</button>
      </form>
    </div>
  )
}
export default Test;