import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import LoginApp from "./apps/LoginApp/routes/LoginApp";
import BullsAndCows from "./apps/BullsAndCows/routes/BullsAndCows";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>해성 Apps</h1>
        <div><Link to="login">Login App</Link></div>
        <div><Link to="bac">Bulls and Cows App</Link></div>
      </div>
    ),
  },
  {
    path: "login",
    element: <LoginApp />,
  },
  {
    path: "bac",
    element: <BullsAndCows />,
  },
])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
