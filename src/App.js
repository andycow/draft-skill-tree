import React from "react";
import styled from "styled-components";
const Home = styled.div`
  width: 100%;
  height: 100%;
  background-color: #292929;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  >img{
    width: 200px;
  }
`;

const Right = styled.div`
  width: 50%;
  .name{
    color: #df716f;
  }
  .skillContent{
    background-color: #8d3736;
  }
`;

export default ()=>{
  const skillList = [
    {
      name: "",
      image: "./image/skill1.gif",
      content: "啟動之後，無論在何地都會進行(25/35/45/55)組硬舉，持續(50/70/80/100)秒。"
    }
  ];
  return (
    <Home>
      <Left>
        <img src="./image/logo.png" />
      </Left>
      <Right>
        <div className="info">
          <span className="name">張舉人</span>
        </div>
        {skillList.map((value, key)=>{
          return <div className="skillContent">
            <img src={value.image} />
            <span>{value.content}</span>
          </div>
        })}
      </Right>
    </Home>
  );
};
