import React from "react";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LogoutScreen from "./screens/LogoutScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignIn from "./components/signIn/SignIn";

function App() {
  
  const user = '';
  return (
    <div>

      {
        user ? (
          <HomeScreen/>
        ):(
          <Router>
          <Routes>
          <Route path="/"  element={<LoginScreen/>}></Route>
          <Route path="/homescreen"  element={<HomeScreen/>}></Route>
          <Route path="/profile" element={<LogoutScreen/>}></Route>
          <Route path="/signup" element={<SignIn/>}></Route>
          </Routes> 
          </Router>

        )
      }
      

 
       
    </div>
  );
}

export default App;
