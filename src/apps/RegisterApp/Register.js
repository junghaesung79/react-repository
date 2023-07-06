import React, { useState, } from 'react';
import { styled } from 'styled-components';

const Th = styled.th`
  width: 150px;
`
function RegisterApp() {
  const [user, setUser] = useState({
    id: '',
    pw: '',
    studentId: '',
    gender: '',
  })
  const [userList, setUserList] = useState([])
  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  function handleSubmit(e) {
    const resetUser = {
      id: '',
      pw: '',
      studentId: '',
      gender: '',
    }
    e.preventDefault();
    setUserList(element=>[
      ...element,
      user,
    ])
    setUser(resetUser)
  }
  return (
    <div style={{'margin': '30px'}}>
      <form>
        <input name='id' value={user.id} onChange={handleChange} />
        아이디
        <br/>
        <input name='pw' value={user.pw} onChange={handleChange} />
        비밀번호
        <br/>
        <input name='studentId' value={user.studentId} onChange={handleChange} />
        학번
        <br/>
        <select name='gender' value={user.gender} onChange={handleChange}
        style={{'marginLeft': '120px'}}>
          <option value=''>선택</option>
          <option value='남자'>남자</option>
          <option value='여자'>여자</option>
        </select>
        성별
        <button type='submit' onClick={handleSubmit} style={{'marginLeft': '40px'}}>등록</button>
      </form>
      <div>
        <div style={{'fontWeight': '700'}}>Users</div>
        <table style={{'border': '1px solid black'}}>
          <thead>
            <tr>
              <Th>id</Th>
              <Th>pw</Th>
              <Th>studentId</Th>
              <Th>gender</Th>
            </tr>
          </thead>
          <tbody>
            {userList.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.pw}</td>
                  <td>{element.studentId}</td>
                  <td>{element.gender}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RegisterApp;