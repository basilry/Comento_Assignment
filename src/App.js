import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import DummyQuestions from "./DummyDatas/DummyQuestions";

function App() {
  const [datas, setDatas] = useState([]);
  const [replys, setReplys] = useState(2);

  useEffect(() => {
    setDatas(DummyQuestions);
  }, []);
  console.log(datas)

  // 홈페이지 여부를 갖고 상단 내비바 조절
  const [isHome, setHome] = useState(true);
  const [isPopup, setPopup] = useState(false);

  const handleIsHome = () => {
    setHome(!isHome);
  };

  const handlePopup = () => {
    setPopup(!isPopup);
    console.log("pop");
  };

  return (
    <>
      <BrowserRouter>
        <Nav isHome={isHome}></Nav>
        <Switch>
          <Route
            path="/detail/:id"
            render={() => <Detail />}
            handleIsHome={handleIsHome}
            datas={datas}
            replys={replys}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handlePopup={handlePopup}
                datas={datas}
                replys={replys}
              />
            )}
          />
        </Switch>
        {isPopup ? <Filter handlePopup={handlePopup} /> : <></>}
      </BrowserRouter>
    </>
  );
}

export default App;
