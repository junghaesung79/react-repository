import * as React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// 로그인 앱
import LoginApp from './apps/LoginApp/LoginApp';
import Login from './apps/LoginApp/routes/Login';
import SignUp from './apps/LoginApp/routes/SignUp';
// 예시 투두리스트
import ExampleTodoList from './apps/ExampleTodoList/ExampleTodoList';
// 함지 앱
import HamjiApp from './apps/HamjiApp/HamjiApp';
// 루트 카운터 앱
import LearnRoute from './apps/LearnRoute/LearnRoute';
import LearnRouteNum from './apps/LearnRoute/routes/LearnRouteNum';
// 유저 등록 앱
import RegisterApp from './apps/RegisterApp/Register';
// LearnApi 앱
import LearnApi from './apps/LearnApi/LearnApi';
// 투두리스트 실습 앱
import TrainingTodo from './apps/TrainingTodo/TrainingTodo';
// 고양이 렌더링 앱
import CatRendering from './apps/CatRendering/CatRendering';

function Init() {
  return (
    <div>
      <h1>해성 Apps</h1>
      <div>
        <Link to="loginapp">Login App</Link>
      </div>
      <div>
        <Link to="exampletodolist">Example Todo List</Link>
      </div>
      <div>
        <Link to="learnroute">Route & Counter App</Link>
      </div>
      <div>
        <Link to="hamjiapp">Hamji App</Link>
      </div>
      <div>
        <Link to="registerapp">Register App</Link>
      </div>
      <div>
        <Link to="learnapi">Learn Api App</Link>
      </div>
      <div>
        <Link to="trainingtodo">Training Todo App</Link>
      </div>
      <div>
        <Link to="catrendering">Cat Rendering App</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />} />
          {/* 로그인 앱 */}
          <Route path="loginapp" element={<LoginApp />} />
          <Route path="loginapp/login" element={<Login />} />
          <Route path="loginapp/signup" element={<SignUp />} />
          {/* 예시 투두리스트 */}
          <Route path="exampletodolist" element={<ExampleTodoList />} />
          {/* 루트 카운터 앱 */}
          <Route path="learnroute" element={<LearnRoute />} />
          <Route path="learnroute/:id" element={<LearnRouteNum />} />
          {/* 함지 앱 */}
          <Route path="hamjiapp" element={<HamjiApp />} />
          {/* 유저 등록 앱 */}
          <Route path="registerapp" element={<RegisterApp />} />
          {/* LearnApi 앱 */}
          <Route path="learnapi" element={<LearnApi />} />
          {/* 투두 실습 앱 */}
          <Route path="trainingtodo" element={<TrainingTodo />} />
          {/* 고양이 렌더링 앱 */}
          <Route path="catrendering" element={<CatRendering />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
