import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {

  // 홈페이지 여부를 갖고 상단 내비바 조절
  const [isHome, setHome] = useState(true);

  const handleIsHome = () => {
    setHome(!isHome);
  }

  return (
    <>
      <BrowserRouter>
      <Nav isHome={isHome}></Nav>
        <Switch>
          <Route path="/detail" render={() => <Detail />} handleIsHome={handleIsHome} />
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
