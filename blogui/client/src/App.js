import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Chat from "./chatsection/Chat";
import Join from "./chatsection/Join";
import Winnerbar from "./pages/winnerbar/Winnerbar";
import About from "./pages/about/About";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/winner">{user ? <Winnerbar /> : <Register />}</Route>
        <Route path="/about"><About/></Route>
        
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path='/join'> <Join/> </Route>
        <Route path='/chat' > <Chat/> </Route>
      </Switch>
    </Router>
  );
}

export default App;