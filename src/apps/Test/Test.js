import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

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
  const [inputContent, setInputContent] = useState('')
  const divRef = useRef();
  function handleCheckbox(e) {
    const listIndex = e.target.value;
    list.map((item) => {
      item.checked = !item.checked;
    })
  }
  function handleRemove(e) {
    e.preventDefault();
    const target = e.target.parentNode;
    for (let i = 0; i < target.parentNode.childNodes.length; i++) {
      if(target.parentNode.childNodes[i] === target) {
        setList(
          list.filter(element => element.id !== i)
        );
        break;
      }
    }
  }

  function handleAdd(e) {
    e.preventDefault();
    setList(list => [...list, {id: list.length, checked: false, content: inputContent}]);
    setInputContent('');
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
              <input type="checkbox" value={element.id} onClick={handleCheckbox}/>
              {element.content}
              <Button type="button" onClick={handleRemove}>x</Button>
            </div>
          )
        })}
      </div>
      <form>
        <input style={{width: '230px'}} value={inputContent} onChange={e => setInputContent(e.target.value)}/>
        <button type="submit" onClick={handleAdd}>add</button>
      </form>
    </div>
  )
}
export default Test;