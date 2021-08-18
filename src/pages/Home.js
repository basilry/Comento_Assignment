import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Question from "../components/Question";
import Sponser from "../components/Sponser";
import greenDot from "../green_dot.png";
import grayDot from "../gray_dot.png";
import DummyQuestions from "../DummyDatas/DummyQuestions";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const getPostList = (page) => {
  return DummyQuestions.filter((post) => post.page === page);
};

function Home({ handlePopup }) {


  // !!만약 서버와 연결을 한다면..
  // const [datas, setDatas] = useState([]);
  // useEffect(() => {
  //   axios.get("serverURL")
  //   .then(res => {
  //     console.log(res);
  //     setDatas(res.data.questions);
  //   })
  //   .catch(err => console.log(err))
  // })
  // 이를 통해 datas라는 배열 상태에다, 서버에서 받아온 데이터 배열을 할당해주면 된다. 그 후는 콘솔로그를 보면서 서버에서 전송해준 데이터 형태를 확인해가면서 할당을 시켜줘야 할 듯 하다.



  // 오름차순, 내림차순 관련 스테이트 훅
  const [isStream, setStream] = useState("up");

  const handleStream = (e) => {
    // setStream(!isStream);
  };

  // 게시물 관련
  const [replys, setReplys] = useState(2);

  // 무한스크롤 관련
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(getPostList(1));

  const handleScroll = useCallback(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(page + 1)));
      setPage((prevPage) => prevPage + 1);
    }
  }, [page, posts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div className="HomeOut">
      <div className="loginBtn">
        <div>로그인</div>
      </div>
      <div className="homeBody">
        <div className="filterOut">
          <div className="streamBtns">
            <div className="upStream">
              <img src={greenDot} alt="greenDot" className="greenDot" />
              오름차순
            </div>
            <div className="downStream">
              <img src={grayDot} alt="grayDot" className="grayDot" />
              내림차순
            </div>
          </div>
          <div className="filterBtn">
            <div></div>
            <div className="filterBtnName" onClick={handlePopup}>
              필터
            </div>
          </div>
        </div>
        {posts.map((post, idx) => {
          return (
            <Link to={"/detail/id=" + post.id} className="navlink" key={post.id}>
              <Question
                key={idx}
                title={post.title}
                contents={post.contents}
                now={post.now}
                replys={post.replys}
              />
            </Link>
          );
        })}
        <Sponser />
      </div>
    </div>
  );
}

export default Home;
