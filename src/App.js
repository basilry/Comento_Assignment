import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";

function App() {
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

  // 퀘스천 게시물 아이디 대응 되는 상태 관리
  const [tempData, setTemp] = useState([]);

  const handleTempData = (data) => {
    setTemp(data);
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
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home handleTempData={handleTempData} handlePopup={handlePopup} />
            )}
          />
        </Switch>
        {isPopup ? <Filter handlePopup={handlePopup} /> : <></>}
      </BrowserRouter>
    </>
  );
}

export default App;
