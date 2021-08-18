import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import DummyQuestions from "./DummyDatas/DummyQuestions";

function App() {

  // 서버에서 피드 데이터를 가져올 때
  // const [datas, setDatas] = useState([]);
  // axios.get("https://problem.comento.kr/api/list")
  // .then(res => {
  //   setDatas(res.data)
  // })
  // .catch(err => console.log(err))
  // 하단 렌더링 부분 DummyQuestions 부분 datas로 변경


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
            render={() => <Detail DummyQuestions={DummyQuestions} />}
            handleIsHome={handleIsHome}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home handlePopup={handlePopup} />
            )}
          />
        </Switch>
        {isPopup ? <Filter handlePopup={handlePopup} /> : <></>}
      </BrowserRouter>
    </>
  );
}

export default App;
