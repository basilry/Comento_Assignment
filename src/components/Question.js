import React from 'react'

function Question(){
    return(
        <div className="QuestionOut">
            <div className="categoryOut">
              <div className="categoryName">category_name</div>
              <div className="categoryId">id</div>
            </div>
            <div className="idDateOut">
                <div className="userId">user_Id</div>
                <div className="createdAt">created_at(2020-02-02)</div>
            </div>
            <div className="contentsOut">
                <div className="title">Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title</div>
                <div className="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents</div>
            </div>
        </div>
    )
}

export default Question;