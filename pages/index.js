import React from "react";
// import ReactGA from "react-ga4";
// import "../styles/reset.css";
import styles from "../styles/Home.module.css";
import { Helmet } from "react-helmet";
import MainThumbnail from "./images/mainthumbnail.png";
import StartButton from "./components/button/StartButton";
import countapi from "countapi-js";
import Footer from "./components/Footer";
import MainImage from "./images/mainimage.png";
import Image from "next/image";

let w;

export default class Prolog extends React.Component {
  state = {
    hitCount: this.props.hitCount,
  }

  componentDidMount() {
    w = window.location.href
    this.props.setHitCount(
      countapi.get('numberofuser', 'users')
        .then(res => this.setState({ hitCount: res.value }))
    )
    window.localStorage.setItem("playLog", "y");
    // ReactGA.initialize(process.env.REACT_APP_GA_ID);
    // ReactGA.send("pageview");
  }

  render() {
    return (
      <>
        <Helmet>
          <meta property="og:url" content={w} />
          <meta property="og:title" content="2022 대학생 능력고사" />
          <meta property="og:description" content="당신의 대학교 용어 점수는?" />
          <meta property="og:image" content={MainThumbnail} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="trepick" />
          <meta name="twitter:title" content="2022 대학생 능력고사" />
          <meta name="twitter:description" content="당신의 대학교 용어 점수는?" />
          <meta name="twitter:image" content={MainThumbnail} />
        </Helmet>
        <div className={styles.wrap}>
          <Image
            alt="배경 이미지"
            src="/images/backgroundimage.png"
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          <div style={{ width: '280px' }}>
            <div className="titlebox">
              <p className="museumBold titletext">2022</p>
              <p className="museumBold titletext">대학생 능력고사</p>
            </div>
            <p className="museumMedium subtitletext">당신의 대학교 용어 점수는 과연?</p>
          </div>
          <div className="line"></div>
          <div className="imagearea">
            <img src={MainImage} alt="메인이미지" className="mainimage" />
          </div>
          <p id="test" className="suitRegular numberofuser">{`현재 ${this.state.hitCount}명이 참여`}</p>
          <StartButton />
          <div className="logoarea"></div>
          <Footer />
        </div>
      </>
    )
  }
}