import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Login from "./components/Login";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
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
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

export default AppWrapper;
