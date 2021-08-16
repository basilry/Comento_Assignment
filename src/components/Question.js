import React from "react";
import Detail from "../pages/Detail";
import { Link, NavLink } from "react-router-dom";

function Question({ id, title, contents, now, replys }) {
  return (
    // <li>
    <NavLink to={"/detail/" + id} className="navlink" id={id}>
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
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
        </div>
      </div>
    </NavLink>
    // </li>
  );
}

export default Question;
