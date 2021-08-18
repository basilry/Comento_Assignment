import React, { useEffect, useState } from "react";
import grayBack from "../gray_back.png";

function Detail({ DummyQuestions }) {
  // 주소로 아이디값 할당 및 상태 저장
  let url = window.location.href;
  let query = url.slice(url.length - 2);
  let arr = query.split("");

  query = arr.filter((el) => el !== "=").join("");

  // console.log("query :", query);
  // console.log("DummyQuestions :", DummyQuestions)

  // 퀘스천 게시물 아이디 대응 되는 상태 관리
  const [tempData, setTemp] = useState({});
  // console.log("tempData : ", tempData);

  const handleTempData = (id) => {
    // console.log("handleTempData's id :", id)

    for (let i = 0; i < DummyQuestions.length; i++) {
      if (DummyQuestions[i].id === Number(id)) {
        setTemp(DummyQuestions[i]);
      }
    }
  };

  useEffect(() => {
    handleTempData(query);
  });

  return (
    <div className="DetailOut">
      <div className="backBtn" >
        <li onClick={() =>{window.history.back()}}>
          <img src={grayBack} alt="grayBack" className="grayBack" />
          </li>
      </div>
      <div className="DetailQBody">
        <div className="DetailTitle">{tempData.title}</div>
        <div className="DetailContents">{tempData.contents}</div>
        <div className="DetailCreatedAt">{tempData.now}</div>
      </div>
      <div className="DetailReplyCnt">
        답변
        <div className="count">2</div>
      </div>
      <div className="replyBody">
        <div className="replyUser">reply_user_name</div>
        <div className="replyContents">contents</div>
        <div className="replyCreatedAt">created_at(2020-02-02)</div>
      </div>
      <div className="replyBody">
        <div className="replyUser">reply_user_name</div>
        <div className="replyContents">contents</div>
        <div className="replyCreatedAt">created_at(2020-02-02)</div>
      </div>
    </div>
  );
}

export default Detail;
