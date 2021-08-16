import React, { useEffect } from "react";
import { useState } from "react";
import Question from "../components/Question";
import Sponser from "../components/Sponser";

function Home({ datas, handlePopup }) {
  // {id, title, contents, now, replys, handlePopup}
  console.log(datas)

  // 오름차순, 내림차순 관련 스테이트 훅
  const [isStream, setStream] = useState(true);

  const handleStream = () => {
    setStream(!isStream);
  };

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
            <div className="filterBtnName" onClick={handlePopup}>
              필터
            </div>
          </div>
        </div>
        {
        // count % 4 === 0 ? (
        //   <Sponser />
        // ) : (
          datas.map((data) => {
            // count+= 1
            return (
              <Question
                id={data.id}
                title={data.title}
                contents={data.contents}
                now={data.now}
                replys={data.replys}
              />
            );
          })
        // )
        }
        <Sponser />
      </div>
    </div>
  );
}

export default Home;
