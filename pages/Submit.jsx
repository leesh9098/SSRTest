import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import SsunivLogo from "./images/sangsanguniv.png"
import { useRouter } from "next/router";

export default function Submit() {
    const [univ, setUniv] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [review, setReview] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (
            !window.localStorage.getItem("playLog") ||
            window.localStorage.getItem("playLog") !== 'y'
        ) {
            alert("진행기록이 없습니다 처음 페이지로 이동합니다");
            router("/event/univtest");
        }
    }, [router])

    useEffect(() => {
        const setId = Math.random().toString(36).substring(2, 9);
        window.localStorage.setItem("userid", setId);
    }, [])

    const handleUniv = (e) => {
        setUniv(e.target.value);
    }
    
    const handleName = (e) => {
        setUserName(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleReview = (e) => {
        setReview(e.target.value);
    }

    const handleCheck1 = (e) => {
        setCheck1(e.target.checked);
    }

    const handleCheck2 = (e) => {
        setCheck2(e.target.checked);
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        await axios.get(`https://dev.trepick.com/serverTime`)
            .then((success) => {
                const server = success.data.serverTime;
                window.sessionStorage.setItem(window.btoa("submit time"), window.btoa(server));
            })

        await axios.post(`https://dev.trepick.com/event-log`, { // 전송할 서버 url
            userId: window.localStorage.getItem("userid"),
            storyName: "2022 대학생 능력고사",
            client: "상상유니브 인천지사",
            openTime: "2021-02-01 09:00:00",
            closeTime: "2022-02-24 21:00:00",
            createdTime: window.atob(window.sessionStorage.getItem(window.btoa("submit time"))),
            attendeeInfo: {
                univ: univ,
                userName: userName,
                userPhone: phone,
                userReview: review,
                collectPersonalInfo: check1,
                marketingConsent: check2
            },
            playLog: {
                submitTime: window.atob(window.sessionStorage.getItem(window.btoa("submit time")))
            }
        })
            .then((success) => {
                // openModalFinish();
                if (window.confirm("제출되었습니다 처음으로 돌아갑니다")) {
                    window.localStorage.clear();
                    window.sessionStorage.clear();
                    router.push("/event/univtest");
                }
                console.log(success);
            })
            .catch((error) => { console.log(error) });
    }
    return (
        <div className="submitwrap">
            <div style={{ width: '280px', textAlign: 'left' }}>
                <img src={SsunivLogo} alt="상상유니브 로고" className="ssunivlogo" />
            </div>
            <div className="cleartitlewrap">
                <p className="suitBold cleartitletext">경품 이벤트 참여를 위한</p>
                <p className="suitBold cleartitletext">정보를 입력해주세요</p>
            </div>
            <div className="clearinfowrap">
                <p className="suitRegular clearinfotext">상상유니브 홈페이지에서 수강신청 후</p>
                <p className="suitRegular clearinfotext">24일에 출석체크하는 것을 잊지마세요!</p>
            </div>
            <a
                href="https://www.sangsanguniv.com/program/detail.univ?termSeq=24093"
                target="_blank"
                rel="noreferrer"
                className="suitBold ssunivlink"
            >
                {'상상유니브 가기 >'}
            </a>
            <form onSubmit={onSubmit} style={{ marginTop: "20px" }}>
                <input
                    onChange={handleUniv}
                    value={univ}
                    id="department"
                    type="text"
                    placeholder="학교"
                    className="inputregist spoqa"
                    required />
                <input
                    onChange={handleName}
                    value={userName}
                    id="name"
                    type="text"
                    placeholder="성함"
                    name="name"
                    className="inputregist spoqa"
                    required />
                <input
                    onChange={handlePhone}
                    value={phone}
                    id="phone"
                    type="tel"
                    placeholder="연락처"
                    name="phone"
                    className="inputregist spoqa"
                    // pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                    maxLength="13"
                    // onKeyUp={handleAutoHypen}
                    required />
                <textarea
                    onChange={handleReview}
                    value={review}
                    id="review"
                    placeholder="후기 (개선점, 문의사항 등)"
                    className="review spoqa"
                    maxLength="150"
                    style={{
                        marginBottom: '20px'
                    }}
                     />
                <div className="checkbox_area">
                    <input
                        onChange={handleCheck1}
                        checked={check1}
                        id="check1"
                        type="checkbox"
                        name="check1"
                        required />
                    <label htmlFor="check1">
                        <div>
                            <p className="suitRegular personaldata">
                                (필수) 이벤트 참여 및 경품 발송을 위한 개인정보 수집, 이용, 취급위탁 동의
                                <span>
                                    <a href="https://bluefrog.notion.site/bd22f3433e994d6b9bb926857319f3d3" target="_blank" rel="noreferrer">
                                        <span className="suitMedium terms">
                                            약관보기
                                        </span>
                                    </a>
                                </span>
                            </p>
                        </div>
                    </label>
                    {/* <div>
                        <a href="https://bluefrog.notion.site/60213288c1b743c8828e00f8bc4eb45d" target="_blank" rel="noreferrer">
                            <span className="sqoqa terms">
                                약관보기
                            </span>
                        </a>
                    </div> */}
                </div>
                <div className="checkbox_area" style={{ marginBottom: '20px' }}>
                    <input
                        onChange={handleCheck2}
                        checked={check2}
                        id="check2"
                        type="checkbox"
                        name="check2" />
                    <label htmlFor="check2">
                        <div>
                            <p className="suitRegular personaldata">
                                (선택) 마케팅 정보 수신을 위한 개인정보 3자 제공에 동의
                                <span>
                                    <a href="https://bluefrog.notion.site/3-7a69259cf59a45869d05b5ea475a4a4e" target="_blank" rel="noreferrer">
                                        <span className="suitMedium terms">
                                            약관보기
                                        </span>
                                    </a>
                                </span>
                            </p>
                        </div>
                    </label>
                    {/* <div>
                        <a href="https://bluefrog.notion.site/e01d6fad05ce4e1397980fd4b3af08e0" target="_blank" rel="noreferrer">
                            <span className="sqoqa terms">
                                약관보기
                            </span>
                        </a>
                    </div> */}
                </div>
                <button
                    disabled={
                        univ === "" ||
                        userName === "" || phone === "" ||
                        review === "" || check1 === false
                    }
                    id="regbtn"
                    type="submit"
                    className="nextbutton suitExtraBold" >
                    제출하기
                </button>
            </form>
            <div className="eventinfowrap">
                <p className="suitRegular eventinfo">
                    행사기간: 2022년 2월 24일(목) 21시 까지
                </p>
                <p className="suitRegular eventinfo">
                    당첨발표: 2022년 3월 2일 수요일 상상유니브 인스타그램
                </p>
            </div>
            <Footer />
        </div>
    )
}