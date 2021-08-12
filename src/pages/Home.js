import React from "react";
import { useState } from "react";
import Question from "../components/Question";

function Home() {

    // 오름차순, 내림차순 관련 스테이트 훅
    const [isStream, setStream] = useState(true);

    const handleStream = () => {
        setStream(!isStream)
    }


  return (
    <div className="HomeOut">
      <div className="loginBtn">
          <div>로그인</div>
      </div>
      <div className="homeBody">
        <div className="filterOut">
          <div className="streamBtns">
            <div className="upStream">오름차순</div>
            <div className="downStream">내림차순</div>
          </div>
          <div className="filterBtn">
              <div></div>
              <div className="filterBtnName">필터</div>
          </div>
        </div>
        <Question />
        <div className="sponser">스폰서</div>
      </div>
    </div>
  );
}

export default Home;
