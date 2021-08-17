import React, { useEffect, useState } from "react";

function Detail(props) {

  console.log(props)

  return (
    <div className="DetailOut">
      <div className="DetailQBody">
        <div className="DetailTitle">{}</div>
        <div className="DetailContents">{}</div>
        <div className="DetailCreatedAt">{}</div>
      </div>
      <div className="DetailReplyCnt">
        답변
        <div className="count">{}</div>
      </div>
      <div className="replyBody">
        <div className="replyTitle"></div>
        <div className="replyContents"></div>
        <div className="replyCreatedAt"></div>
      </div>
    </div>
  );
}

export default Detail;
