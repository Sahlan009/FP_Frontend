import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import AboutUs from "./Pages/AbousUs";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/aboutUs" component={AboutUs}/>
    </div>
  );
}

export default App;
