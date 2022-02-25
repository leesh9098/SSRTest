import React from "react";
// import ReactGA from "react-ga4";
// import "../styles/reset.css";
// import MainThumbnail from "/images/mainthumbnail.png";
import Style from "../styles/Style.module.css";
import StartButton from "../components/button/StartButton";
import countapi from "countapi-js";
import Footer from "../components/Footer";
// import MainImage from "/images/mainimage.png";
import Head from "next/head";

export default class Prolog extends React.Component {
  state = {
    hitCount: 0
  }

  componentDidMount() {
    countapi.get('numberofuser', 'users')
      .then(res => this.setState({ hitCount: res.value }))
    window.localStorage.setItem("playLog", "y");
    // ReactGA.initialize(process.env.REACT_APP_GA_ID);
    // ReactGA.send("pageview");
  }

  render() {
    return (
      <>
        <Head>
          <meta property="og:url" content={`http://localhost:3000`} />
          <meta property="og:title" content="2022 대학생 능력고사" />
          <meta property="og:description" content="당신의 대학교 용어 점수는?" />
          <meta property="og:image" content={`/images/mainthumbnail.png`} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="trepick" />
          <meta name="twitter:title" content="2022 대학생 능력고사" />
          <meta name="twitter:description" content="당신의 대학교 용어 점수는?" />
          <meta name="twitter:image" content={`/images/mainthumbnail.png`} />
        </Head>
        <div>
          <div style={{ width: '280px' }}>
            <div className={Style.titlebox}>
              <p className={`${Style.museumBold} ${Style.titletext}`}>2022</p>
              <p className={`${Style.museumBold} ${Style.titletext}`}>대학생 능력고사</p>
            </div>
            <p className={`${Style.museumMedium} ${Style.subtitletext}`}>당신의 대학교 용어 점수는 과연?</p>
          </div>
          <div className={Style.line}></div>
          <div className={Style.imagearea}>
            <img src={`/images/mainimage.png`} alt="메인이미지" className={Style.mainimage} />
          </div>
          <p id="test" className={`${Style.suitRegular} ${Style.numberofuser}`}>{`현재 ${this.state.hitCount}명이 참여`}</p>
          <StartButton />
          <div className={Style.logoarea}></div>
          <Footer />
        </div>
      </>
    )
  }
}