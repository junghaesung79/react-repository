import * as React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import './App.css';
// 로그인 앱
import LoginApp from "./apps/LoginApp/LoginApp";
import Login from "./apps/LoginApp/routes/Login";
import SignUp from "./apps/LoginApp/routes/SignUp";
// 숫자야구 앱
import BullsAndCows from "./apps/BullsAndCows/routes/BullsAndCows";
// 함지 앱
import HamjiApp from "./apps/HamjiApp/HamjiApp";
// 루트 카운터 앱
import LearnRoute from "./apps/LearnRoute/LearnRoute";
import LearnRouteNum from "./apps/LearnRoute/routes/LearnRouteNum";
// 유저 등록 앱
import RegisterApp from "./apps/RegisterApp/Register";
// 테스트하기 앱
import Test from "./apps/Test/Test";

function Init() {
  return (
    <div>
      <h1>해성 Apps</h1>
      <div><Link to="loginapp">Login App</Link></div>
      <div><Link to="bac">Bulls and Cows App</Link></div>
      <div><Link to="learnroute">Route & Counter App</Link></div>
      <div><Link to="hamjiapp">Hamji App</Link></div>
      <div><Link to="registerapp">Register App</Link></div>
      <div><Link to="test">Test App</Link></div>
    </div>
  )
}

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Init />}></Route>
            {/* 로그인 앱 */}
            <Route path="loginapp" element={<LoginApp />}></Route>
            <Route path="loginapp/login" element={<Login />}></Route>
            <Route path="loginapp/signup" element={<SignUp />}></Route>
            {/* 숫자야구 앱 */}
            <Route path="bac" element={<BullsAndCows />}></Route>
            {/* 루트 카운터 앱 */}
            <Route path="learnroute" element={<LearnRoute />}></Route>
            <Route path="learnroute/:id" element={<LearnRouteNum />}></Route>
            {/* 함지 앱 */}
            <Route path="hamjiapp" element={<HamjiApp />}></Route>
            {/* 유저 등록 앱 */}
            <Route path="registerapp" element={<RegisterApp />}></Route>
            {/* 테스트하기 앱 */}
            <Route path="test" element={<Test />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
