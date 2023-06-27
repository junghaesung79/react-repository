import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import './App.css';
import LoginApp from "./apps/LoginApp/LoginApp";
import Login from "./apps/LoginApp/routes/Login";
import SignUp from "./apps/LoginApp/routes/SignUp";
import BullsAndCows from "./apps/BullsAndCows/routes/BullsAndCows";
import Learn from "./apps/Learn/Learn";
// 함지 앱
import HamjiApp from "./apps/HamjiApp/HamjiApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>해성 Apps</h1>
        <div><Link to="loginapp">Login App</Link></div>
        <div><Link to="bac">Bulls and Cows App</Link></div>
        <div><Link to="learn">Learn</Link></div>
        <div><Link to="hamjiapp">HamjiApp</Link></div>
      </div>
    ),
  },
  // 로그인 앱
  {
    path: "loginapp",
    element: <LoginApp />,
  },
  {
    path: "loginapp/login",
    element: <Login />,
  },
  {
    path: "loginapp/signup",
    element: <SignUp />,
  },
  // 숫자야구
  {
    path: "bac",
    element: <BullsAndCows />,
  },
  // 예제 풀이, 배우기
  {
    path: "learn",
    element: <Learn />,
  },
  // 함지 앱
  {
    path: "hamjiapp",
    element: <HamjiApp />,
  },
])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
