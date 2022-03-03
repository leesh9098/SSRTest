import Image from "next/image";
import { useRouter } from "next/router";
import ResultData from "../data/ResultData";
import SsunivLogo from "../public/images/sangsanguniv.png";
import Giveaway from "../public/images/경품.png";
import Style from "../styles/Style.module.css";

const ResultSection = ({ param }) => {
    const router = useRouter();

    const intoEvent = () => {
        if (window.localStorage.getItem("playLog") === 'y') {
            router.push("/eventquiz");
        } else {
            alert("진행 기록이 없습니다. 다시하기 버튼을 눌러 처음부터 진행해주세요");
        }
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <p className={Style.score}>
                    {
                        window.sessionStorage.getItem("score") ?
                            `${window.sessionStorage.getItem("score")}점` :
                            null
                    }
                </p>
                <div className={Style.resultimage}>
                    <Image
                        src={ResultData[param].src}
                        alt="결과"
                        onContextMenu={(e) => e.preventDefault()}
                        width={320}
                        height={568}
                    />
                </div>
            </div>
            <div style={{
                width: '320px',
                textAlign: 'left',
                paddingLeft: '20px',
                boxSizing: 'border-box',
                marginBottom: '20px'
            }}>
                <Image
                    src={SsunivLogo}
                    alt="상상유니브 로고"
                    onContextMenu={(e) => e.preventDefault()}
                    width={90}
                    height={24}
                />
            </div>
            <div style={{ width: '320px' }}>
                <p className={`${Style.suitBold} ${Style.giveawaytitle}`}>대학생 능력고사 경품 이벤트</p>
                <div className={Style.giveawayinfowrap}>
                    <p className={`${Style.suitRegular} ${Style.giveawayinfo}`}>상상유니브에 관한 퀴즈를 맞추고</p>
                    <p className={`${Style.suitRegular} ${Style.giveawayinfo}`}>출석체크하면 경품 추첨 응모 완료!</p>
                </div>
            </div>
            <div style={{ boxSizing: 'border-box', marginBottom: '20px' }}>
                <Image
                    src={Giveaway}
                    alt="경품_아이폰,스타벅스기프티콘"
                    onContextMenu={(e) => e.preventDefault()}
                    width={280}
                    height={166}
                />
            </div>
            <button className={`${Style.suitExtraBold} ${Style.nextbutton}`} onClick={intoEvent}>
                경품 이벤트 참여하기
            </button>
            <div className={Style.eventinfowrap}>
                <p className={`${Style.suitRegular} ${Style.eventinfo}`}>
                    행사기간: 2022년 2월 24일(목) 21시 까지
                </p>
                <p className={`${Style.suitRegular} ${Style.eventinfo}`}>
                    당첨발표: 2022년 3월 2일 수요일 상상유니브 인스타그램
                </p>
            </div>
        </>
    )
}

export default ResultSection;