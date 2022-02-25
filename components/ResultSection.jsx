import { useRouter } from "next/router";
import ResultData from "../data/ResultData";
import SsunivLogo from "../images/sangsanguniv.png";
import Giveaway from "../images/경품.png";

const ResultSection = ({ param }) => {
    const router = useRouter();

    const intoEvent = () => {
        if (window.localStorage.getItem("playLog") === 'y') {
            router.push("/event/univtest/eventquiz");
        } else {
            alert("진행 기록이 없습니다. 다시하기 버튼을 눌러 처음부터 진행해주세요");
        }
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <p className="score">
                    {
                        window.sessionStorage.getItem("score") ?
                            `${window.sessionStorage.getItem("score")}점` :
                            null
                    }
                </p>
                <img
                    src={ResultData[param].src}
                    alt="결과"
                    onContextMenu={(e) => e.preventDefault()}
                    className="resultimage"
                />
            </div>
            <div style={{ width: '320px', textAlign: 'left', paddingLeft: '20px', boxSizing: 'border-box' }}>
                <img
                    src={SsunivLogo}
                    alt="상상유니브 로고"
                    onContextMenu={(e) => e.preventDefault()}
                    className="ssunivlogo"
                />
            </div>
            <div style={{ width: '320px' }}>
                <p className="suitBold giveawaytitle">대학생 능력고사 경품 이벤트</p>
                <div className="giveawayinfowrap">
                    <p className="suitRegular giveawayinfo">상상유니브에 관한 퀴즈를 맞추고</p>
                    <p className="suitRegular giveawayinfo">출석체크하면 경품 추첨 응모 완료!</p>
                </div>
            </div>
            <img
                src={Giveaway}
                alt="경품_아이폰,스타벅스기프티콘"
                onContextMenu={(e) => e.preventDefault()}
                className="giveaway"
            />
            <button className="suitExtraBold nextbutton" onClick={intoEvent}>
                경품 이벤트 참여하기
            </button>
            <div className="eventinfowrap">
                <p className="suitRegular eventinfo">
                    행사기간: 2022년 2월 24일(목) 21시 까지
                </p>
                <p className="suitRegular eventinfo">
                    당첨발표: 2022년 3월 2일 수요일 상상유니브 인스타그램
                </p>
            </div>
        </>
    )
}

export default ResultSection;