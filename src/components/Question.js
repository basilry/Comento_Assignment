import React from "react";
import Detail from "../pages/Detail";
import { Link, NavLink } from "react-router-dom";

function Question({ id, title, contents, now, replys }) {

  return (
    <div className="QuestionOut">
      <div className="categoryOut">
        <div className="categoryName">category_name</div>
        <div className="categoryId">id</div>
      </div>
      <div className="idDateOut">
        <div className="userId">user_Id</div>
        <div className="createdAt">{now}</div>
      </div>
      <div className="contentsOut">
        <div className="title">
          {title.length >= 25 ? title.slice(0, 25) + "..." : title}
        </div>
        <div className="contents">
          {contents.length >= 35 ? contents.slice(0, 35) + "..." : contents}
        </div>
      </div>
    </div>
  );
}

export default Question;
