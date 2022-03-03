import { useEffect, useState } from "react";
import { quiz } from "../data/Quiz";
import countapi from "countapi-js";
import { useRouter } from "next/router";
import Style from "../styles/Style.module.css";

export default function Quiz({ score, setScore }) {
    const [stageNumber, setStageNumber] = useState(1);
    // const [score, setScore] = useState(parseInt(window.atob(window.sessionStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))) || 0);
    const [leftQuiz, setLeftQuiz] = useState(quiz.length - 3);
    const [answerList, setAnswerList] = useState("");
    const [scoreData, setScoreData] = useState(0);
    const [checked, setChecked] = useState(false);
    const [disable, setDisable] = useState(false);

    let sc = score;

    const router = useRouter();

    const handleAnswerList = (e) => {
        setAnswerList(e.target.value);
        setChecked(true);
    }

    const handleAnswer = () => {
        // *******************입력형 퀴즈**********************

        // if (typeof window === 'object') {
            // if (stageNumber === 5) {
            //     if (document.getElementById("quiz5").value === quiz[4].answers[0].text) {
            //         setScore(score + quiz[4].answers[0].score);
            //         setLeftQuiz(leftQuiz - 1);
            //         setStageNumber(stageNumber + 1);
            //     } else if (document.getElementById("quiz5").value === "") {
            //         alert("정답을 입력해주세요");
            //     } else {
            //         setChecked(false);
            //         setScore(score);
            //         setLeftQuiz(leftQuiz - 1);
            //         setStageNumber(stageNumber + 1);
            //     }
            // } else {
            if (stageNumber === 10) {
                setChecked(false);
                setScore(sc + scoreData);
                setLeftQuiz(leftQuiz - 1);
                setStageNumber(stageNumber + 1)
                countapi.update('numberofuser', 'users', 1)
                    // .then(res => res.value)
                router.push('/loading');
            } else {
                setChecked(false);
                setScore(sc + scoreData);
                setLeftQuiz(leftQuiz - 1);
                setStageNumber(stageNumber + 1)
            };
            // }
        // }
    }

    // const showResult = () => {
    //     setChecked(false);
    //     setScore(sc + scoreData);
    //     setLeftQuiz(leftQuiz - 1);
    //     setStageNumber(stageNumber + 1);
    //     countapi.update('numberofuser', 'users', 1)
    //     .then(res => setHitCount(res.value))
    //     router.push('/loading');
    // }

    useEffect(() => {
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            e.returnValue = ''
        });
    }, [])

    // **************event감지**************
    useEffect(() => {

        // ************다음 퀴즈로 넘어갈 때 checked의 state를 false로 초기화************
        if (!checked) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [checked]);

    return (
        <div className={Style.wrap}>
            {
                // ****************입력형 퀴즈******************
                // stageNumber === 5 ? 
                // <>
                //     <p className="museumBold quiztitletext">2022 대학생 능력고사</p>
                //     <div className="namebox">
                //         <div className="museumMedium nametext1">이름</div>
                //         <div className="museumMedium nametext2">김상상</div>
                //     </div>
                //     <div className="line"></div>
                //     <div className="questionbox">
                //         <p className="museumMedium questiontext">{quiz[4].question}</p>
                //     </div>
                //     <div className="inputtextarea">
                //         <input type="text" id="quiz5" className="suitExtraBold inputtext" placeholder="정답 입력" />
                //     </div>
                // </>
                // : 

                // ****************버튼형 퀴즈*****************
                <>
                    <div style={{ width: '280px' }}>
                        <p className={`${Style.museumBold} ${Style.quiztitletext}`}>2022 대학생 능력고사</p>
                        <div className={Style.namebox}>
                            <div className={`${Style.museumMedium} ${Style.nametext1}`}>이름</div>
                            <div className={`${Style.museumMedium} ${Style.nametext2}`}>김상상</div>
                        </div>
                    </div>
                    <div className={Style.line}></div>
                    <div className={Style.questionbox}>
                        <p className={`${Style.museumMedium} ${Style.questiontext}`}>{quiz[stageNumber - 1].question}</p>
                    </div>
                    <div className={Style.answerarea}>
                        {quiz[stageNumber - 1].answers.map((answer) => (
                            <div className={Style.answerbuttonbox} key={answer.text} onClick={() => setScoreData(answer.score)} >
                                <div
                                    className={
                                        answerList === answer.quiznumber ?
                                        `${Style.answerradiobox} ${Style.answerradiochecked}` :
                                        Style.answerradiobox
                                    }
                                >
                                    <input
                                        type="radio"
                                        className={Style.answerradio}
                                        value={answer.quiznumber}
                                        id={answer.quiznumber}
                                        checked={answerList === answer.quiznumber}
                                        onChange={handleAnswerList}
                                        required
                                    />
                                    <label className={Style.suitExtraBold} htmlFor={answer.quiznumber}>✓</label>
                                </div>
                                <label
                                    className={
                                        `${Style.museumBold} ${answerList === answer.quiznumber ?
                                        `${Style.answertext} ${Style.answerradiochecked}` :
                                        Style.answertext}`
                                    }
                                    htmlFor={answer.quiznumber}
                                >
                                    {answer.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </>
            }
            {/* ***********진행 버튼*********** */}
            <button
                className={`${Style.suitExtraBold} ${Style.nextbutton}`}
                onClick={handleAnswer}
                disabled={disable === false}
            >
                다음
            </button>
            <p className={`${Style.suitRegular} ${Style.leftquiz}`}>{`${leftQuiz}개 문제 남음`}</p>
        </div>
    )
}