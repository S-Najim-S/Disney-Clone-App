import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Login from "./components/Login";
import Detail from "./components/Detail";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "/home/detail/:id", element: <Detail /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <App />
    </Router>
  );
};

export default AppWrapper;
