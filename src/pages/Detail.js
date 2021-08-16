import React, { useEffect, useState } from "react";

function Detail({id, title, contents, now, replys}) {

    console.log(id)

  return (
    <div className="DetailOut" key={id}>
      <div className="DetailQBody">
        <div className="DetailTitle">{title}</div>
        <div className="DetailContents">{contents}</div>
        <div className="DetailCreatedAt">{now}</div>
      </div>
      <div className="DetailReplyCnt">
        답변
        <div className="count">{replys}</div>
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
